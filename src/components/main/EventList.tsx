import React, { ReactElement } from 'react';

interface EventCardProps {
  children: ReactElement
}

interface EventListProps {
  setChosenEvent: (isOpen: boolean) => void;
}

const EventCard = ({children}: EventCardProps) => {
  return (
    <div className="w-full px-[20px] py-[10px]">
      {children}
    </div>
  );
};

const EventList = ({setChosenEvent}: EventListProps) => {
  return (
    <div onClick={() => setChosenEvent(true)}>
      <EventCard>
        <div className='w-full p-[10px] shadow-[0_2px_16px_rgba(68,68,68,0.12)] rounded-[10px]'>
          Q. 하고 싶은 것을 이룬다면,dddd 가장 먼저 알리고 싶은 사람은 누구인가요?
        </div>
      </EventCard>
      <EventCard>
        <div className='w-full p-[10px] shadow-[0_2px_16px_rgba(68,68,68,0.12)] rounded-[10px]'>
          A. 답변 작성하기
        </div>
      </EventCard>
    </div>
  );
};

export default EventList;
