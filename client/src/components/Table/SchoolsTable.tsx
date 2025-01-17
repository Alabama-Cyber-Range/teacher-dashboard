import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { useSchools } from "../../hooks/useSchools";
import { School } from '@admin-dashboard/contracts/School';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SchoolsTable = () => {
  const data = useSchools();
    useEffect(() => {}
    , [data]);
  const navigate = useNavigate();
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.schools?.school?.((item: School) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
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

export default SchoolsTable;
