import {
    useTheme,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Button,
  } from "@aws-amplify/ui-react";

  import { useSchoolUsers } from '../../hooks/useSchoolUsers';
  import { User } from '@admin-dashboard/contracts/User';
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";

  export interface SchoolData {
    schoolId: number;
  }

  const UsersTable = (props: SchoolData) => {
    const { tokens } = useTheme();
    const schoolId  = props.schoolId;
    const data = useSchoolUsers(schoolId);
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
              <TableCell as="th">First Name</TableCell>
              <TableCell as="th">Last Name</TableCell>
              <TableCell as="th">Email</TableCell>
              <TableCell as="th"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.schoolUsers?.users?.sort((a, b) => a.first_name.localeCompare(b.first_name))?.map((item: User) => {
              return (
                <TableRow key={item.id}>
                  <TableCell
                    onClick={() => navigate(`/users/${item.id}`)}
                    style={{ cursor: "pointer" }}
                    >{item.first_name}
                  </TableCell>
                  <TableCell>{item.last_name}</TableCell>
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

  export default UsersTable;
