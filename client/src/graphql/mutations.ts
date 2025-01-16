/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUsers = /* GraphQL */ `mutation CreateUsers($input: CreateUsersInput!) {
  createUsers(input: $input) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUsersMutationVariables,
  APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: TableUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUsersMutationVariables,
  APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: TableUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUsersMutationVariables,
  APITypes.DeleteUsersMutation
>;
export const createSchool_lab_associations = /* GraphQL */ `mutation CreateSchool_lab_associations(
  $input: CreateSchool_lab_associationsInput!
) {
  createSchool_lab_associations(input: $input) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSchool_lab_associationsMutationVariables,
  APITypes.CreateSchool_lab_associationsMutation
>;
export const updateSchool_lab_associations = /* GraphQL */ `mutation UpdateSchool_lab_associations(
  $input: UpdateSchool_lab_associationsInput!
  $condition: TableSchool_lab_associationsConditionInput
) {
  updateSchool_lab_associations(input: $input, condition: $condition) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSchool_lab_associationsMutationVariables,
  APITypes.UpdateSchool_lab_associationsMutation
>;
export const deleteSchool_lab_associations = /* GraphQL */ `mutation DeleteSchool_lab_associations(
  $input: DeleteSchool_lab_associationsInput!
  $condition: TableSchool_lab_associationsConditionInput
) {
  deleteSchool_lab_associations(input: $input, condition: $condition) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSchool_lab_associationsMutationVariables,
  APITypes.DeleteSchool_lab_associationsMutation
>;
export const createLabs = /* GraphQL */ `mutation CreateLabs($input: CreateLabsInput!) {
  createLabs(input: $input) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLabsMutationVariables,
  APITypes.CreateLabsMutation
>;
export const updateLabs = /* GraphQL */ `mutation UpdateLabs(
  $input: UpdateLabsInput!
  $condition: TableLabsConditionInput
) {
  updateLabs(input: $input, condition: $condition) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLabsMutationVariables,
  APITypes.UpdateLabsMutation
>;
export const deleteLabs = /* GraphQL */ `mutation DeleteLabs(
  $input: DeleteLabsInput!
  $condition: TableLabsConditionInput
) {
  deleteLabs(input: $input, condition: $condition) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLabsMutationVariables,
  APITypes.DeleteLabsMutation
>;
export const createLearning_path_lab_associations = /* GraphQL */ `mutation CreateLearning_path_lab_associations(
  $input: CreateLearning_path_lab_associationsInput!
) {
  createLearning_path_lab_associations(input: $input) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLearning_path_lab_associationsMutationVariables,
  APITypes.CreateLearning_path_lab_associationsMutation
>;
export const updateLearning_path_lab_associations = /* GraphQL */ `mutation UpdateLearning_path_lab_associations(
  $input: UpdateLearning_path_lab_associationsInput!
  $condition: TableLearning_path_lab_associationsConditionInput
) {
  updateLearning_path_lab_associations(input: $input, condition: $condition) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLearning_path_lab_associationsMutationVariables,
  APITypes.UpdateLearning_path_lab_associationsMutation
>;
export const deleteLearning_path_lab_associations = /* GraphQL */ `mutation DeleteLearning_path_lab_associations(
  $input: DeleteLearning_path_lab_associationsInput!
  $condition: TableLearning_path_lab_associationsConditionInput
) {
  deleteLearning_path_lab_associations(input: $input, condition: $condition) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLearning_path_lab_associationsMutationVariables,
  APITypes.DeleteLearning_path_lab_associationsMutation
>;
export const createUser_role_associations = /* GraphQL */ `mutation CreateUser_role_associations(
  $input: CreateUser_role_associationsInput!
) {
  createUser_role_associations(input: $input) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUser_role_associationsMutationVariables,
  APITypes.CreateUser_role_associationsMutation
>;
export const updateUser_role_associations = /* GraphQL */ `mutation UpdateUser_role_associations(
  $input: UpdateUser_role_associationsInput!
  $condition: TableUser_role_associationsConditionInput
) {
  updateUser_role_associations(input: $input, condition: $condition) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUser_role_associationsMutationVariables,
  APITypes.UpdateUser_role_associationsMutation
>;
export const deleteUser_role_associations = /* GraphQL */ `mutation DeleteUser_role_associations(
  $input: DeleteUser_role_associationsInput!
  $condition: TableUser_role_associationsConditionInput
) {
  deleteUser_role_associations(input: $input, condition: $condition) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUser_role_associationsMutationVariables,
  APITypes.DeleteUser_role_associationsMutation
>;
export const createSchools = /* GraphQL */ `mutation CreateSchools($input: CreateSchoolsInput!) {
  createSchools(input: $input) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSchoolsMutationVariables,
  APITypes.CreateSchoolsMutation
>;
export const updateSchools = /* GraphQL */ `mutation UpdateSchools(
  $input: UpdateSchoolsInput!
  $condition: TableSchoolsConditionInput
) {
  updateSchools(input: $input, condition: $condition) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSchoolsMutationVariables,
  APITypes.UpdateSchoolsMutation
>;
export const deleteSchools = /* GraphQL */ `mutation DeleteSchools(
  $input: DeleteSchoolsInput!
  $condition: TableSchoolsConditionInput
) {
  deleteSchools(input: $input, condition: $condition) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSchoolsMutationVariables,
  APITypes.DeleteSchoolsMutation
>;
export const createRoles = /* GraphQL */ `mutation CreateRoles($input: CreateRolesInput!) {
  createRoles(input: $input) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRolesMutationVariables,
  APITypes.CreateRolesMutation
>;
export const updateRoles = /* GraphQL */ `mutation UpdateRoles(
  $input: UpdateRolesInput!
  $condition: TableRolesConditionInput
) {
  updateRoles(input: $input, condition: $condition) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRolesMutationVariables,
  APITypes.UpdateRolesMutation
>;
export const deleteRoles = /* GraphQL */ `mutation DeleteRoles(
  $input: DeleteRolesInput!
  $condition: TableRolesConditionInput
) {
  deleteRoles(input: $input, condition: $condition) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRolesMutationVariables,
  APITypes.DeleteRolesMutation
>;
export const createSchool_user_associations = /* GraphQL */ `mutation CreateSchool_user_associations(
  $input: CreateSchool_user_associationsInput!
) {
  createSchool_user_associations(input: $input) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSchool_user_associationsMutationVariables,
  APITypes.CreateSchool_user_associationsMutation
>;
export const updateSchool_user_associations = /* GraphQL */ `mutation UpdateSchool_user_associations(
  $input: UpdateSchool_user_associationsInput!
  $condition: TableSchool_user_associationsConditionInput
) {
  updateSchool_user_associations(input: $input, condition: $condition) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSchool_user_associationsMutationVariables,
  APITypes.UpdateSchool_user_associationsMutation
>;
export const deleteSchool_user_associations = /* GraphQL */ `mutation DeleteSchool_user_associations(
  $input: DeleteSchool_user_associationsInput!
  $condition: TableSchool_user_associationsConditionInput
) {
  deleteSchool_user_associations(input: $input, condition: $condition) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSchool_user_associationsMutationVariables,
  APITypes.DeleteSchool_user_associationsMutation
>;
export const createLearning_paths = /* GraphQL */ `mutation CreateLearning_paths($input: CreateLearning_pathsInput!) {
  createLearning_paths(input: $input) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLearning_pathsMutationVariables,
  APITypes.CreateLearning_pathsMutation
>;
export const updateLearning_paths = /* GraphQL */ `mutation UpdateLearning_paths(
  $input: UpdateLearning_pathsInput!
  $condition: TableLearning_pathsConditionInput
) {
  updateLearning_paths(input: $input, condition: $condition) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLearning_pathsMutationVariables,
  APITypes.UpdateLearning_pathsMutation
>;
export const deleteLearning_paths = /* GraphQL */ `mutation DeleteLearning_paths(
  $input: DeleteLearning_pathsInput!
  $condition: TableLearning_pathsConditionInput
) {
  deleteLearning_paths(input: $input, condition: $condition) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLearning_pathsMutationVariables,
  APITypes.DeleteLearning_pathsMutation
>;
