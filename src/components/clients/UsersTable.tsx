import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

const UsersTable: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Users
      </Typography>

      <Button variant="contained" sx={{ mb: 2 }}>
        Add User
      </Button>

      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Affiliation</TableCell>
            <TableCell>Routes</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@email.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>

      </Table>

    </Paper>
  );
};

export default UsersTable;