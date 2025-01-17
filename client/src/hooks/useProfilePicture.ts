import { useAuth } from '../context/authContext';
import { getProfilePicture } from '../services/userApi';
import { useQuery } from '@tanstack/react-query';

export const useProfilePicture = () => {
  const { authenticated } = useAuth();
  const { data: profilePicture } = useQuery({
    enabled: authenticated,
    queryKey: ['profilePicture'],
    queryFn: getProfilePicture,
    staleTime: 86400000, // 24 hours
    gcTime: 172800000, // 48 hours
    refetchOnWindowFocus: true,
  });
  return profilePicture?.url;
};
