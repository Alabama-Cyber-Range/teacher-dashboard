import { useAuth } from '../context/authContext';
import { get_lab_schools } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLabSchools = (labId: number) => {
  const { authenticated } = useAuth();

  const { data: schools, isLoading, isError, error } = useQuery({
    enabled: authenticated && !!labId, // Only fetch rooms if authenticated and id is valid
    queryKey: ['labSchools', labId], // Include id in the query key
    queryFn: () => get_lab_schools(labId),
  });

  return { schools, isLoading, isError, error };
};
