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
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

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

      wavesurfer.current.on('audioprocess', () => {
        if (wavesurfer.current) {
          setCurrentTime(wavesurfer.current.getCurrentTime());
        }
      });
    }
  }, [url]);

  const handlePlay = (): void => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setPlaying(!playing);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-transparent">
      <div id="waveform" className="w-full" ref={waveformRef} />
      <div>{formatTime(currentTime)}</div>
      <div
        className={
          'flex justify-center items-center w-[60px] border-none outline-none cursor-pointer pb-[3px]'
        }
      >
        <PlayButtonIcon onClick={handlePlay} />
      </div>
    </div>
  );
};

export default Waveform;