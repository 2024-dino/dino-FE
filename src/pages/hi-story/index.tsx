import { CompleteEventType, MonthAllEventsType } from '@/types/hiStory';
import { useEffect, useState } from 'react';

import ChevronRightIcon from '@/assets/icon/ChevronRightIcon.svg';
import CompletedEventThumbnail from '@/components/hiStory/CompletedEventThumbnail';
import Header from '@/components/Day/Header';
import NavBar from '@/components/common/NavBar';
import { QuestionContentType } from '@/types/question';
import SavedQuestionThumbnail from '@/components/hiStory/SavedQuestionThumbnail';
import SlideMenu from '@/components/Day/SideMenu';
import { useRouter } from 'next/router';

const mockAllEventList: MonthAllEventsType[] = [
  {
    groupByDate: '2023-09',
    questionContent: [
      {
        questionId: 101,
        content: '오늘의 기분은 어떤가요?',
        isAnswer: true,
        myAnswer: '매우 좋습니다!',
        isPriority: true,
        questionDate: '2023-09-15',
        answeredAt: '2023-09-15',
        fileUrl: 'https://example.com/image1.jpg',
        type: 'TEXT',
      },
      {
        questionId: 102,
        content: '가장 기억에 남는 순간은?',
        isAnswer: false,
        myAnswer: '',
        isPriority: false,
        questionDate: '2023-09-20',
        answeredAt: '',
        fileUrl: '',
        type: 'TEXT',
      },
    ],
  },
  {
    groupByDate: '2023-08',
    questionContent: [
      {
        questionId: 103,
        content: '오늘의 목표를 말해보세요.',
        isAnswer: true,
        myAnswer: 'voice_answer.mp3',
        isPriority: true,
        questionDate: '2023-08-10',
        answeredAt: '2023-08-10',
        fileUrl: 'https://example.com/voice_answer.mp3',
        type: 'VOICE',
      },
    ],
  },
  {
    groupByDate: '2023-07',
    questionContent: [
      {
        questionId: 104,
        content: '오늘의 순간을 사진으로 남겨주세요.',
        isAnswer: true,
        myAnswer: 'today_photo.jpg',
        isPriority: false,
        questionDate: '2023-07-05',
        answeredAt: '2023-07-05',
        fileUrl: 'https://example.com/today_photo.jpg',
        type: 'IMAGE',
      },
      {
        questionId: 105,
        content: '이번 여름 휴가 계획은 무엇인가요?',
        isAnswer: true,
        myAnswer: '제주도로 가족 여행을 갈 예정입니다.',
        isPriority: true,
        questionDate: '2023-07-10',
        answeredAt: '2023-07-10',
        fileUrl: '',
        type: 'TEXT',
      },
      {
        questionId: 106,
        content: '최근에 시작한 새로운 취미가 있나요?',
        isAnswer: true,
        myAnswer: '요가를 시작했어요. 매일 아침 30분씩 하고 있습니다.',
        isPriority: false,
        questionDate: '2023-07-15',
        answeredAt: '2023-07-15',
        fileUrl: '',
        type: 'TEXT',
      },
      {
        questionId: 107,
        content: '가장 좋아하는 여름 음식은 무엇인가요?',
        isAnswer: true,
        myAnswer: '시원한 물냉면이요. 특히 더운 날 먹으면 정말 좋아요.',
        isPriority: false,
        questionDate: '2023-07-20',
        answeredAt: '2023-07-20',
        fileUrl: '',
        type: 'TEXT',
      },
      {
        questionId: 108,
        content: '이번 여름에 자주 듣는 노래는?',
        isAnswer: true,
        myAnswer: 'summer.mp3',
        isPriority: false,
        questionDate: '2023-07-25',
        answeredAt: '2023-07-25',
        fileUrl: 'https://example.com/summer.mp3',
        type: 'VOICE',
      },
    ],
  },
  {
    groupByDate: '2023-06',
    questionContent: [
      {
        questionId: 109,
        content: '이번 달의 개인적인 목표는 무엇인가요?',
        isAnswer: true,
        myAnswer: '매일 30분 이상 책 읽기',
        isPriority: true,
        questionDate: '2023-06-01',
        answeredAt: '2023-06-01',
        fileUrl: '',
        type: 'TEXT',
      },
      {
        questionId: 110,
        content: '요즘 자주 가는 좋아하는 장소가 있나요?',
        isAnswer: true,
        myAnswer: 'favorite_place.jpg',
        isPriority: false,
        questionDate: '2023-06-10',
        answeredAt: '2023-06-10',
        fileUrl: 'https://example.com/favorite_place.jpg',
        type: 'IMAGE',
      },
      {
        questionId: 111,
        content: '최근에 시도해 본 새로운 것이 있다면?',
        isAnswer: true,
        myAnswer:
          '베이킹을 처음 해봤어요. 쿠키를 만들었는데 생각보다 맛있었습니다!',
        isPriority: false,
        questionDate: '2023-06-15',
        answeredAt: '2023-06-15',
        fileUrl: '',
        type: 'TEXT',
      },
      {
        questionId: 112,
        content: '오늘 하루 동안 감사했던 순간은?',
        isAnswer: true,
        myAnswer: '동료가 어려운 업무를 도와줘서 정말 고마웠어요.',
        isPriority: true,
        questionDate: '2023-06-20',
        answeredAt: '2023-06-20',
        fileUrl: '',
        type: 'TEXT',
      },
    ],
  },
];

const mockCompletedEventList: CompleteEventType[] = [
  {
    eventId: 1,
    title: '완료된 첫 번째 이벤트',
    category: '일상',
    eventStatus: 'termination',
    startDate: '2023-09-01',
    endDate: '2023-09-01',
    fileUrl: 'https://example.com/event1.jpg',
    emotion: 'JOY',
    totalQuestionCount: 5,
    totalAnswerCount: 5,
    representativeQuestion: {
      questionId: 201,
      content: '이벤트를 통해 무엇을 배웠나요?',
      isPriority: false,
      isAnswer: true,
      myAnswer: '새로운 경험의 중요성을 깨달았습니다.',
      questionDate: '2023-09-01',
      answeredAt: '2023-09-01',
      fileUrl: '',
      type: 'TEXT',
    },
  },
  {
    eventId: 2,
    title: '완료된 두 번째 이벤트',
    category: '여행',
    eventStatus: 'termination',
    startDate: '2023-09-02',
    endDate: '2023-09-03',
    fileUrl: 'https://example.com/event2.jpg',
    emotion: 'HAPPINESS',
    totalQuestionCount: 7,
    totalAnswerCount: 6,
    representativeQuestion: {
      questionId: 202,
      content: '가장 인상 깊었던 순간은?',
      isPriority: true,
      isAnswer: true,
      myAnswer: '석양을 바라보며 느낀 평화로움이었습니다.',
      questionDate: '2023-09-03',
      answeredAt: '2023-09-03',
      fileUrl: 'https://example.com/sunset.jpg',
      type: 'IMAGE',
    },
  },
  {
    eventId: 3,
    title: '완료된 세 번째 이벤트',
    category: '학습',
    eventStatus: 'termination',
    startDate: '2023-09-04',
    endDate: '2023-09-04',
    fileUrl: 'https://example.com/event3.jpg',
    emotion: 'SATISFACTION',
    totalQuestionCount: 4,
    totalAnswerCount: 4,
    representativeQuestion: {
      questionId: 203,
      content: '새롭게 알게 된 사실이 있나요?',
      isPriority: false,
      isAnswer: true,
      myAnswer: '내가 어케 알아~',
      questionDate: '2023-09-04',
      answeredAt: '2023-09-04',
      fileUrl: '',
      type: 'TEXT',
    },
  },
  {
    eventId: 4,
    title: '예술적인소프트웨어 대회',
    category: '취미',
    eventStatus: 'termination',
    startDate: '2023-10-01',
    endDate: '2023-10-31',
    fileUrl: 'https://example.com/event4.jpg',
    emotion: 'EXPECTATION',
    totalQuestionCount: 10,
    totalAnswerCount: 8,
    representativeQuestion: {
      questionId: 204,
      content: '이번 달 가장 인상 깊었던 책은?',
      isPriority: false,
      isAnswer: true,
      myAnswer: '『사피엔스』, 인류 역사에 대한 새로운 시각을 얻었습니다.',
      questionDate: '2023-10-31',
      answeredAt: '2023-10-31',
      fileUrl: '',
      type: 'TEXT',
    },
  },
  {
    eventId: 5,
    title: '30일 건강 챌린지',
    category: '건강',
    eventStatus: 'termination',
    startDate: '2023-11-01',
    endDate: '2023-11-30',
    fileUrl: 'https://example.com/event5.jpg',
    emotion: 'HOPE',
    totalQuestionCount: 30,
    totalAnswerCount: 28,
    representativeQuestion: {
      questionId: 205,
      content: '한 달간의 변화 중 가장 큰 것은?',
      isPriority: false,
      isAnswer: true,
      myAnswer:
        '아침 기상 시간이 규칙적으로 변했고, 전반적인 컨디션이 좋아졌습니다.',
      questionDate: '2023-11-30',
      answeredAt: '2023-11-30',
      fileUrl: 'https://example.com/health-chart.jpg',
      type: 'IMAGE',
    },
  },
  {
    eventId: 6,
    title: '연말 자선 봉사활동',
    category: '사회',
    eventStatus: 'termination',
    startDate: '2023-12-20',
    endDate: '2023-12-24',
    fileUrl: 'https://example.com/event6.jpg',
    emotion: 'LOVE',
    totalQuestionCount: 6,
    totalAnswerCount: 6,
    representativeQuestion: {
      questionId: 206,
      content: '봉사활동을 통해 느낀 점은?',
      isPriority: false,
      isAnswer: true,
      myAnswer:
        '작은 도움이 모여 큰 변화를 만들 수 있다는 것을 직접 경험했습니다.',
      questionDate: '2023-12-24',
      answeredAt: '2023-12-24',
      fileUrl: 'https://example.com/volunteer-audio.mp3',
      type: 'VOICE',
    },
  },
];

const HiStoryPage = () => {
  const router = useRouter();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [allEventList, setAllEventList] = useState<MonthAllEventsType[]>([]);
  const [completedEventList, setCompletedEventList] = useState<
    CompleteEventType[]
  >([]);
  const [questionThumbnailList, setQuestionThumbnailList] = useState<
    QuestionContentType[]
  >([]);

  const handleRoute = (type: string) => {
    router.push(`/hi-story/${type}`);
  };

  const pageLoad = async () => {
    setAllEventList(mockAllEventList);
    setCompletedEventList(mockCompletedEventList);
  };

  useEffect(() => {
    setQuestionThumbnailList(
      allEventList.flatMap((event) => event.questionContent),
    );
  }, [allEventList]);

  useEffect(() => {
    // allEventList, completedEventList를 설정할 수 있는 API 호출
    pageLoad();
  }, []);

  return (
    <div
      className="flex flex-col w-full h-screen"
      style={{
        background:
          'linear-gradient(168deg, rgba(251, 243, 231, 0.20) 0%, rgba(185, 206, 215, 0.20) 47.11%, rgba(235, 219, 244, 0.20) 100%), #FFF',
        boxShadow: '0px 2px 32px 0px rgba(136, 136, 136, 0.12)',
      }}
    >
      <Header onClick={() => setIsSideMenuOpen(true)} />
      <SlideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />

      <div className="flex-1 overflow-y-auto pb-[68px] mb-8">
        <div className="flex flex-col gap-8 mt-8">
          <div>
            <div className="flex items-center justify-center w-full">
              <div className="w-[calc(100%-40px)] flex justify-between mb-3">
                <span className="font-pretendard-500 text-[#8ABADD] text-[20px]">
                  Moments
                </span>

                <div onClick={() => handleRoute('saved-questions')}>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
            <SavedQuestionThumbnail
              questionList={questionThumbnailList.slice(0, 3)}
            />
          </div>

          <div>
            <div className="flex items-center justify-center w-full">
              <div className="w-[calc(100%-40px)] flex justify-between mb-3">
                <span className="font-pretendard-500 text-[#8ABADD] text-[20px]">
                  Growths
                </span>
                <div onClick={() => handleRoute('completed-events')}>
                  <ChevronRightIcon />
                </div>
              </div>
            </div>
            <CompletedEventThumbnail
              eventList={completedEventList.slice(0, 4)}
            />
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default HiStoryPage;
