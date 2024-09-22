import { ServerResponse, useRequest } from '@/api/apiHandler';

import { AxiosError } from 'axios';
import { UseQueryResult } from '@tanstack/react-query';

enum MemberStatus {
  ACTIVE = 'ACTIVE',
}

enum UserRole {
  ROLE_USER = 'ROLE_USER',
}

enum OAuth2Provider {
  KAKAO = 'KAKAO',
}

export interface UserType {
  id: number;
  socialId: string;
  memberStatus: MemberStatus;
  userRole: UserRole;
  nickname: string;
  oauth2Provider: OAuth2Provider;
}

export const useValidateToken = (
  accessCode: string | null,
): UseQueryResult<ServerResponse<UserType>, AxiosError> => {
  return useRequest<UserType>('/auth/validation-jwt', {
    method: 'GET',
    headers: accessCode ? { Authorization: `Bearer ${accessCode}` } : undefined,
    queryOptions: {
      queryKey: ['validateToken', accessCode],
      enabled: !!accessCode,
      retry: false,
    },
  }) as UseQueryResult<ServerResponse<UserType>, AxiosError>;
};