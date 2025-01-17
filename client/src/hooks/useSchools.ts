import { useAuth } from '../context/authContext';
import { get_schools } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchools = () => {
  const { authenticated } = useAuth();

  const { data: schools, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['schools'],
    queryFn: get_schools,
  });

  return { schools, isLoading, isError, error };
};
