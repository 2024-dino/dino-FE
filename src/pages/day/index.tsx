// main/index

import DateChanger from '@/components/DateChanger';
import EventElement from '@/components/eventManage/EventElement';
import EventList from '@/components/Day/EventList';
import Header from '../../components/Day/Header';
import NavBar from '@/components/common/NavBar';
import QuestionModal from '@/components/Day/QuestionModal';
import SlideMenu from '@/components/Day/SideMenu';
import { useState } from 'react';
import ProgressBar from '@/components/Day/ProgressBar';
import { useGetEvents } from '@/hooks/api/useEvent';

interface Props {}

export default function MainPage<Props>({}) {
  const { data, isSuccess, error } = useGetEvents();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  console.log(data);
  const handleTimeChange = () => {
    return;
  };
  return (
    <>
      <div className={`flex flex-col text-center w-full h-screen items-center`}>
        <Header onClick={() => setIsSideMenuOpen(true)} />
        <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
        <EventElement />
        <ProgressBar answerNum={16} totalNum={22} endColor="#A5D1C0" />
        <DateChanger />
        <EventList setChosenEvent={setIsQuestionModalOpen} />
        <NavBar />
      </div>
      {isQuestionModalOpen && (
        <QuestionModal
          isOpen={isQuestionModalOpen}
          setIsOpen={setIsQuestionModalOpen}
        />
      )}
    </>
  );
}
