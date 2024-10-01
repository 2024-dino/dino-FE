import KakaoLoginButton from '@/components/login/KakaoLoginButton';
import Landing from '@/components/login/Landing';
import { useState } from 'react';

const LoginPage = () => {
  const [isLanding, setIsLanding] = useState(true);

  const handleStart = () => {
    setIsLanding(false);
  };

  return (
    <div className="w-full">
      {isLanding ? <Landing handleStart={handleStart} /> : <KakaoLoginButton />}
    </div>
  );
};

export default LoginPage;
