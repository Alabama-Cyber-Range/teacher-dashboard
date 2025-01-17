import { useAuth } from '../context/authContext';
import { getPathRooms } from '../services/roomApi';
import { useQuery } from '@tanstack/react-query';

export const usePathRooms = (id: number) => {
  const { authenticated } = useAuth();

  const { data: rooms, isLoading, isError, error } = useQuery({
    enabled: authenticated && !!id, // Only fetch rooms if authenticated and id is valid
    queryKey: ['pathRooms', id], // Include id in the query key
    queryFn: () => getPathRooms(id),
  });

  return { rooms, isLoading, isError, error };
};
