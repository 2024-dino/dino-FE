import NavBar from '@/components/common/NavBar';
import FunnelDispenser from '@/components/ing/create/FunnelDispenser';
import Header from '@/components/main/Header';
import React, { useState } from 'react';

const EventCreatePage = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-screen">
        <Header onClick={() => console.log('/')} />
        <FunnelDispenser step={step} setStep={setStep} />
        <NavBar />
      </div>
    </>
  );
};

export default EventCreatePage;
