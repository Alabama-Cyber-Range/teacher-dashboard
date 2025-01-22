import { useTargetUser } from "./useTargetUser";

export const useAssociateUserWithSchool = (userId: string, schoolId: string) => {
    const userResponse = useTargetUser(userId);
    const user = userResponse ? userResponse.data : undefined;
    const { data: school } = useGetSchoolByUser(user?.id);

    const associateUserWithSchool = async () => {
        if (user && school) {
        await API.graphql({
            query: mutations.updateUser,
            variables: {
            input: {
                id: user.id,
                schoolId: school.id,
            },
            },
        });
        }
    };

    return { associateUserWithSchool };
    }
