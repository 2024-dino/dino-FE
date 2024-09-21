import { useQuery } from '@tanstack/react-query';
import { validateToken } from '@/api/auth';

export const useValidateToken = (accessCode: string | null) => {
  return useQuery({
    queryKey: ['validateToken', accessCode],
    queryFn: () => validateToken(accessCode!),
    enabled: !!accessCode,
    retry: false,
  });
};
