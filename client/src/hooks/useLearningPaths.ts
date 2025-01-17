import { useAuth } from '../context/authContext';
import { get_learning_paths } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLearningPaths = () => {
  const { authenticated } = useAuth();

  const { data: learningPaths, isLoading, isError, error } = useQuery({
    enabled: authenticated, // Only fetch rooms if the user is authenticated
    queryKey: ['learningPaths'],
    queryFn: get_learning_paths,
  });

  return { learningPaths, isLoading, isError, error };
};
