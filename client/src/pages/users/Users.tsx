import { Heading, View } from "@aws-amplify/ui-react";
import UsersTable from "./UsersTable";

const Users = () => {
  return (
    <>
        <View padding="1rem">
            <Heading level={2}>Users</Heading>
        </View>
        <UsersTable />
    </>
  );
};

export default Users;
