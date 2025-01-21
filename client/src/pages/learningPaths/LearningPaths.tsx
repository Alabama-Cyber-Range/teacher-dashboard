import { Heading, View } from "@aws-amplify/ui-react";
import LearningPathsTable from "./LearningPathsTable";

const LearningPaths = () => {
  return (
    <>
        <View padding="1rem">
            <Heading level={2}>Learning Paths</Heading>
        </View>
        <LearningPathsTable />
    </>
  );
};

export default LearningPaths;
