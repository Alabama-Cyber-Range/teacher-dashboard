import { useAuth } from '../context/authContext';
import { get_school_labs } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchoolLabs = () => {
  const { authenticated } = useAuth();

  const { data: labs, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if authenticated and id is valid
    queryKey: ['schoolLabs'], // Include id in the query key
    queryFn: () => get_school_labs(),
  });

  return { labs, isLoading, isError, error };
};
