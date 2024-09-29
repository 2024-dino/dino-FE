import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import WaveSurfer from 'wavesurfer.js';
import PlayButtonIcon from '@/assets/icon/PlayButtonIcon.svg';
import ResetButtonIcon from '@/assets/icon/ResetIcon.svg';
import ApproveIcon from '@/assets/icon/ApproveIcon.svg';

interface WaveformProps {
  url: string;
  toggleListening: () => void;
  setAudioUrl: Dispatch<SetStateAction<string | null>>;
  closeModal: () => void;
}

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const Waveform = ({
  url,
  toggleListening,
  setAudioUrl,
  closeModal,
}: WaveformProps) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        barWidth: 2,
        cursorWidth: 1,
        container: '#waveform',
        backend: 'WebAudio',
        height: 65,
        progressColor: '#8ABADD',
        waveColor: '#EFEFEF',
        cursorColor: 'black',
        barRadius: 100,
        barGap: 2,
        autoScroll: true,
        autoCenter: true,
      });

      wavesurfer.current.load(url);

      wavesurfer.current.on('audioprocess', () => {
        if (wavesurfer.current) {
          setCurrentTime(wavesurfer.current.getCurrentTime());
        }
      });
    }
  }, [url]);

  const handlePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setPlaying(!playing);
    }
  };
  const handleReset = () => {
    if (wavesurfer.current) {
      wavesurfer.current.pause();
      setPlaying(!playing);
      toggleListening();
      setAudioUrl(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-transparent">
      <div id="waveform" className="w-full px-[38px]" ref={waveformRef} />
      <div className="text-[#444] text-center font-pretendard text-base font-extralight leading-[20px] pb-4">{formatTime(currentTime)}</div>
      <div
        className={
          'flex justify-center items-center w-[60px] border-none outline-none cursor-pointer pb-[3px]'
        }
      >
        <div className={'flex flex-row gap-3 items-center justify-center'}>
          <PlayButtonIcon onClick={handlePlay} />
          <ResetButtonIcon onClick={handleReset} />
          <ApproveIcon onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Waveform;
