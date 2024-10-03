// main/index
import React, { Suspense } from 'react';
import {
  getBackGroundStyle,
  getProgressAndButtonColor,
} from '@/utils/emotionColor';

import { EmotionType } from '@/types/emotion';
import EventPage from '@/components/Day/EventPage';
import NavBar from '@/components/common/NavBar';
import NextTriButtonIcon from '@/assets/icon/NextTriButtonIcon';
import PrevTriButtonIcon from '@/assets/icon/PrevTriButtonIcon';
import SlideMenu from '@/components/Day/SideMenu';
import { useGetEvents } from '@/hooks/api/useEvent';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '@/components/Day/Header';

interface Props {}

export default function MainPage<Props>({}) {
  const { data, isSuccess, error } = useGetEvents();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevEventId =
    currentIndex > 0 ? data?.data[currentIndex - 1].eventId : null;
  const nextEventId =
    currentIndex < data?.data.length - 1
      ? data?.data[currentIndex + 1].eventId
      : null;
  const handlePrevClick = () => {
    prevEventId && setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    nextEventId && setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <div
        className={`flex flex-col text-center w-full h-screen items-center`}
        style={getBackGroundStyle(
          data?.data?.[currentIndex]?.emotion as EmotionType,
        )}
      >
        <Header onClick={() => setIsSideMenuOpen(true)} />
        <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
        <div className="w-[calc(100%-40px)] max-w-2xl">
          <div className="flex items-center justify-between my-4">
            <button onClick={handlePrevClick} disabled={!prevEventId}>
              <PrevTriButtonIcon
                inactive={!prevEventId}
                color={getProgressAndButtonColor(
                  data?.data?.[currentIndex]?.emotion as EmotionType,
                )}
              />
            </button>

            <div className="flex flex-col items-center">
              <span
                className="font-pretendard-300 text-[20px] text-center"
                style={{ color: 'rgba(0,0,0,0.60)' }}
              >
                {data?.data?.[currentIndex]?.title}
              </span>
              <span className="font-pretendard-200 text-[12px] text-[#969A9C] text-center">
                {data?.data?.[currentIndex]?.startDate?.toString()} -{' '}
                {data?.data?.[currentIndex]?.endDate?.toString()}
              </span>
            </div>
            <button onClick={handleNextClick} disabled={!nextEventId}>
              <NextTriButtonIcon
                inactive={!nextEventId}
                color={getProgressAndButtonColor(
                  data?.data?.[currentIndex]?.emotion as EmotionType,
                )}
              />
            </button>
          </div>
          <div>{data?.data?.[currentIndex]?.memo}</div>
        </div>
        {isSuccess && (
          <EventPage
            currentIndex={currentIndex}
            event={data}
            setStep={setCurrentIndex}
          />
        )}
        <div className="absolute bottom-[100px] w-full px-5 flex items-center jusify-center">
          <button
            onClick={() => router.push('/ing/edit')}
            className="w-full relative shadow-[0_2px_20px_rgba(136,136,136,0.12)] rounded-lg bg-white/80 h-[52px] text-[#8ABADD] text-center font-pretendard text-base font-light leading-[120%] tracking-[-0.64px]"
          >
            수정하기
          </button>
        </div>
        <NavBar />
      </div>
    </>
  );
}