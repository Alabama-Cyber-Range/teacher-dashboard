import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
  useTheme,
} from "@aws-amplify/ui-react";

import { useLabs } from "../../hooks/useLabs";
import { Lab } from '@admin-dashboard/contracts/Lab';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModulesTable = () => {
  const { tokens } = useTheme();
  const data = useLabs();
    useEffect(() => {}
    , [data]);
  const navigate = useNavigate();
  return (
    <>
      <Table
        backgroundColor={tokens.colors.background.primary.value}
        caption=""
        highlightOnHover={true}
        // variation="striped"
        >
        <TableHead>
          <TableRow>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Description</TableCell>
            <TableCell as="th">CloudShare Training ID</TableCell>
            <TableCell as="th"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.labs?.labs?.sort((a, b) => a.name.localeCompare(b.name))?.map((item: Lab) => {
            return (
              <TableRow key={item.id}>
                <TableCell
                  onClick={() => navigate(`/modules/${item.id}`)}
                  style={{ cursor: "pointer" }}
                  >{item.name}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.cloudshare_training_id}</TableCell>
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

export default ModulesTable;
