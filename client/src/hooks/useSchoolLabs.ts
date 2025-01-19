import { useAuth } from '../context/authContext';
import { get_school_labs } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchoolLabs = (id: number) => {
  const { authenticated } = useAuth();

  const { data: labs, isLoading, isError, error } = useQuery({
    enabled: authenticated && !!id, // Only fetch rooms if authenticated and id is valid
    queryKey: ['schoolLabs', id], // Include id in the query key
    queryFn: () => get_school_labs(id),
  });

  return { labs, isLoading, isError, error };
};
