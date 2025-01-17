import { useAuth } from '../context/authContext';
import { getRooms } from '../services/roomApi';
import { useQuery } from '@tanstack/react-query';

export const useRooms = () => {
  const { authenticated } = useAuth();

  const { data: rooms, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['rooms'],
    queryFn: getRooms,
  });

  return { rooms, isLoading, isError, error };
};
