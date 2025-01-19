import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { useLearningPaths } from '../../hooks/useLearningPaths';
import { LearningPath } from '@admin-dashboard/contracts/LearningPath';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LearningPathsTable = () => {
  const data = useLearningPaths();
    useEffect(() => {}
    , [data]);
  const navigate = useNavigate();
  return (
    <>
      <Table
        caption=""
        highlightOnHover={true}
        variation="striped"
        >
        <TableHead>
          <TableRow>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Description</TableCell>
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
                <TableCell>{item.description}</TableCell>
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
