import { useCallback, useEffect, useState } from 'react';
import 'regenerator-runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import RecordIcon from '@/assets/icon/RecordIcon.svg';

const AudioRecord = () => {
  const {
    transcript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [userInput, setUserInput] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState();

  const toggleListening = () => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    if (listening) {
      SpeechRecognition.stopListening();
      setUserInput(finalTranscript);
      resetTranscript();
    } else {
      setUserInput("");
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
    console.log(transcript);
  };

  return (
    <>
      <div className="flex items-center bg-white px-3 py-4 w-[calc(100vw-40px)] rounded-[10px] shadow-lg">
        <h2 className="text-[24px] font-bold text-[#EEEEEE] pr-2">A.</h2>
        <div className="flex w-full justify-between">
          {listening ? (
            <div>{transcript}</div>
          ) : (
            <input
              className="w-full outline-none text-wrap"
              value={userInput}
              placeholder="답변 기록하기"
              onChange={(e) => setUserInput(e.target.value)}
            />
          )}
    
          <RecordIcon onClick={toggleListening} />
        </div>
      </div>
    </>
  );
};

export default AudioRecord;
