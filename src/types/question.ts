import { AnswerType } from './answerType';

export interface QuestionContentType {
  questionId: number;
  content: string;
  isAnswer: boolean;
  myAnswer: string;
  isPriority: boolean;
  questionDate: string | Date;
  fileUrl: string;
  type: AnswerType;
}
