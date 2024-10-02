// main/index
import React, { Suspense } from 'react';
import Header from '../../components/Day/Header';
import NavBar from '@/components/common/NavBar';
import SlideMenu from '@/components/Day/SideMenu';
import { useState } from 'react';
import { useGetEvents } from '@/hooks/api/useEvent';
import EventPage from '@/components/Day/EventPage';

interface Props {}

export default function MainPage<Props>({}) {
  const { data, isSuccess, error} = useGetEvents();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [currentEventId, setCurrentEventId] = useState(0);
  console.log(data?.data);

  return (
    <>
      <div className={`flex flex-col text-center w-full h-screen items-center`}>
        <Header onClick={() => setIsSideMenuOpen(true)} />
        <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
        {isSuccess && <EventPage eventId={data?.data?.[currentEventId]?.eventId} setStep={setCurrentEventId}/>}
        <NavBar />
      </div>
    </>
  );
}
