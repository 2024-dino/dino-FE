const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col justify-center items-center max-w-[480px] mx-auto min-h-screen border">
      {props.children}
    </div>
  );
};

export default MainLayout;
