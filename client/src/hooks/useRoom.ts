import { useAuth } from '../context/authContext';
import { getRoom } from '../services/roomApi';
import { useQuery } from '@tanstack/react-query';

export const useRoom = (id: string) => {
  const { authenticated } = useAuth();
  const { data: room } = useQuery({
    enabled: authenticated,
    queryKey: ['room'],
    queryFn: () => getRoom(id),
  });
  return room;
};
