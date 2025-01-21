import { useAuth } from '../context/authContext';
import { get_user_school_by_id } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useTargetUserSchool = (userId: string) => {
  const { authenticated } = useAuth();
  const { data: user } = useQuery({
    enabled: authenticated,
    queryKey: ['school', userId],
    queryFn: () => get_user_school_by_id(Number(userId)),
  });
  return user;
};
