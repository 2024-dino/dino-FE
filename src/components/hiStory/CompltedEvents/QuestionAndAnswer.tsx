import { QuestionContentType } from '@/types/hiStory';
import { useState } from 'react';

interface Props {
  question: QuestionContentType;
}

const QuestionAndAnswer = ({ question }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="w-[calc(100%-40px)] h-auto py-4 mb-3 self-center rounded-[10px] bg-white"
      style={{
        boxShadow: '0px 2px 16px 0px rgba(68, 68, 68, 0.12)',
      }}
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="w-full flex flex-col items-center justify-center px-[10px]">
        <div className="w-full items-center flex">
          <span className="font-pretendard-300 text-[#BAD7EC] text-[24px]">
            Q.
          </span>
          <span className="ml-[10px] font-pretendard-200 text-[14px]">
            {question.content}
          </span>
        </div>

        {question.isAnswer && showAnswer && (
          <div className="w-full flex items-center">
            <span className="font-pretendard-300 text-[#BAD7EC] text-[24px]">
              A.
            </span>
            <span className="ml-[10px] font-pretendard-200 text-[14px]">
              {question.myAnswer}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
