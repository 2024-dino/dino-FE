'use client';

import { useState } from 'react';
import { motion, PanInfo, useMotionValue } from 'framer-motion';
const dateArr = [
  {
    weekday: '일',
    day: 14,
    event: true,
  },
  {
    weekday: '월',
    day: 15,
    event: true,
  },
  {
    weekday: '화',
    day: 16,
    event: true,
  },
  {
    weekday: '수',
    day: 17,
    event: true,
  },
  {
    weekday: '목',
    day: 18,
    event: true,
  },
  {
    weekday: '금',
    day: 19,
    event: true,
  },
  {
    weekday: '토',
    day: 20,
    event: true,
  },
  {
    weekday: '일',
    day: 21,
    event: true,
  },
  {
    weekday: '월',
    day: 22,
    event: true,
  },
  {
    weekday: '화',
    day: 23,
    event: true,
  },
  {
    weekday: '수',
    day: 24,
    event: true,
  },
];

const DRAG_BUFFER = 10; // 페이지 이동을 유발하는 드래그 길이

// 애니메이션 설정
const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 600,
  damping: 50,
};

export default function DateChanger() {
  const today = new Date().getDay();
  const [currentDay, setCurrentDay] = useState(today);

  const [dragStartX, setDragStartX] = useState(0);
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState<number>(50);
  const dragX = useMotionValue(0);
  const onDragStart = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    setDragStartX(info.point.x);
  };

  const onDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    //const currentDrag = info.point.x - dragStartX;
    //dragX.set(currentDrag > 0 ? Math.min(currentDrag, 100) : 0);
  };

  // 마우스 드래그를 통한 슬라이드 이동 함수
  const onDragEnd = () => {
    const x = dragX.get();

    x <= -DRAG_BUFFER &&
      page < dateArr.length - 1 &&
      setPage((page) => page + 1);
    x >= 10 && page > 0 && setPage((page) => page - 1);
    
    console.log(page)
  };
  return (
    <div className=" w-[350px] overflow-hidden border border-white">
      <div className="flex w-[550px] bg-black overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            x: dragX,
            width: '550px',
          }}
          animate={{ translateX: `-${page * width}px` }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          dragElastic={0.2}
          className="flex items-center justify-start overflow-hidden mb-5"
        >
          {dateArr.map((day) => (
            <motion.div className="w-[50px]" transition={SPRING_OPTIONS}>
              <div>{day.weekday}</div>
              <div>{day.day}</div>
              <div className="flex items-center justify-center h-7">
                {day.event && (
                  <div className="w-[5px] h-[5px] rounded-full bg-white" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
