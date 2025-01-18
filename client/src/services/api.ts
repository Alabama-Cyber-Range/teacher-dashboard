import { generateClient } from 'aws-amplify/api';
import { LabsResponse } from '@admin-dashboard/contracts/Labs';
import { LabResponse } from '@admin-dashboard/contracts/Lab';
import { LearningPathsResponse } from '@admin-dashboard/contracts/LearningPaths';
import { LearningPathResponse } from '@admin-dashboard/contracts/LearningPath';
import { UserResponse } from '@admin-dashboard/contracts/User';
import { SchoolResponse } from '@admin-dashboard/contracts/School';
import { SchoolsResponse } from '@admin-dashboard/contracts/Schools';
import { fetchUserAttributes } from '@aws-amplify/auth';
import {
  listLabs,
  getLabs,
  listLearning_paths,
  getLearning_paths,
  listLearning_path_lab_associations,
  listSchool_lab_associations,
  getUsersByCognitoId,
  listSchool_user_associations,
  getSchools,
  listSchools,
} from '../graphql/queries';

const client = generateClient();

export const get_user_by_cognito_id = async (): Promise<UserResponse> => {
  const attributes = await fetchUserAttributes();
  const cognito_id = attributes.sub!;
  const response = await client.graphql({ query: getUsersByCognitoId, variables: { cognito_id } });
  const user = response.data.getUsersByCognitoId;
  return { user: user ? { ...user, id: user.id.toString() } : null } as UserResponse;
}

export const get_labs = async (): Promise<LabsResponse> => {
  const response = await client.graphql({ query: listLabs });
  return { labs: response.data.listLabs?.items?.map((lab: any) => (
    { ...lab, id: lab.id.toString() })) ?? [] } as LabsResponse;
};

export const get_lab = async (id: number): Promise<LabResponse> => {
  const response = await client.graphql({ query: getLabs, variables: { id } });
  return response.data as LabResponse;
};

export const get_learning_paths = async (): Promise<LearningPathsResponse> => {
    const response = await client.graphql({ query: listLearning_paths });
    return { learningPaths: response.data.listLearning_paths?.items?.map((learningPaths: any) => (
      { ...learningPaths, id: learningPaths.id.toString() })) ?? [] } as LearningPathsResponse;
    };

export const get_schools = async (): Promise<SchoolsResponse> => {
    const response = await client.graphql({ query: listSchools });
    return { schools: response.data.listSchools?.items?.map((school: any) => (
      { ...school, id: school.id.toString() })) ?? [] } as SchoolsResponse;
    };

export const get_learning_path = async (id: number): Promise<LearningPathResponse> => {
    const response = await client.graphql({ query: getLearning_paths, variables: { id } });

    const learningPath = response.data.getLearning_paths;

    if (!learningPath) {
      throw new Error('Learning path not found');
    }

    // transform response data into desired shape
    return {
      learning_path: {
        ...learningPath,
        id: learningPath.id.toString(),
        name: learningPath.name,
        description: learningPath.description,
      },
    };
  }

export const get_path_labs = async (learningPathId: number): Promise<LabsResponse> => {

      // 1) Query associations, filtering by the desired learning path ID
      const associationResp = await client.graphql({
        query: listLearning_path_lab_associations,
        variables: {
          filter: {
            learning_path_id: { eq: learningPathId },
          },
        },
      });

      // Extract items safely
      const associations = associationResp?.data?.listLearning_path_lab_associations?.items ?? [];

      // 2) For each association, fetch the corresponding lab
      const labPromises = associations.map(async (assoc: any) => {
        const labResp = await client.graphql({
          query: getLabs,
          variables: { id: assoc.lab_id },
        });

        // Transform response data into desired shape
        const lab = labResp?.data?.getLabs;
        return {
          ...lab,
          id: lab?.id?.toString() ?? '',
          cloudshare_training_id: lab?.cloudshare_training_id ?? '',
          name: lab?.name ?? '',  // ensure name is a string
          description: lab?.description ?? '',  // ensure description is a string
          created_at: lab?.created_at ?? '',  // ensure created_at is a string
        };
      });

      // 3) Resolve all lab fetches
      const labs = await Promise.all(labPromises);

      // Return them in whatever structure your "LabsResponse" expects
      return { labs };
    };

export const get_school_labs = async (): Promise<LabsResponse> => {

      const userSchool = await get_user_school();
      const schoolId = Number(userSchool.school.id);

      // 1) Query associations, filtering by the desired learning path ID
      const associationResp = await client.graphql({
        query: listSchool_lab_associations,
        variables: {
          filter: {
            school_id: { eq: schoolId },
          },
        },
      });

      // Extract items safely
      const associations = associationResp?.data?.listSchool_lab_associations?.items ?? [];

      // 2) For each association, fetch the corresponding lab
      const labPromises = associations.map(async (assoc: any) => {
        const labResp = await client.graphql({
          query: getLabs,
          variables: { id: assoc.lab_id },
        });

        // Transform the response data into desired shape
        const lab = labResp?.data?.getLabs;
        return {
          ...lab,
          id: lab?.id?.toString() ?? '',
          cloudshare_training_id: lab?.cloudshare_training_id ?? '',
          name: lab?.name ?? '',  // ensure name is a string
          description: lab?.description ?? '',  // ensure description is a string
          created_at: lab?.created_at ?? '',  // ensure created_at is a string
        };
      });

      // 3) Resolve all lab fetches
      const labs = await Promise.all(labPromises);

      // Return them in structure "LabsResponse" expects
      return { labs };
    };

export const get_user_school = async (): Promise<SchoolResponse> => {
  const attributes = await fetchUserAttributes();
  const cognito_id = attributes.sub!;
  const response = await client.graphql({ query: getUsersByCognitoId, variables: { cognito_id } });
  const user = response.data.getUsersByCognitoId;

  if (!user) {
    throw new Error('User not found');
  }

  const associationResp = await client.graphql({
    query: listSchool_user_associations,
    variables: {
      filter: {
        user_id: { eq: user.id },
      },
    },
  });

    // Extract items safely
    const associations = associationResp?.data?.listSchool_user_associations?.items ?? [];

    // 2) For each association, fetch the corresponding lab
    const schoolPromises = associations.map(async (assoc: any) => {
      const schoolResp = await client.graphql({
        query: getSchools,
        variables: { id: assoc.school_id },
      });

      // Transform the response data into desired shape
      const school = schoolResp?.data?.getSchools;
      return {
        ...school,
        id: school?.id?.toString() ?? '',
        name: school?.name ?? '',  // ensure name is a string
        created_at: school?.created_at ?? '',  // ensure created_at is a string
      };
    });

    // 3) Resolve all lab fetches
    const schools = await Promise.all(schoolPromises);

    // Return in structure "SchoolsPromise" expects
    return { school: schools[0] };
};
