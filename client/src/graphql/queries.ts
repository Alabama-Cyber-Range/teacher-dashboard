/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUsers = /* GraphQL */ `query GetUsers($id: Int!) {
  getUsers(id: $id) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const getUsersByCognitoId = /* GraphQL */ `query GetUsersByCognitoId($cognito_id: String!) {
  getUsersByCognitoId(cognito_id: $cognito_id) {
    first_name
    created_at
    last_name
    id
    email
    cognito_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUsersByCognitoIdQueryVariables,
  APITypes.GetUsersByCognitoIdQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: TableUsersFilterInput
  $limit: Int
  $orderBy: [OrderByUsersInput]
  $nextToken: String
) {
  listUsers(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      first_name
      created_at
      last_name
      id
      email
      cognito_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSchool_lab_associations = /* GraphQL */ `query GetSchool_lab_associations($id: Int!) {
  getSchool_lab_associations(id: $id) {
    school_id
    id
    created_at
    lab_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSchool_lab_associationsQueryVariables,
  APITypes.GetSchool_lab_associationsQuery
>;
export const listSchool_lab_associations = /* GraphQL */ `query ListSchool_lab_associations(
  $filter: TableSchool_lab_associationsFilterInput
  $limit: Int
  $orderBy: [OrderBySchool_lab_associationsInput]
  $nextToken: String
) {
  listSchool_lab_associations(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      school_id
      id
      created_at
      lab_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchool_lab_associationsQueryVariables,
  APITypes.ListSchool_lab_associationsQuery
>;
export const getLabs = /* GraphQL */ `query GetLabs($id: Int!) {
  getLabs(id: $id) {
    cloudshare_training_id
    created_at
    description
    id
    name
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLabsQueryVariables, APITypes.GetLabsQuery>;
export const listLabs = /* GraphQL */ `query ListLabs(
  $filter: TableLabsFilterInput
  $limit: Int
  $orderBy: [OrderByLabsInput]
  $nextToken: String
) {
  listLabs(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      cloudshare_training_id
      created_at
      description
      id
      name
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLabsQueryVariables, APITypes.ListLabsQuery>;
export const getLearning_path_lab_associations = /* GraphQL */ `query GetLearning_path_lab_associations($id: Int!) {
  getLearning_path_lab_associations(id: $id) {
    learning_path_id
    created_at
    id
    lab_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLearning_path_lab_associationsQueryVariables,
  APITypes.GetLearning_path_lab_associationsQuery
>;
export const listLearning_path_lab_associations = /* GraphQL */ `query ListLearning_path_lab_associations(
  $filter: TableLearning_path_lab_associationsFilterInput
  $limit: Int
  $orderBy: [OrderByLearning_path_lab_associationsInput]
  $nextToken: String
) {
  listLearning_path_lab_associations(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      learning_path_id
      created_at
      id
      lab_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearning_path_lab_associationsQueryVariables,
  APITypes.ListLearning_path_lab_associationsQuery
>;
export const getUser_role_associations = /* GraphQL */ `query GetUser_role_associations($id: Int!) {
  getUser_role_associations(id: $id) {
    role_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUser_role_associationsQueryVariables,
  APITypes.GetUser_role_associationsQuery
>;
export const listUser_role_associations = /* GraphQL */ `query ListUser_role_associations(
  $filter: TableUser_role_associationsFilterInput
  $limit: Int
  $orderBy: [OrderByUser_role_associationsInput]
  $nextToken: String
) {
  listUser_role_associations(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      role_id
      id
      created_at
      user_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUser_role_associationsQueryVariables,
  APITypes.ListUser_role_associationsQuery
>;
export const getSchools = /* GraphQL */ `query GetSchools($id: Int!) {
  getSchools(id: $id) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSchoolsQueryVariables,
  APITypes.GetSchoolsQuery
>;
export const listSchools = /* GraphQL */ `query ListSchools(
  $filter: TableSchoolsFilterInput
  $limit: Int
  $orderBy: [OrderBySchoolsInput]
  $nextToken: String
) {
  listSchools(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      name
      id
      created_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchoolsQueryVariables,
  APITypes.ListSchoolsQuery
>;
export const getRoles = /* GraphQL */ `query GetRoles($id: Int!) {
  getRoles(id: $id) {
    name
    id
    created_at
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRolesQueryVariables, APITypes.GetRolesQuery>;
export const listRoles = /* GraphQL */ `query ListRoles(
  $filter: TableRolesFilterInput
  $limit: Int
  $orderBy: [OrderByRolesInput]
  $nextToken: String
) {
  listRoles(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      name
      id
      created_at
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRolesQueryVariables, APITypes.ListRolesQuery>;
export const getSchool_user_associations = /* GraphQL */ `query GetSchool_user_associations($id: Int!) {
  getSchool_user_associations(id: $id) {
    school_id
    id
    created_at
    user_id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSchool_user_associationsQueryVariables,
  APITypes.GetSchool_user_associationsQuery
>;
export const listSchool_user_associations = /* GraphQL */ `query ListSchool_user_associations(
  $filter: TableSchool_user_associationsFilterInput
  $limit: Int
  $orderBy: [OrderBySchool_user_associationsInput]
  $nextToken: String
) {
  listSchool_user_associations(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      school_id
      id
      created_at
      user_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchool_user_associationsQueryVariables,
  APITypes.ListSchool_user_associationsQuery
>;
export const getLearning_paths = /* GraphQL */ `query GetLearning_paths($id: Int!) {
  getLearning_paths(id: $id) {
    name
    created_at
    id
    description
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLearning_pathsQueryVariables,
  APITypes.GetLearning_pathsQuery
>;
export const listLearning_paths = /* GraphQL */ `query ListLearning_paths(
  $filter: TableLearning_pathsFilterInput
  $limit: Int
  $orderBy: [OrderByLearning_pathsInput]
  $nextToken: String
) {
  listLearning_paths(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      name
      created_at
      id
      description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLearning_pathsQueryVariables,
  APITypes.ListLearning_pathsQuery
>;
