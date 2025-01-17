import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { useLabs } from "../../hooks/useLabs";
import { Lab } from '@admin-dashboard/contracts/Lab';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModulesTable = () => {
  const data = useLabs();
    useEffect(() => {}
    , [data]);
  const navigate = useNavigate();
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Description</TableCell>
            <TableCell as="th">CloudShare Training ID</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.labs?.labs?.map((item: Lab) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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
