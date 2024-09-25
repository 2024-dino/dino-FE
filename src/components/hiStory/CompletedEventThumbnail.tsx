import { CompleteEventType } from '@/types/hiStory';
import moment from 'moment';

interface Props {
  eventList: CompleteEventType[];
}

const CompletedEventThumbnail = ({ eventList }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[calc(100%-40px)] grid grid-cols-2 gap-6">
        {eventList.map((event) => (
          <div
            key={event.eventId}
            className="bg-white h-[200px] rounded-[12px] px-3.5 flex flex-col"
            style={{
              background:
                'linear-gradient(168deg, rgba(251, 243, 231, 0.20) 0%, rgba(185, 206, 215, 0.20) 47.11%, rgba(235, 219, 244, 0.20) 100%), #FFF',
              boxShadow: '0px 2px 32px 0px rgba(136, 136, 136, 0.12)',
            }}
          >
            <div className="flex flex-col gap-0.5 mt-3.5">
              <span className="font-pretendard-200 text-[12px]">
                {moment(event.startDate.toString()).format('yyyy.MM.DD')}-
                {moment(event.endDate.toString()).format('MM.DD')}
              </span>

              <span className="font-pretendard-300 text-[14px]">
                {event.title}
              </span>
            </div>

            <div className="flex-grow mt-1 bg-slate-200 flex items-center justify-center">
              식물~
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedEventThumbnail;
