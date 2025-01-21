import { Heading, View } from "@aws-amplify/ui-react";
import ModulesTable from "./ModulesTable";

const Modules = () => {
  return (
    <>
        <View padding="1rem">
            <Heading level={2}>Modules</Heading>
        </View>
        <ModulesTable />
    </>
  );
};

export default Modules;
