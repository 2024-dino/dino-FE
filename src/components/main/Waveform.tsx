import React, { useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';

  const handleWave = (): void => {
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
  };

  const handlePlay = (): void => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
    if (playing && wavesurfer.current !== null) {
      wavesurfer.current.destroy();
      wavesurfer.current = null;
    }
    setPlaying(!playing);
  };

  const handleSound = () => {
    if (wavesurfer.current == null) {
      handleWave();
    }
    handlePlay();
  };

  return (
    <div className="flex flex-row items-center justify-center h-[100px] w-full bg-transparent gap-8">
      <button
        className="flex justify-center items-center w-[60px] h-[60px] bg-[#efefef] rounded-full border-none outline-none cursor-pointer pb-[3px] hover:bg-[#ddd]"
        onClick={handleSound}
      >
        {!playing ? 'Play' : 'Pause'}
      </button>
      <div id="waveform" className="w-full h-[90px]" ref={waveformRef} />
      <audio id="track" src={url} />
    </div>
  );
};

export default Waveform;
