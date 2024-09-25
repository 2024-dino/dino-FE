import NavBar from '@/components/common/NavBar';
import EventCard from '@/components/ing/EventCard';
import Header from '@/components/main/Header';
import SlideMenu from '@/components/main/SideMenu';
import mockEventData from '@/store/mockData';
import React, { useState } from 'react';

const IngPage = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className="w-full h-screen items-center`">
      <Header onClick={() => setIsSideMenuOpen(true)} />
      <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
      <div className='flex flex-col w-full px-5 gap-3 items-center'>
        {mockEventData.data.map((element) => (
          <EventCard {...element} />
        ))}
      </div>

      <div className="absolute bottom-[100px] w-full px-5 flex items-center jusify-center">
        <button className="w-full relative shadow-[0_2px_20px_rgba(136,136,136,0.12)] rounded-lg bg-white/80 h-[52px]">
          새로운 이벤트 생성
        </button>
      </div>

      <NavBar />
    </div>
  );
};

export default IngPage;
