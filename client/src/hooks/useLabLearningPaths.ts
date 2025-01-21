import { useAuth } from '../context/authContext';
import { get_lab_learning_paths } from '../services/api';
import { useQuery } from '@tanstack/react-query';

export const useLabLearningPaths = (labId: number) => {
  const { authenticated } = useAuth();

  const { data: learningPaths, isLoading, isError, error } = useQuery({
    enabled: authenticated && !!labId, // Only fetch rooms if authenticated and id is valid
    queryKey: ['labLearningPaths', labId], // Include id in the query key
    queryFn: () => get_lab_learning_paths(labId),
  });

  return { learningPaths, isLoading, isError, error };
};
