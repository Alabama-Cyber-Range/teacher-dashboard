import {
  Heading,
  View,
  Button,
  Flex,
} from "@aws-amplify/ui-react";
import SchoolsTable from "./SchoolsTable";
import { useNavigate } from "react-router-dom";

const Schools = () => {
  const navigate = useNavigate();
  return (
    <>
        <View padding="1rem">
            <Flex justifyContent="space-between">
                <Heading level={1}>Schools</Heading>
                <Button onClick={() => navigate("/add-school")}>Add School</Button>
            </Flex>
        </View>
        <SchoolsTable />
    </>
  );
};

export default Schools;
