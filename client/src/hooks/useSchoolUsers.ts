import { useAuth } from '../context/authContext';
import { get_school_users } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchoolUsers = (id: number) => {
  const { authenticated } = useAuth();

  const { data: schoolUsers, isLoading, isError, error } = useQuery({
    enabled: authenticated && !!id, // Only fetch rooms if authenticated and id is valid
    queryKey: ['schoolUsers', id], // Include id in the query key
    queryFn: () => get_school_users(id),
  });

  return { schoolUsers, isLoading, isError, error };
};
