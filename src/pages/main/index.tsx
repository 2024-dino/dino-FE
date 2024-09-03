import NavBar from '@/components/common/NavBar';
import DateChanger from '@/components/DateChanger';
import EventElement from '@/components/eventManage/EventElement';
import TimePicker from '@/components/TimePicker';

interface Props {}

export default function MainPage<Props>({}) {

  const handleTimeChange = () => {
    return;
  };
  return (
    <>
      <div
        className={`flex flex-col text-center w-full h-screen items-center justify-center`}
      >
        <EventElement />
        <DateChanger />
        <TimePicker onChange={handleTimeChange} />
        <NavBar />
      </div>
    </>
  );
}
