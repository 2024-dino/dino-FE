import { useGetEvent } from '@/hooks/api/useEvent';
import React, { Dispatch, SetStateAction, useState } from 'react';
import EventElement from '../eventManage/EventElement';
import ProgressBar from './ProgressBar';
import DateChanger from '../DateChanger';
import QuestionList from './QuestionList';
import QuestionModal from './QuestionModal';
interface FunnelDispenserProps {
  eventId: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const EventPage = ({ eventId, setStep }: FunnelDispenserProps) => {
  const { data, isSuccess, error } = useGetEvent(eventId);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  console.log(eventId)
  return (
    <>
        <EventElement />
        <ProgressBar answerNum={16} totalNum={22} endColor="#A5D1C0" />
        <DateChanger />
        {data && <QuestionList setChosenEvent={setIsQuestionModalOpen} questionList={data.data.questionContent}/>}
        {isQuestionModalOpen && (
        <QuestionModal
          isOpen={isQuestionModalOpen}
          setIsOpen={setIsQuestionModalOpen}
        />
      )}
    </>
  );
};

export default EventPage;
