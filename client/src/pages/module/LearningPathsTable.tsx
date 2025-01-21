import {
  useTheme,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { useLabLearningPaths } from '../../hooks/useLabLearningPaths';
import { LearningPath } from '@admin-dashboard/contracts/LearningPath';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface LabData {
  labId: number;
}

const LearningPathsTable = (props: LabData) => {
  const { tokens } = useTheme();
  const labId  = props.labId;
  const data = useLabLearningPaths(labId);
    useEffect(() => {}
    , [data]);
  const navigate = useNavigate();
  return (
    <>
      <Table
        caption=""
        highlightOnHover={true}
        backgroundColor={tokens.colors.background.primary.value}
        // variation="striped"
        >
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.learningPaths?.learningPaths?.sort((a, b) => a.name.localeCompare(b.name))?.map((item: LearningPath) => {
            return (
              <TableRow key={item.id}>
                <TableCell
                  onClick={() => navigate(`/learning-paths/${item.id}`)}
                  style={{ cursor: "pointer" }}
                  >{item.name}
                </TableCell>
                <TableCell>
                  <Button onClick={() => navigate("/edit-form")}>Edit</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default LearningPathsTable;
