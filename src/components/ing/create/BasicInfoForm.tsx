import React, { Dispatch, SetStateAction } from 'react';

interface StepProps {
  setStep: Dispatch<SetStateAction<number>>
}

const BasicInfoForm = ({setStep}: StepProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full px-5">
        <div className="w-full mb-4">
          <label
            className="block text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left mb-5"
            htmlFor="eventInfo"
          >
            이벤트 정보를 입력해주세요.
          </label>
          <input
            className="appearance-none border border-[rgba(136,136,136,0.4)] rounded-lg w-full p-[18px] text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left focus:outline-none"
            id="eventInfo"
            type="text"
            placeholder="이벤트 정보를 입력해주세요."
          />
        </div>
        <div className="w-full mb-7">
          <label
            className="block text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left mb-5"
            htmlFor="eventName"
          >
            이벤트 이름을 입력해주세요.
          </label>
          <input
            className="appearance-none border border-[rgba(136,136,136,0.4)] rounded-lg w-full p-[18px] text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left focus:outline-none"
            id="eventName"
            type="text"
            placeholder="S 디자인 에이전시 최종면접일"
          />
        </div>
        <div className="w-full mb-7">
          <label
            className="block text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left mb-5"
            htmlFor="eventDate"
          >
            이벤트 날짜를 입력해주세요.
          </label>
          <input
            className="appearance-none border border-[rgba(136,136,136,0.4)] rounded-lg w-full p-[18px] text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left focus:outline-none"
            id="eventDate"
            type="text"
            placeholder="YYYY/MM/DD"
          />
        </div>
        <div className="w-full">
          <label
            className="block text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left mb-5"
            htmlFor="additionalInfo"
          >
            추가로 메모하실 내용을 입력해주세요. (선택)
          </label>
          <input
            className="appearance-none border border-[rgba(136,136,136,0.4)] rounded-lg w-full p-[18px] text-lg tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left focus:outline-none"
            id="additionalInfo"
            type="text"
            placeholder="daydreamer,"
          />
        </div>
        <div className="w-full text-md tracking-tighter leading-tight font-extralight font-['Pretendard'] text-black/60 text-left mt-2 pl-2">
          Tip. 자세하게 입력 할수록 좋은 정문이 생성됩니다!
        </div>
      </div>
      <div className="absolute bottom-[100px] w-full px-5 flex items-center jusify-center">
        <button
          onClick={() => setStep(2)}
          className="w-full relative shadow-[0_2px_20px_rgba(136,136,136,0.12)] rounded-lg bg-white/80 h-[52px]"
        >
          다음
        </button>
      </div>
    </>
  );
};

export default BasicInfoForm;
