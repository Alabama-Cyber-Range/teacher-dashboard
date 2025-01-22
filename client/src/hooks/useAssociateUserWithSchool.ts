import { associate_user_with_school } from '../services/api';
import { useMutation } from '@tanstack/react-query';

export const useAssociateUserWithSchool = (userId: string, schoolId: string) => {
  const { data: school_user_association } = useMutation({
    mutationKey: ['associate_user_with_school', userId, schoolId],
    mutationFn: () => associate_user_with_school(Number(userId), Number(schoolId)),
  });
  return school_user_association;
};
