import { getEvents } from '@/api/hwj/day/event';
import { useQuery } from '@tanstack/react-query';

export function useGetEvents() {
  return useQuery({ queryKey: ['event'], queryFn: getEvents });
}