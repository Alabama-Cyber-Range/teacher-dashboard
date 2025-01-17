import { useAuth } from '../context/authContext';
import { get_user_school } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useUserSchool = () => {
  const { authenticated } = useAuth();

  const { data: school, isLoading, isError, error } = useQuery({
    enabled: authenticated,
    queryKey: ['userSchools'],
    queryFn: () => get_user_school(),
  });

  return { school, isLoading, isError, error };
};
