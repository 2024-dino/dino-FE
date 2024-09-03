import React, { useState } from 'react';

interface QuestionModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const QuestionModal = ({ isOpen, setIsOpen }: QuestionModalProps) => {
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="relative h-screen ">
      <div
        onClick={toggleModal}
        className={`fixed inset-0 bg-black transition-opacity duration-1000 ease-in-out flex flex-col ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`transform transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 ${
            isOpen
              ? '-translate-y-1/2 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white p-6 max-w-[390px] rounded-[10px] shadow-lg mb-4">
            <h2 className="text-lg font-bold">Q.</h2>
            <p>
              ( )하고 싶은 것을 이룬다면, 가장 먼저 알리고 싶은 사람은
              누구인가요?
            </p>
          </div>
          <div className='bg-white p-6 max-w-[390px] rounded-[10px] shadow-lg'>
            <h2 className="text-lg font-bold">A.</h2>
            <input
              type="text"
              className="border rounded p-2 w-full"
              placeholder="답변을 입력하세요"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
