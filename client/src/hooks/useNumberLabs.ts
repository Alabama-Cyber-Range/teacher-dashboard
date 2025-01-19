import { useAuth } from '../context/authContext';
import { get_number_of_labs } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useNumberLabs = () => {
  const { authenticated } = useAuth();

  const { data: numberLabs, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['numberLabs'],
    queryFn: get_number_of_labs,
  });

  return { numberLabs, isLoading, isError, error };
};
