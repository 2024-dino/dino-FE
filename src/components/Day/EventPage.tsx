import { useGetEvent } from '@/hooks/api/useEvent';
import React, { Dispatch, SetStateAction, useState } from 'react';
import ProgressBar from './ProgressBar';
import DateChanger from '../DateChanger';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
import { getProgressAndButtonColor } from '@/utils/emotionColor';
import { EmotionType } from '@/types/emotion';
import Image from 'next/image';
import { QuestionType } from '@/types/event';
interface FunnelDispenserProps {
  eventId: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const EventPage = ({ eventId, setStep }: FunnelDispenserProps) => {
  const { data, isSuccess, error } = useGetEvent(eventId);
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionType | undefined>(undefined);

  return (
    <>
      <Image src={data?.data?.fileUrl} alt="growth" width={220} height={300} />
      <ProgressBar
        answerNum={data?.data?.totalAnswerCount}
        totalNum={data?.data?.totalQuestionCount}
        endColor={getProgressAndButtonColor(data?.data?.emotion as EmotionType)}
      />
      <DateChanger event={data?.data} />
      {data && (
        <QuestionList
          setChosenEvent={setSelectedQuestion}
          questionList={data?.data?.questionContent}
        />
      )}
      {selectedQuestion && (
        <QuestionModal
          selectedQuestion={selectedQuestion}
          onClose={setSelectedQuestion}
        />
      )}
    </>
  );
};

export default EventPage;
