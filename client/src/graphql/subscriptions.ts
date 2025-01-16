/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers(
  $first_name: String
  $created_at: String
  $last_name: String
  $id: Int
  $email: String
) {
  onCreateUsers(
    first_name: $first_name
    created_at: $created_at
    last_name: $last_name
    id: $id
    email: $email
  ) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers(
  $first_name: String
  $created_at: String
  $last_name: String
  $id: Int
  $email: String
) {
  onUpdateUsers(
    first_name: $first_name
    created_at: $created_at
    last_name: $last_name
    id: $id
    email: $email
  ) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers(
  $first_name: String
  $created_at: String
  $last_name: String
  $id: Int
  $email: String
) {
  onDeleteUsers(
    first_name: $first_name
    created_at: $created_at
    last_name: $last_name
    id: $id
    email: $email
  ) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
export const onCreateSchool_lab_associations = /* GraphQL */ `subscription OnCreateSchool_lab_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $lab_id: Int
) {
  onCreateSchool_lab_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    lab_id: $lab_id
  ) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSchool_lab_associationsSubscriptionVariables,
  APITypes.OnCreateSchool_lab_associationsSubscription
>;
export const onUpdateSchool_lab_associations = /* GraphQL */ `subscription OnUpdateSchool_lab_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $lab_id: Int
) {
  onUpdateSchool_lab_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    lab_id: $lab_id
  ) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSchool_lab_associationsSubscriptionVariables,
  APITypes.OnUpdateSchool_lab_associationsSubscription
>;
export const onDeleteSchool_lab_associations = /* GraphQL */ `subscription OnDeleteSchool_lab_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $lab_id: Int
) {
  onDeleteSchool_lab_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    lab_id: $lab_id
  ) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSchool_lab_associationsSubscriptionVariables,
  APITypes.OnDeleteSchool_lab_associationsSubscription
>;
export const onCreateLabs = /* GraphQL */ `subscription OnCreateLabs(
  $cloudshare_training_id: String
  $created_at: String
  $description: String
  $id: Int
  $name: String
) {
  onCreateLabs(
    cloudshare_training_id: $cloudshare_training_id
    created_at: $created_at
    description: $description
    id: $id
    name: $name
  ) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLabsSubscriptionVariables,
  APITypes.OnCreateLabsSubscription
>;
export const onUpdateLabs = /* GraphQL */ `subscription OnUpdateLabs(
  $cloudshare_training_id: String
  $created_at: String
  $description: String
  $id: Int
  $name: String
) {
  onUpdateLabs(
    cloudshare_training_id: $cloudshare_training_id
    created_at: $created_at
    description: $description
    id: $id
    name: $name
  ) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLabsSubscriptionVariables,
  APITypes.OnUpdateLabsSubscription
>;
export const onDeleteLabs = /* GraphQL */ `subscription OnDeleteLabs(
  $cloudshare_training_id: String
  $created_at: String
  $description: String
  $id: Int
  $name: String
) {
  onDeleteLabs(
    cloudshare_training_id: $cloudshare_training_id
    created_at: $created_at
    description: $description
    id: $id
    name: $name
  ) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLabsSubscriptionVariables,
  APITypes.OnDeleteLabsSubscription
>;
export const onCreateLearning_path_lab_associations = /* GraphQL */ `subscription OnCreateLearning_path_lab_associations(
  $learning_path_id: Int
  $created_at: String
  $id: Int
  $lab_id: Int
) {
  onCreateLearning_path_lab_associations(
    learning_path_id: $learning_path_id
    created_at: $created_at
    id: $id
    lab_id: $lab_id
  ) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearning_path_lab_associationsSubscriptionVariables,
  APITypes.OnCreateLearning_path_lab_associationsSubscription
>;
export const onUpdateLearning_path_lab_associations = /* GraphQL */ `subscription OnUpdateLearning_path_lab_associations(
  $learning_path_id: Int
  $created_at: String
  $id: Int
  $lab_id: Int
) {
  onUpdateLearning_path_lab_associations(
    learning_path_id: $learning_path_id
    created_at: $created_at
    id: $id
    lab_id: $lab_id
  ) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearning_path_lab_associationsSubscriptionVariables,
  APITypes.OnUpdateLearning_path_lab_associationsSubscription
>;
export const onDeleteLearning_path_lab_associations = /* GraphQL */ `subscription OnDeleteLearning_path_lab_associations(
  $learning_path_id: Int
  $created_at: String
  $id: Int
  $lab_id: Int
) {
  onDeleteLearning_path_lab_associations(
    learning_path_id: $learning_path_id
    created_at: $created_at
    id: $id
    lab_id: $lab_id
  ) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearning_path_lab_associationsSubscriptionVariables,
  APITypes.OnDeleteLearning_path_lab_associationsSubscription
>;
export const onCreateUser_role_associations = /* GraphQL */ `subscription OnCreateUser_role_associations(
  $role_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onCreateUser_role_associations(
    role_id: $role_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUser_role_associationsSubscriptionVariables,
  APITypes.OnCreateUser_role_associationsSubscription
>;
export const onUpdateUser_role_associations = /* GraphQL */ `subscription OnUpdateUser_role_associations(
  $role_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onUpdateUser_role_associations(
    role_id: $role_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUser_role_associationsSubscriptionVariables,
  APITypes.OnUpdateUser_role_associationsSubscription
>;
export const onDeleteUser_role_associations = /* GraphQL */ `subscription OnDeleteUser_role_associations(
  $role_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onDeleteUser_role_associations(
    role_id: $role_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUser_role_associationsSubscriptionVariables,
  APITypes.OnDeleteUser_role_associationsSubscription
>;
export const onCreateSchools = /* GraphQL */ `subscription OnCreateSchools($name: String, $id: Int, $created_at: String) {
  onCreateSchools(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSchoolsSubscriptionVariables,
  APITypes.OnCreateSchoolsSubscription
>;
export const onUpdateSchools = /* GraphQL */ `subscription OnUpdateSchools($name: String, $id: Int, $created_at: String) {
  onUpdateSchools(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSchoolsSubscriptionVariables,
  APITypes.OnUpdateSchoolsSubscription
>;
export const onDeleteSchools = /* GraphQL */ `subscription OnDeleteSchools($name: String, $id: Int, $created_at: String) {
  onDeleteSchools(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSchoolsSubscriptionVariables,
  APITypes.OnDeleteSchoolsSubscription
>;
export const onCreateRoles = /* GraphQL */ `subscription OnCreateRoles($name: String, $id: Int, $created_at: String) {
  onCreateRoles(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRolesSubscriptionVariables,
  APITypes.OnCreateRolesSubscription
>;
export const onUpdateRoles = /* GraphQL */ `subscription OnUpdateRoles($name: String, $id: Int, $created_at: String) {
  onUpdateRoles(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRolesSubscriptionVariables,
  APITypes.OnUpdateRolesSubscription
>;
export const onDeleteRoles = /* GraphQL */ `subscription OnDeleteRoles($name: String, $id: Int, $created_at: String) {
  onDeleteRoles(name: $name, id: $id, created_at: $created_at) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRolesSubscriptionVariables,
  APITypes.OnDeleteRolesSubscription
>;
export const onCreateSchool_user_associations = /* GraphQL */ `subscription OnCreateSchool_user_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onCreateSchool_user_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSchool_user_associationsSubscriptionVariables,
  APITypes.OnCreateSchool_user_associationsSubscription
>;
export const onUpdateSchool_user_associations = /* GraphQL */ `subscription OnUpdateSchool_user_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onUpdateSchool_user_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSchool_user_associationsSubscriptionVariables,
  APITypes.OnUpdateSchool_user_associationsSubscription
>;
export const onDeleteSchool_user_associations = /* GraphQL */ `subscription OnDeleteSchool_user_associations(
  $school_id: Int
  $id: Int
  $created_at: String
  $user_id: Int
) {
  onDeleteSchool_user_associations(
    school_id: $school_id
    id: $id
    created_at: $created_at
    user_id: $user_id
  ) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSchool_user_associationsSubscriptionVariables,
  APITypes.OnDeleteSchool_user_associationsSubscription
>;
export const onCreateLearning_paths = /* GraphQL */ `subscription OnCreateLearning_paths(
  $name: String
  $created_at: String
  $id: Int
  $description: String
) {
  onCreateLearning_paths(
    name: $name
    created_at: $created_at
    id: $id
    description: $description
  ) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLearning_pathsSubscriptionVariables,
  APITypes.OnCreateLearning_pathsSubscription
>;
export const onUpdateLearning_paths = /* GraphQL */ `subscription OnUpdateLearning_paths(
  $name: String
  $created_at: String
  $id: Int
  $description: String
) {
  onUpdateLearning_paths(
    name: $name
    created_at: $created_at
    id: $id
    description: $description
  ) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLearning_pathsSubscriptionVariables,
  APITypes.OnUpdateLearning_pathsSubscription
>;
export const onDeleteLearning_paths = /* GraphQL */ `subscription OnDeleteLearning_paths(
  $name: String
  $created_at: String
  $id: Int
  $description: String
) {
  onDeleteLearning_paths(
    name: $name
    created_at: $created_at
    id: $id
    description: $description
  ) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLearning_pathsSubscriptionVariables,
  APITypes.OnDeleteLearning_pathsSubscription
>;
