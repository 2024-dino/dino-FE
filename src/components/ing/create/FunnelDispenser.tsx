import React, { Dispatch, SetStateAction } from 'react';
import BasicInfoForm from './BasicInfoForm';

interface FunnelDispenserProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const FunnelDispenser = ({ step, setStep }: FunnelDispenserProps) => {
  return (
    <>
      {step === 1 && <BasicInfoForm setStep={setStep} />}
      {step === 2 && <></>}
    </>
  );
};

export default FunnelDispenser;
