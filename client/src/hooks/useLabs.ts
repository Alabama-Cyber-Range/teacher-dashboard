import { useAuth } from '../context/authContext';
import { get_labs } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLabs = () => {
  const { authenticated } = useAuth();

  const { data: labs, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['labs'],
    queryFn: get_labs,
  });

  return { labs, isLoading, isError, error };
};
