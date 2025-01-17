import { useAuth } from '../context/authContext';
import { get_learning_path } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLearningPath = (id: string) => {
  const { authenticated } = useAuth();
  const { data: learningPath } = useQuery({
    enabled: authenticated,
    queryKey: ['learningPath', id],
    queryFn: () => get_learning_path(Number(id)),
  });
  return learningPath;
};
