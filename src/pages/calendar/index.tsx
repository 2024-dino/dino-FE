import React, { useMemo, useState } from 'react';

import Calendar from 'react-calendar';
import Header from '@/components/main/Header';
import NavBar from '@/components/common/NavBar';
import SlideMenu from '@/components/main/SideMenu';
import moment from 'moment';
import styles from './CustomCalendar.module.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [value, onChange] = React.useState<Value>(new Date());

  const mark: string[] = [
    '2024-09-16',
    '2024-09-16',
    '2024-09-16',
    '2024-09-28',
    '2024-09-28',
    '2024-09-29',
  ];

  const holidays: { [key: string]: string } = {
    '2024-01-01': '신정',
    '2024-02-09': '설날',
    '2024-02-10': '설날',
    '2024-02-11': '설날',
    '2024-03-01': '삼일절',
    '2024-05-05': '어린이날',
    '2024-06-06': '현충일',
    '2024-08-15': '광복절',
    '2024-09-16': '추석',
    '2024-09-17': '추석',
    '2024-09-18': '추석',
    '2024-10-01': '국군의 날 임시 공휴일',
    '2024-10-03': '개천절',
    '2024-10-09': '한글날',
    '2024-12-25': '크리스마스',
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const count = mark.filter((x) => x === formattedDate).length;

    return (
      <div className={styles.tileContentWrapper}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.tileContentMark} />
        ))}
      </div>
    );
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const day = date.getDay();
      const classNames = [];

      if (day === 0 || holidays[formattedDate]) classNames.push(styles.holiday);
      else if (day === 6) classNames.push(styles.saturday);

      return classNames.join(' ');
    }
    return null;
  };

  const navigationLabel = ({ date }: { date: Date }) => {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    return (
      <div>
        <span>
          {months[date.getMonth()]}, {date.getFullYear()}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Header onClick={() => setIsSideMenuOpen(true)} />
      <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
      <div className="flex-grow overflow-auto pt-4 px-4">
        <div className={styles.customCalendar}>
          <Calendar
            onChange={onChange}
            value={value}
            tileContent={tileContent}
            tileClassName={tileClassName}
            formatDay={(locale, date) => date.getDate().toString()}
            formatShortWeekday={(locale, date) =>
              ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
            }
            formatMonth={(locale, date) => (date.getMonth() + 1).toString()}
            className={styles.reactCalendar}
            showNeighboringMonth={false}
            locale="en-US"
            navigationLabel={navigationLabel}
            next2Label={null}
            prev2Label={null}
          />
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default CalendarPage;
