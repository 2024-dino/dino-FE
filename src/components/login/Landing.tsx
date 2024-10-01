interface Props {
  handleStart: () => void;
}

const Landing = ({ handleStart }: Props) => {
  const backgroundStyle = {
    background: `
          radial-gradient(56.98% 56.98% at 50% 43.02%, rgba(178, 202, 213, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), 
          linear-gradient(168deg, rgba(251, 243, 231, 0.20) 0%, rgba(185, 206, 215, 0.20) 47.11%, rgba(235, 219, 244, 0.20) 100%)
        `,
  };
  const textStyle = {
    color: 'rgba(138, 186, 221, 0.60)',
  };
  return (
    <div
      className="h-screen max-h-screen flex flex-col justify-between p-4"
      style={backgroundStyle}
    >
      {/* 중앙 컨텐츠 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-[52px] font-edensor mb-4" style={textStyle}>
          Daydream
        </div>
        <img
          src="/path-to-your-flower-image.png"
          alt="Flower"
          className="w-40 h-40 object-contain mb-4"
        />
        <div className="text-[#8ABADD] text-[20px] flex">
          <span className="font-pretendard-500">기다림이 설렘</span>
          <span className="font-pretendard-300">으로 피어날 때</span>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="w-full">
        <button
          onClick={handleStart}
          className="w-full bg-white text-black shadow-md"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Landing;
