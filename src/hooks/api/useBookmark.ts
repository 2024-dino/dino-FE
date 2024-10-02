import { ServerResponse, useRequest } from '@/api/apiHandler';

import { AxiosError } from 'axios';
import { UseMutationResult } from '@tanstack/react-query';

export const useUpdateQuestionPriority = (): UseMutationResult<
  ServerResponse,
  AxiosError,
  { questionId: number }
> => {
  return useRequest<{ questionId: number }>(
    'question/:questionId', // URL 템플릿
    {
      method: 'PUT',
      params: { priority: true }, // URL 쿼리 파라미터
      mutationOptions: {
        mutationKey: ['updateQuestionPriority'],
      },
    },
  );
};
