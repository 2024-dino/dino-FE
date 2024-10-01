// main/index
import React from 'react';
import DateChanger from '@/components/DateChanger';
import EventElement from '@/components/eventManage/EventElement';
import QuestionList from '@/components/Day/QuestionList';
import Header from '../../components/Day/Header';
import NavBar from '@/components/common/NavBar';
import QuestionModal from '@/components/Day/QuestionModal';
import SlideMenu from '@/components/Day/SideMenu';
import { useState } from 'react';
import ProgressBar from '@/components/Day/ProgressBar';
import { useGetEvent, useGetEvents } from '@/hooks/api/useEvent';
import EventPage from '@/components/Day/EventPage';
import { useChangeName } from '@/hooks/api/useUser';

interface Props {}

export default function MainPage<Props>({}) {
  const { data, isSuccess, error} = useGetEvents();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [currentEventId, setCurrentEventId] = useState(0);
  console.log(data);

  return (
    <>
      <div className={`flex flex-col text-center w-full h-screen items-center`}>
        <Header onClick={() => setIsSideMenuOpen(true)} />
        <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
        {isSuccess && <EventPage eventId={data[currentEventId]?.eventId} setStep={setCurrentEventId}/>}
        <NavBar />
      </div>
    </>
  );
}
