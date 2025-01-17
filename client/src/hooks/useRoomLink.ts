import { useAuth } from '../context/authContext';
import { postRoomLink } from '../services/roomApi';
import { useQuery } from '@tanstack/react-query';

export const useRoomLink = (id: string, firstName: string, lastName: string, email: string) => {
  const { authenticated } = useAuth();
  const { data: room } = useQuery({
    enabled: authenticated,
    queryKey: ['room'],
    queryFn: () => postRoomLink(id, firstName, lastName, email),
  });
  return room;
};
