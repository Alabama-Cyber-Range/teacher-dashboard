/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  first_name: string,
  created_at: string,
  last_name: string,
  id?: number | null,
  email: string,
};

export type Users = {
  __typename: "Users",
  first_name: string,
  created_at: string,
  last_name: string,
  id: number,
  email: string,
  cognito_id: string,
};

export type UpdateUsersInput = {
  first_name?: string | null,
  created_at?: string | null,
  last_name?: string | null,
  id: number,
  email?: string | null,
};

export type TableUsersConditionInput = {
  first_name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  last_name?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  and?: Array< TableUsersConditionInput | null > | null,
  or?: Array< TableUsersConditionInput | null > | null,
  not?: Array< TableUsersConditionInput | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DeleteUsersInput = {
  id: number,
};

export type CreateSchool_lab_associationsInput = {
  school_id?: number | null,
  id?: number | null,
  created_at: string,
  lab_id?: number | null,
};

export type School_lab_associations = {
  __typename: "School_lab_associations",
  school_id?: number | null,
  id: number,
  created_at: string,
  lab_id?: number | null,
};

export type UpdateSchool_lab_associationsInput = {
  school_id?: number | null,
  id: number,
  created_at?: string | null,
  lab_id?: number | null,
};

export type TableSchool_lab_associationsConditionInput = {
  school_id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  lab_id?: TableIntFilterInput | null,
  and?: Array< TableSchool_lab_associationsConditionInput | null > | null,
  or?: Array< TableSchool_lab_associationsConditionInput | null > | null,
  not?: Array< TableSchool_lab_associationsConditionInput | null > | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type DeleteSchool_lab_associationsInput = {
  id: number,
};

export type CreateLabsInput = {
  cloudshare_training_id: string,
  created_at: string,
  description: string,
  id?: number | null,
  name: string,
};

export type Labs = {
  __typename: "Labs",
  cloudshare_training_id: string,
  created_at: string,
  description: string,
  id: number,
  name: string,
};

export type UpdateLabsInput = {
  cloudshare_training_id?: string | null,
  created_at?: string | null,
  description?: string | null,
  id: number,
  name?: string | null,
};

export type TableLabsConditionInput = {
  cloudshare_training_id?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  and?: Array< TableLabsConditionInput | null > | null,
  or?: Array< TableLabsConditionInput | null > | null,
  not?: Array< TableLabsConditionInput | null > | null,
};

export type DeleteLabsInput = {
  id: number,
};

export type CreateLearning_path_lab_associationsInput = {
  learning_path_id?: number | null,
  created_at: string,
  id?: number | null,
  lab_id?: number | null,
};

export type Learning_path_lab_associations = {
  __typename: "Learning_path_lab_associations",
  learning_path_id?: number | null,
  created_at: string,
  id: number,
  lab_id?: number | null,
};

export type UpdateLearning_path_lab_associationsInput = {
  learning_path_id?: number | null,
  created_at?: string | null,
  id: number,
  lab_id?: number | null,
};

export type TableLearning_path_lab_associationsConditionInput = {
  learning_path_id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  lab_id?: TableIntFilterInput | null,
  and?: Array< TableLearning_path_lab_associationsConditionInput | null > | null,
  or?: Array< TableLearning_path_lab_associationsConditionInput | null > | null,
  not?: Array< TableLearning_path_lab_associationsConditionInput | null > | null,
};

export type DeleteLearning_path_lab_associationsInput = {
  id: number,
};

export type CreateUser_role_associationsInput = {
  role_id?: number | null,
  id?: number | null,
  created_at: string,
  user_id?: number | null,
};

export type User_role_associations = {
  __typename: "User_role_associations",
  role_id?: number | null,
  id: number,
  created_at: string,
  user_id?: number | null,
};

export type UpdateUser_role_associationsInput = {
  role_id?: number | null,
  id: number,
  created_at?: string | null,
  user_id?: number | null,
};

export type TableUser_role_associationsConditionInput = {
  role_id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  user_id?: TableIntFilterInput | null,
  and?: Array< TableUser_role_associationsConditionInput | null > | null,
  or?: Array< TableUser_role_associationsConditionInput | null > | null,
  not?: Array< TableUser_role_associationsConditionInput | null > | null,
};

export type DeleteUser_role_associationsInput = {
  id: number,
};

export type CreateSchoolsInput = {
  name: string,
  id?: number | null,
  created_at: string,
};

export type Schools = {
  __typename: "Schools",
  name: string,
  id: number,
  created_at: string,
};

export type UpdateSchoolsInput = {
  name?: string | null,
  id: number,
  created_at?: string | null,
};

export type TableSchoolsConditionInput = {
  name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  and?: Array< TableSchoolsConditionInput | null > | null,
  or?: Array< TableSchoolsConditionInput | null > | null,
  not?: Array< TableSchoolsConditionInput | null > | null,
};

export type DeleteSchoolsInput = {
  id: number,
};

export type CreateRolesInput = {
  name: string,
  id?: number | null,
  created_at: string,
};

export type Roles = {
  __typename: "Roles",
  name: string,
  id: number,
  created_at: string,
};

export type UpdateRolesInput = {
  name?: string | null,
  id: number,
  created_at?: string | null,
};

export type TableRolesConditionInput = {
  name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  and?: Array< TableRolesConditionInput | null > | null,
  or?: Array< TableRolesConditionInput | null > | null,
  not?: Array< TableRolesConditionInput | null > | null,
};

export type DeleteRolesInput = {
  id: number,
};

export type CreateSchool_user_associationsInput = {
  school_id?: number | null,
  // id?: number | null,
  // created_at: string,
  user_id?: number | null,
};

export type School_user_associations = {
  __typename: "School_user_associations",
  school_id?: number | null,
  id: number,
  created_at: string,
  user_id?: number | null,
};

export type UpdateSchool_user_associationsInput = {
  school_id?: number | null,
  id: number,
  created_at?: string | null,
  user_id?: number | null,
};

export type TableSchool_user_associationsConditionInput = {
  school_id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  user_id?: TableIntFilterInput | null,
  and?: Array< TableSchool_user_associationsConditionInput | null > | null,
  or?: Array< TableSchool_user_associationsConditionInput | null > | null,
  not?: Array< TableSchool_user_associationsConditionInput | null > | null,
};

export type DeleteSchool_user_associationsInput = {
  id: number,
};

export type CreateLearning_pathsInput = {
  name: string,
  created_at: string,
  id?: number | null,
  description: string,
};

export type Learning_paths = {
  __typename: "Learning_paths",
  name: string,
  created_at: string,
  id: number,
  description: string,
};

export type UpdateLearning_pathsInput = {
  name?: string | null,
  created_at?: string | null,
  id: number,
  description?: string | null,
};

export type TableLearning_pathsConditionInput = {
  name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  and?: Array< TableLearning_pathsConditionInput | null > | null,
  or?: Array< TableLearning_pathsConditionInput | null > | null,
  not?: Array< TableLearning_pathsConditionInput | null > | null,
};

export type DeleteLearning_pathsInput = {
  id: number,
};

export type TableUsersFilterInput = {
  first_name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  last_name?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  email?: TableStringFilterInput | null,
  and?: Array< TableUsersFilterInput | null > | null,
  or?: Array< TableUsersFilterInput | null > | null,
  not?: Array< TableUsersFilterInput | null > | null,
};

export type OrderByUsersInput = {
  first_name?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  last_name?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  email?: ModelSortDirection | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type UsersConnection = {
  __typename: "UsersConnection",
  items?:  Array<Users | null > | null,
  nextToken?: string | null,
};

export type TableSchool_lab_associationsFilterInput = {
  school_id?: TableIntFilterInput | null,
  id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  lab_id?: TableIntFilterInput | null,
  and?: Array< TableSchool_lab_associationsFilterInput | null > | null,
  or?: Array< TableSchool_lab_associationsFilterInput | null > | null,
  not?: Array< TableSchool_lab_associationsFilterInput | null > | null,
};

export type OrderBySchool_lab_associationsInput = {
  school_id?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  lab_id?: ModelSortDirection | null,
};

export type School_lab_associationsConnection = {
  __typename: "School_lab_associationsConnection",
  items?:  Array<School_lab_associations | null > | null,
  nextToken?: string | null,
};

export type TableLabsFilterInput = {
  cloudshare_training_id?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  name?: TableStringFilterInput | null,
  and?: Array< TableLabsFilterInput | null > | null,
  or?: Array< TableLabsFilterInput | null > | null,
  not?: Array< TableLabsFilterInput | null > | null,
};

export type OrderByLabsInput = {
  cloudshare_training_id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  description?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  name?: ModelSortDirection | null,
};

export type LabsConnection = {
  __typename: "LabsConnection",
  items?:  Array<Labs | null > | null,
  nextToken?: string | null,
};

export type TableLearning_path_lab_associationsFilterInput = {
  learning_path_id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  lab_id?: TableIntFilterInput | null,
  and?: Array< TableLearning_path_lab_associationsFilterInput | null > | null,
  or?: Array< TableLearning_path_lab_associationsFilterInput | null > | null,
  not?: Array< TableLearning_path_lab_associationsFilterInput | null > | null,
};

export type OrderByLearning_path_lab_associationsInput = {
  learning_path_id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  lab_id?: ModelSortDirection | null,
};

export type Learning_path_lab_associationsConnection = {
  __typename: "Learning_path_lab_associationsConnection",
  items?:  Array<Learning_path_lab_associations | null > | null,
  nextToken?: string | null,
};

export type TableUser_role_associationsFilterInput = {
  role_id?: TableIntFilterInput | null,
  id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  user_id?: TableIntFilterInput | null,
  and?: Array< TableUser_role_associationsFilterInput | null > | null,
  or?: Array< TableUser_role_associationsFilterInput | null > | null,
  not?: Array< TableUser_role_associationsFilterInput | null > | null,
};

export type OrderByUser_role_associationsInput = {
  role_id?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  user_id?: ModelSortDirection | null,
};

export type User_role_associationsConnection = {
  __typename: "User_role_associationsConnection",
  items?:  Array<User_role_associations | null > | null,
  nextToken?: string | null,
};

export type TableSchoolsFilterInput = {
  name?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  and?: Array< TableSchoolsFilterInput | null > | null,
  or?: Array< TableSchoolsFilterInput | null > | null,
  not?: Array< TableSchoolsFilterInput | null > | null,
};

export type OrderBySchoolsInput = {
  name?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
};

export type SchoolsConnection = {
  __typename: "SchoolsConnection",
  items?:  Array<Schools | null > | null,
  nextToken?: string | null,
};

export type TableRolesFilterInput = {
  name?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  and?: Array< TableRolesFilterInput | null > | null,
  or?: Array< TableRolesFilterInput | null > | null,
  not?: Array< TableRolesFilterInput | null > | null,
};

export type OrderByRolesInput = {
  name?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
};

export type RolesConnection = {
  __typename: "RolesConnection",
  items?:  Array<Roles | null > | null,
  nextToken?: string | null,
};

export type TableSchool_user_associationsFilterInput = {
  school_id?: TableIntFilterInput | null,
  id?: TableIntFilterInput | null,
  created_at?: TableStringFilterInput | null,
  user_id?: TableIntFilterInput | null,
  and?: Array< TableSchool_user_associationsFilterInput | null > | null,
  or?: Array< TableSchool_user_associationsFilterInput | null > | null,
  not?: Array< TableSchool_user_associationsFilterInput | null > | null,
};

export type OrderBySchool_user_associationsInput = {
  school_id?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  user_id?: ModelSortDirection | null,
};

export type School_user_associationsConnection = {
  __typename: "School_user_associationsConnection",
  items?:  Array<School_user_associations | null > | null,
  nextToken?: string | null,
};

export type TableLearning_pathsFilterInput = {
  name?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  description?: TableStringFilterInput | null,
  and?: Array< TableLearning_pathsFilterInput | null > | null,
  or?: Array< TableLearning_pathsFilterInput | null > | null,
  not?: Array< TableLearning_pathsFilterInput | null > | null,
};

export type OrderByLearning_pathsInput = {
  name?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
  description?: ModelSortDirection | null,
};

export type Learning_pathsConnection = {
  __typename: "Learning_pathsConnection",
  items?:  Array<Learning_paths | null > | null,
  nextToken?: string | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: TableUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: TableUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type CreateSchool_lab_associationsMutationVariables = {
  input: CreateSchool_lab_associationsInput,
};

export type CreateSchool_lab_associationsMutation = {
  createSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type UpdateSchool_lab_associationsMutationVariables = {
  input: UpdateSchool_lab_associationsInput,
  condition?: TableSchool_lab_associationsConditionInput | null,
};

export type UpdateSchool_lab_associationsMutation = {
  updateSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type DeleteSchool_lab_associationsMutationVariables = {
  input: DeleteSchool_lab_associationsInput,
  condition?: TableSchool_lab_associationsConditionInput | null,
};

export type DeleteSchool_lab_associationsMutation = {
  deleteSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type CreateLabsMutationVariables = {
  input: CreateLabsInput,
};

export type CreateLabsMutation = {
  createLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type UpdateLabsMutationVariables = {
  input: UpdateLabsInput,
  condition?: TableLabsConditionInput | null,
};

export type UpdateLabsMutation = {
  updateLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type DeleteLabsMutationVariables = {
  input: DeleteLabsInput,
  condition?: TableLabsConditionInput | null,
};

export type DeleteLabsMutation = {
  deleteLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type CreateLearning_path_lab_associationsMutationVariables = {
  input: CreateLearning_path_lab_associationsInput,
};

export type CreateLearning_path_lab_associationsMutation = {
  createLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type UpdateLearning_path_lab_associationsMutationVariables = {
  input: UpdateLearning_path_lab_associationsInput,
  condition?: TableLearning_path_lab_associationsConditionInput | null,
};

export type UpdateLearning_path_lab_associationsMutation = {
  updateLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type DeleteLearning_path_lab_associationsMutationVariables = {
  input: DeleteLearning_path_lab_associationsInput,
  condition?: TableLearning_path_lab_associationsConditionInput | null,
};

export type DeleteLearning_path_lab_associationsMutation = {
  deleteLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type CreateUser_role_associationsMutationVariables = {
  input: CreateUser_role_associationsInput,
};

export type CreateUser_role_associationsMutation = {
  createUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type UpdateUser_role_associationsMutationVariables = {
  input: UpdateUser_role_associationsInput,
  condition?: TableUser_role_associationsConditionInput | null,
};

export type UpdateUser_role_associationsMutation = {
  updateUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type DeleteUser_role_associationsMutationVariables = {
  input: DeleteUser_role_associationsInput,
  condition?: TableUser_role_associationsConditionInput | null,
};

export type DeleteUser_role_associationsMutation = {
  deleteUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type CreateSchoolsMutationVariables = {
  input: CreateSchoolsInput,
};

export type CreateSchoolsMutation = {
  createSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type UpdateSchoolsMutationVariables = {
  input: UpdateSchoolsInput,
  condition?: TableSchoolsConditionInput | null,
};

export type UpdateSchoolsMutation = {
  updateSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type DeleteSchoolsMutationVariables = {
  input: DeleteSchoolsInput,
  condition?: TableSchoolsConditionInput | null,
};

export type DeleteSchoolsMutation = {
  deleteSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type CreateRolesMutationVariables = {
  input: CreateRolesInput,
};

export type CreateRolesMutation = {
  createRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type UpdateRolesMutationVariables = {
  input: UpdateRolesInput,
  condition?: TableRolesConditionInput | null,
};

export type UpdateRolesMutation = {
  updateRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type DeleteRolesMutationVariables = {
  input: DeleteRolesInput,
  condition?: TableRolesConditionInput | null,
};

export type DeleteRolesMutation = {
  deleteRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type CreateSchool_user_associationsMutationVariables = {
  input: CreateSchool_user_associationsInput,
};

export type CreateSchool_user_associationsMutation = {
  createSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type UpdateSchool_user_associationsMutationVariables = {
  input: UpdateSchool_user_associationsInput,
  condition?: TableSchool_user_associationsConditionInput | null,
};

export type UpdateSchool_user_associationsMutation = {
  updateSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type DeleteSchool_user_associationsMutationVariables = {
  input: DeleteSchool_user_associationsInput,
  condition?: TableSchool_user_associationsConditionInput | null,
};

export type DeleteSchool_user_associationsMutation = {
  deleteSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type CreateLearning_pathsMutationVariables = {
  input: CreateLearning_pathsInput,
};

export type CreateLearning_pathsMutation = {
  createLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type UpdateLearning_pathsMutationVariables = {
  input: UpdateLearning_pathsInput,
  condition?: TableLearning_pathsConditionInput | null,
};

export type UpdateLearning_pathsMutation = {
  updateLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type DeleteLearning_pathsMutationVariables = {
  input: DeleteLearning_pathsInput,
  condition?: TableLearning_pathsConditionInput | null,
};

export type DeleteLearning_pathsMutation = {
  deleteLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type GetUsersQueryVariables = {
  id: number,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type GetUsersByCognitoIdQueryVariables = {
  cognito_id: string,
};

export type GetUsersByCognitoIdQuery = {
  getUsersByCognitoId?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUsersFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByUsersInput | null > | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "UsersConnection",
    items?:  Array< {
      __typename: "Users",
      first_name: string,
      created_at: string,
      last_name: string,
      id: number,
      email: string,
      cognito_id: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSchool_lab_associationsQueryVariables = {
  id: number,
};

export type GetSchool_lab_associationsQuery = {
  getSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type ListSchool_lab_associationsQueryVariables = {
  filter?: TableSchool_lab_associationsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderBySchool_lab_associationsInput | null > | null,
  nextToken?: string | null,
};

export type ListSchool_lab_associationsQuery = {
  listSchool_lab_associations?:  {
    __typename: "School_lab_associationsConnection",
    items?:  Array< {
      __typename: "School_lab_associations",
      school_id?: number | null,
      id: number,
      created_at: string,
      lab_id?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLabsQueryVariables = {
  id: number,
};

export type GetLabsQuery = {
  getLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type ListLabsQueryVariables = {
  filter?: TableLabsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByLabsInput | null > | null,
  nextToken?: string | null,
};

export type ListLabsQuery = {
  listLabs?:  {
    __typename: "LabsConnection",
    items?:  Array< {
      __typename: "Labs",
      cloudshare_training_id: string,
      created_at: string,
      description: string,
      id: number,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLearning_path_lab_associationsQueryVariables = {
  id: number,
};

export type GetLearning_path_lab_associationsQuery = {
  getLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type ListLearning_path_lab_associationsQueryVariables = {
  filter?: TableLearning_path_lab_associationsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByLearning_path_lab_associationsInput | null > | null,
  nextToken?: string | null,
};

export type ListLearning_path_lab_associationsQuery = {
  listLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associationsConnection",
    items?:  Array< {
      __typename: "Learning_path_lab_associations",
      learning_path_id?: number | null,
      created_at: string,
      id: number,
      lab_id?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUser_role_associationsQueryVariables = {
  id: number,
};

export type GetUser_role_associationsQuery = {
  getUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type ListUser_role_associationsQueryVariables = {
  filter?: TableUser_role_associationsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByUser_role_associationsInput | null > | null,
  nextToken?: string | null,
};

export type ListUser_role_associationsQuery = {
  listUser_role_associations?:  {
    __typename: "User_role_associationsConnection",
    items?:  Array< {
      __typename: "User_role_associations",
      role_id?: number | null,
      id: number,
      created_at: string,
      user_id?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSchoolsQueryVariables = {
  id: number,
};

export type GetSchoolsQuery = {
  getSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type ListSchoolsQueryVariables = {
  filter?: TableSchoolsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderBySchoolsInput | null > | null,
  nextToken?: string | null,
};

export type ListSchoolsQuery = {
  listSchools?:  {
    __typename: "SchoolsConnection",
    items?:  Array< {
      __typename: "Schools",
      name: string,
      id: number,
      created_at: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRolesQueryVariables = {
  id: number,
};

export type GetRolesQuery = {
  getRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: TableRolesFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByRolesInput | null > | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "RolesConnection",
    items?:  Array< {
      __typename: "Roles",
      name: string,
      id: number,
      created_at: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSchool_user_associationsQueryVariables = {
  id: number,
};

export type GetSchool_user_associationsQuery = {
  getSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type ListSchool_user_associationsQueryVariables = {
  filter?: TableSchool_user_associationsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderBySchool_user_associationsInput | null > | null,
  nextToken?: string | null,
};

export type ListSchool_user_associationsQuery = {
  listSchool_user_associations?:  {
    __typename: "School_user_associationsConnection",
    items?:  Array< {
      __typename: "School_user_associations",
      school_id?: number | null,
      id: number,
      created_at: string,
      user_id?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLearning_pathsQueryVariables = {
  id: number,
};

export type GetLearning_pathsQuery = {
  getLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type ListLearning_pathsQueryVariables = {
  filter?: TableLearning_pathsFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByLearning_pathsInput | null > | null,
  nextToken?: string | null,
};

export type ListLearning_pathsQuery = {
  listLearning_paths?:  {
    __typename: "Learning_pathsConnection",
    items?:  Array< {
      __typename: "Learning_paths",
      name: string,
      created_at: string,
      id: number,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  first_name?: string | null,
  created_at?: string | null,
  last_name?: string | null,
  id?: number | null,
  email?: string | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  first_name?: string | null,
  created_at?: string | null,
  last_name?: string | null,
  id?: number | null,
  email?: string | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  first_name?: string | null,
  created_at?: string | null,
  last_name?: string | null,
  id?: number | null,
  email?: string | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    first_name: string,
    created_at: string,
    last_name: string,
    id: number,
    email: string,
    cognito_id: string,
  } | null,
};

export type OnCreateSchool_lab_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  lab_id?: number | null,
};

export type OnCreateSchool_lab_associationsSubscription = {
  onCreateSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type OnUpdateSchool_lab_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  lab_id?: number | null,
};

export type OnUpdateSchool_lab_associationsSubscription = {
  onUpdateSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type OnDeleteSchool_lab_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  lab_id?: number | null,
};

export type OnDeleteSchool_lab_associationsSubscription = {
  onDeleteSchool_lab_associations?:  {
    __typename: "School_lab_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    lab_id?: number | null,
  } | null,
};

export type OnCreateLabsSubscriptionVariables = {
  cloudshare_training_id?: string | null,
  created_at?: string | null,
  description?: string | null,
  id?: number | null,
  name?: string | null,
};

export type OnCreateLabsSubscription = {
  onCreateLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type OnUpdateLabsSubscriptionVariables = {
  cloudshare_training_id?: string | null,
  created_at?: string | null,
  description?: string | null,
  id?: number | null,
  name?: string | null,
};

export type OnUpdateLabsSubscription = {
  onUpdateLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type OnDeleteLabsSubscriptionVariables = {
  cloudshare_training_id?: string | null,
  created_at?: string | null,
  description?: string | null,
  id?: number | null,
  name?: string | null,
};

export type OnDeleteLabsSubscription = {
  onDeleteLabs?:  {
    __typename: "Labs",
    cloudshare_training_id: string,
    created_at: string,
    description: string,
    id: number,
    name: string,
  } | null,
};

export type OnCreateLearning_path_lab_associationsSubscriptionVariables = {
  learning_path_id?: number | null,
  created_at?: string | null,
  id?: number | null,
  lab_id?: number | null,
};

export type OnCreateLearning_path_lab_associationsSubscription = {
  onCreateLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type OnUpdateLearning_path_lab_associationsSubscriptionVariables = {
  learning_path_id?: number | null,
  created_at?: string | null,
  id?: number | null,
  lab_id?: number | null,
};

export type OnUpdateLearning_path_lab_associationsSubscription = {
  onUpdateLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type OnDeleteLearning_path_lab_associationsSubscriptionVariables = {
  learning_path_id?: number | null,
  created_at?: string | null,
  id?: number | null,
  lab_id?: number | null,
};

export type OnDeleteLearning_path_lab_associationsSubscription = {
  onDeleteLearning_path_lab_associations?:  {
    __typename: "Learning_path_lab_associations",
    learning_path_id?: number | null,
    created_at: string,
    id: number,
    lab_id?: number | null,
  } | null,
};

export type OnCreateUser_role_associationsSubscriptionVariables = {
  role_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnCreateUser_role_associationsSubscription = {
  onCreateUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnUpdateUser_role_associationsSubscriptionVariables = {
  role_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnUpdateUser_role_associationsSubscription = {
  onUpdateUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnDeleteUser_role_associationsSubscriptionVariables = {
  role_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnDeleteUser_role_associationsSubscription = {
  onDeleteUser_role_associations?:  {
    __typename: "User_role_associations",
    role_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnCreateSchoolsSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnCreateSchoolsSubscription = {
  onCreateSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnUpdateSchoolsSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnUpdateSchoolsSubscription = {
  onUpdateSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnDeleteSchoolsSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnDeleteSchoolsSubscription = {
  onDeleteSchools?:  {
    __typename: "Schools",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnCreateRolesSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnCreateRolesSubscription = {
  onCreateRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnUpdateRolesSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnUpdateRolesSubscription = {
  onUpdateRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnDeleteRolesSubscriptionVariables = {
  name?: string | null,
  id?: number | null,
  created_at?: string | null,
};

export type OnDeleteRolesSubscription = {
  onDeleteRoles?:  {
    __typename: "Roles",
    name: string,
    id: number,
    created_at: string,
  } | null,
};

export type OnCreateSchool_user_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnCreateSchool_user_associationsSubscription = {
  onCreateSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnUpdateSchool_user_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnUpdateSchool_user_associationsSubscription = {
  onUpdateSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnDeleteSchool_user_associationsSubscriptionVariables = {
  school_id?: number | null,
  id?: number | null,
  created_at?: string | null,
  user_id?: number | null,
};

export type OnDeleteSchool_user_associationsSubscription = {
  onDeleteSchool_user_associations?:  {
    __typename: "School_user_associations",
    school_id?: number | null,
    id: number,
    created_at: string,
    user_id?: number | null,
  } | null,
};

export type OnCreateLearning_pathsSubscriptionVariables = {
  name?: string | null,
  created_at?: string | null,
  id?: number | null,
  description?: string | null,
};

export type OnCreateLearning_pathsSubscription = {
  onCreateLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type OnUpdateLearning_pathsSubscriptionVariables = {
  name?: string | null,
  created_at?: string | null,
  id?: number | null,
  description?: string | null,
};

export type OnUpdateLearning_pathsSubscription = {
  onUpdateLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};

export type OnDeleteLearning_pathsSubscriptionVariables = {
  name?: string | null,
  created_at?: string | null,
  id?: number | null,
  description?: string | null,
};

export type OnDeleteLearning_pathsSubscription = {
  onDeleteLearning_paths?:  {
    __typename: "Learning_paths",
    name: string,
    created_at: string,
    id: number,
    description: string,
  } | null,
};
