import {
    View,
    Flex,
    useTheme,
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
import { useNavigate } from "react-router-dom";

const School = () => {
  const { tokens } = useTheme();
  const { schoolId = '' } = useParams<{ schoolId: string }>()
  const school = useSchool(schoolId);
  const modules = useSchoolLabs(Number(schoolId));
  const navigate = useNavigate();
  return (
    <>
      <View maxWidth="100%" padding="0rem" minHeight="100vh">
        <View paddingTop="1rem" paddingBottom="1rem">
          <Flex
            direction={{ base: "column", large: "row" }}
            alignItems="flex-start"
            backgroundColor={tokens.colors.background.primary.value}
          >
            <div className="profile-header-text">
              <Text variation="primary" fontWeight={600} fontSize="18px">
                {school?.school?.name}
              </Text>
            </div>
          </Flex>
        </View>
        <View>
          <Table
            backgroundColor={tokens.colors.background.primary.value}
            caption=""
            highlightOnHover={true}
            // variation="striped"
          >
            <TableHead>
                <TableRow>
                  <TableCell as="th">Module</TableCell>
                  <TableCell as="th">Description</TableCell>
                  <TableCell as="th"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {modules?.labs?.labs?.sort((a, b) => a.name.localeCompare(b.name))?.map((module) => {
              return (
                <TableRow key={module.id}>
                  <TableCell
                    onClick={() => navigate(`/modules/${module.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {module.name}
                  </TableCell>
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
      </View>
    </>
  );
};

export default School;
