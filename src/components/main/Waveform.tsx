import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import PlayButtonIcon from '@/assets/icon/PlayButtonIcon.svg';

interface WaveformProps {
  url: string;
}

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const Waveform = ({ url }: WaveformProps) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('timeupdate', updateTime);
  }, []);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        barWidth: 3,
        cursorWidth: 1,
        container: '#waveform',
        backend: 'WebAudio',
        height: 80,
        progressColor: '#2D5BFF',
        waveColor: '#EFEFEF',
        cursorColor: 'transparent',
      });

      wavesurfer.current.load(url);
    }
  }, [])

  const handlePlay = (): void => {
    if (wavesurfer.current && !playing) {
      wavesurfer.current.playPause();
      audioRef?.current?.play();
    }
    if (playing && wavesurfer.current) {
      wavesurfer.current.playPause();
      audioRef?.current?.pause();
    }
    setPlaying(!playing);
  };

  const handleSound = () => {
    if (wavesurfer.current == null) {
    }
    handlePlay();
  };

  return (
    <div className="flex flex-col items-center w-full bg-transparent">
      <div id="waveform" className="w-full" ref={waveformRef} />
      <audio id="track" src={url} ref={audioRef} />
      <div>{formatTime(currentTime)}</div>
      <div
        className={
          'flex justify-center items-center w-[60px] border-none outline-none cursor-pointer pb-[3px]'
        }
      >
        <PlayButtonIcon onClick={handleSound} />
      </div>
    </div>
  );
};

export default Waveform;
