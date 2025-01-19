import {
    View,
    Flex,
    // useTheme,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Text,
    Button,
} from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';
import { useSchool } from "../../hooks/useSchool";
import { useSchoolLabs } from "../../hooks/useSchoolLabs";
// import { useNavigate } from "react-router-dom";

const School = () => {
//   const { tokens } = useTheme();
  const { schoolId = '' } = useParams<{ schoolId: string }>()
  const school = useSchool(schoolId);
  const modules = useSchoolLabs(Number(schoolId));
//   const navigate = useNavigate();
  return (
    <>
    <View maxWidth="100%" padding="0rem" minHeight="100vh">
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            {school?.school?.name}
          </Text>
        </div>
      </Flex>
        <Table
          caption=""
          highlightOnHover={true}
          variation="striped"
        >
            <TableHead>
                <TableRow>
                <TableCell as="th">Module</TableCell>
                <TableCell as="th">Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {modules?.labs?.labs?.sort((a, b) => a.name.localeCompare(b.name))?.map((module) => {
                return (
                    <TableRow key={module.id}>
                    <TableCell>{module.name}</TableCell>
                    <TableCell>{module.description}</TableCell>
                    <TableCell>
                        <Button>Remove</Button>
                    </TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
        </Table>
      </View>
    </>
  );
};

export default School;
