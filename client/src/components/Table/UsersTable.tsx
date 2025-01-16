import React from "react";
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

const ModulesTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">First Name</TableCell>
            <TableCell as="th">Last Name</TableCell>
            <TableCell as="th">Email</TableCell>
            <TableCell as="th">Username</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell as="th">N/A</TableCell>
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
