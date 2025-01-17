import { useAuth } from '../context/authContext';
import { get_user_school } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchool = () => {
  const { authenticated } = useAuth();
  const { data: school } = useQuery({
    enabled: authenticated,
    queryKey: ['school'],
    queryFn: () => get_user_school(),
  });
  return school;
};
