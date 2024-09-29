import { ServerResponse } from '@/api/apiHandler';
import { api } from '@/api/hwj/index';

// 이벤트
export async function getEvents(): Promise<ServerResponse> {
  const response = await api.get(`/event?event-status=”EXECUTION"`);
  return response.data;
}
