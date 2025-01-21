import { useAuth } from '../context/authContext';
import { get_user_by_id } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useTargetUser = (id: string) => {
  const { authenticated } = useAuth();
  const { data: user } = useQuery({
    enabled: authenticated,
    queryKey: ['user', id],
    queryFn: () => get_user_by_id(Number(id)),
  });
  return user;
};
