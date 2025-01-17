import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
//import UsersTable from "./UsersTable";

// const demoUsers = [{ name: "hello" }, { name: "hello" }];

const Modules = () => {
  return (
    <>
      <div>
        <h2>Modules</h2>
      </div>

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333"> Modules </Heading>
        <br></br>
        <ScrollView width="100%">
          <BasicTable />
        </ScrollView>
      </View>
    </>
  );
};

export default Modules;
