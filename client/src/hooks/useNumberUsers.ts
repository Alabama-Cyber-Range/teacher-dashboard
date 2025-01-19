import { useAuth } from '../context/authContext';
import { get_number_of_users } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useNumberUsers = () => {
  const { authenticated } = useAuth();

  const { data: numberUsers, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['numberUsers'],
    queryFn: get_number_of_users,
  });

  return { numberUsers, isLoading, isError, error };
};
