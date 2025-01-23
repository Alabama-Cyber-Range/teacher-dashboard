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
import { unassociate_lab_with_learning_path } from "../../services/api"

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
                  <Button
                    onClick={() => {unassociate_lab_with_learning_path(labId, Number(item.id))}}
                    >Unassociate
                  </Button>
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
