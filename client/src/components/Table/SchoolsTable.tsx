import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@aws-amplify/ui-react";

import { mockSongsData } from "../../data/mock";

import { useNavigate } from "react-router-dom";

const data = mockSongsData(10);

const SchoolsTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">Title</TableCell>
            <TableCell as="th">Description</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
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

export default SchoolsTable;
