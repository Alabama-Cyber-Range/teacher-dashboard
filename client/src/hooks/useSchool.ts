import { useAuth } from '../context/authContext';
import { get_school } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useSchool = (id: string) => {
  const { authenticated } = useAuth();
  const { data: school } = useQuery({
    enabled: authenticated,
    queryKey: ['school', id],
    queryFn: () => get_school(Number(id)),
  });
  return school;
};
