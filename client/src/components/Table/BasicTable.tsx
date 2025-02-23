import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
  useTheme,
} from "@aws-amplify/ui-react";

import { mockSongsData } from "../../data/mock";

import { useNavigate } from "react-router-dom";

const data = mockSongsData(10);

const BasicTable = () => {
  const { tokens } = useTheme();
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
          {data?.sort((a, b) => a.name.localeCompare(b.name))?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>N/A</TableCell>
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

export default BasicTable;
