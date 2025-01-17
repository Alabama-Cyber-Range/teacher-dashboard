import { useAuth } from '../context/authContext';
import { get_user_by_cognito_id } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const { authenticated } = useAuth();
  const { data: user } = useQuery({
    enabled: authenticated,
    queryKey: ['user'],
    queryFn: () => get_user_by_cognito_id(),
  });
  return user;
};
