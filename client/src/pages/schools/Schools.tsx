import { Heading, View } from "@aws-amplify/ui-react";
import SchoolsTable from "./SchoolsTable";

const Schools = () => {
  return (
    <>
        <View padding="1rem">
            <Heading level={2}>Schools</Heading>
        </View>
        <SchoolsTable />
    </>
  );
};

export default Schools;
