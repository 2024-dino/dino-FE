import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import StarIcon from '@/assets/icon/starIcon.svg';

const QuestionNumSelectSlider: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: any, data: { x: number; y: number }) => {
    setPosition({ x: data.x, y: 0 });
  };

  const handleDragStop = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const sectionWidth = sliderWidth / 4;
      const nearestSection = Math.round(position.x / sectionWidth);
      const newX = nearestSection * sectionWidth;
      setPosition({ x: newX, y: 0 });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 box-border">
      <div ref={sliderRef} className="relative h-[1px] bg-gray-300 rounded-full">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="absolute top-1/2 w-[1px] h-5 bg-gray-400 -translate-y-1/2"
            style={{ left: `${index * 25}%` }}
          />
        ))}
        <Draggable
          axis="x"
          bounds="parent"
          position={position}
          onDrag={handleDrag}
          onStop={handleDragStop}
        >
          <div className='absolute top-[-11px] left-[-11px] -translate-y-1/2 w-6 h-6 rounded-full cursor-pointer flex items-center justify-center'>
            <StarIcon />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default QuestionNumSelectSlider;
