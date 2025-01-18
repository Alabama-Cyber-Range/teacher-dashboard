import { useAuth } from '../context/authContext';
import { get_users } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
  const { authenticated } = useAuth();

  const { data: users, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['users'],
    queryFn: get_users,
  });

  return { users, isLoading, isError, error };
};
