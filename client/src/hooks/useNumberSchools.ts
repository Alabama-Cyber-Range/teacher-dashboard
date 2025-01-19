import { useAuth } from '../context/authContext';
import { get_number_of_schools } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useNumberSchools = () => {
  const { authenticated } = useAuth();

  const { data: numberSchools, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['numberSchools'],
    queryFn: get_number_of_schools,
  });

  return { numberSchools, isLoading, isError, error };
};
