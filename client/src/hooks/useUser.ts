import { useAuth } from '../context/authContext';
import { get_user } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const { authenticated } = useAuth();
  const { data: user } = useQuery({
    enabled: authenticated,
    queryKey: ['user'],
    queryFn: () => get_user(),
  });
  return user;
};
