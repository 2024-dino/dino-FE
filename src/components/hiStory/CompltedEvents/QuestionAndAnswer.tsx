import { CompleteEventType, QuestionContentType } from '@/types/hiStory';
import { useEffect, useState } from 'react';

import BookmarkIcon from '@/assets/icon/BookMarkIcon';
import { EmotionType } from '@/types/emotion';
import { getProgressAndButtonColor } from '@/utils/emotionColor';

interface Props {
  question: QuestionContentType | CompleteEventType['representativeQuestion'];
  title?: string;
  isRepresent?: boolean;
  emotion?: EmotionType;
  isAvailBookmark?: boolean;
}

const QuestionAndAnswer = ({
  question,
  title,
  isRepresent = false,
  emotion,
  isAvailBookmark = false,
}: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const toggleIsBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 중지
    setIsBookmark(!isBookmark);
  };

  useEffect(() => {
    setShowAnswer(!!title);
    setIsBookmark(question.isPriority);
  }, [question, title]);

  const backgroundStyle =
    isRepresent && emotion
      ? {
          background: `linear-gradient(92deg, ${getProgressAndButtonColor(
            emotion,
          )}00 0%, ${getProgressAndButtonColor(
            emotion,
          )}47 50%, ${getProgressAndButtonColor(emotion)}66 100%), #FFF`,
          boxShadow: '0px 2px 16px 0px rgba(68, 68, 68, 0.12)',
        }
      : {
          backgroundColor: '#FFF',
          boxShadow: '0px 2px 16px 0px rgba(68, 68, 68, 0.12)',
        };

  const renderAnswer = (type: string) => {
    switch (type) {
      case 'TEXT':
        return <p className="leading-[24px]">{question.myAnswer}</p>;
      case 'IMAGE':
        return (
          <img
            src={question.fileUrl}
            alt="answer"
            className="w-full h-[100px] object-cover mt-2"
          />
        );
      case 'VOICE':
        return (
          <p className="leading-[24px]">Voice answer not implemented yet</p>
        );
      default:
        return <p className="leading-[24px]">{question.myAnswer}</p>;
    }
  };

  return (
    <div className="w-[calc(100%-40px)] mx-auto">
      {title && (
        <div className="w-full flex justify-center">
          <div className="w-[calc(100%-24px)] h-[20px] mb-3">
            <span className="font-pretendard-400 text-[#888] text-[14px]">
              {title}
            </span>
          </div>
        </div>
      )}

      <div
        className={`w-full h-auto mb-2.5 py-4 self-center rounded-[10px] relative`}
        style={backgroundStyle}
        onClick={() => !title && setShowAnswer(!showAnswer)}
      >
        <div className="w-full flex flex-col items-start justify-center px-[10px]">
          <div className="w-full flex">
            <div className="flex-shrink-0 w-[34px]">
              <span className="font-pretendard-300 text-[#BAD7EC] text-[24px] leading-[24px]">
                Q.
              </span>
            </div>
            <span className="font-pretendard-200 text-[14px] flex-grow leading-[24px]">
              {question.content}
            </span>
          </div>

          {question.isAnswer && (showAnswer || !!title) && (
            <>
              <div
                className={`w-full flex mt-1 ${isAvailBookmark ? 'mb-2' : ''}`}
              >
                <div className="flex-shrink-0 w-[34px]">
                  <span className="font-pretendard-300 text-[#BAD7EC] text-[24px] leading-[24px]">
                    A.
                  </span>
                </div>
                <div className="flex-grow font-pretendard-200 text-[14px]">
                  {renderAnswer(question.type!)}
                </div>
              </div>
              {isAvailBookmark && (
                <div
                  className="absolute bottom-[11px] right-4"
                  onClick={toggleIsBookmark}
                >
                  <BookmarkIcon isMarked={isBookmark} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
