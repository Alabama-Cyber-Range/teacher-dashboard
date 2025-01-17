import { useAuth } from '../context/authContext';
import { get_lab } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLab = (id: string) => {
  const { authenticated } = useAuth();
  const { data: lab } = useQuery({
    enabled: authenticated,
    queryKey: ['lab'],
    queryFn: () => get_lab(Number(id)),
  });
  return lab;
};
