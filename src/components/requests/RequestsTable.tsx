import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Chip, Stack, TextField } from "@mui/material";
import EmptyState from "./EmptyState";
import RequestsFilters from "./RequestsTabs";
import { useState } from "react";

const requestRows = [
  {
    id: 1,
    accountBalance: 897.37,
    accountNumber: 'LK01234567',
    firstName: 'Leslie',
    lastName: 'Knope',
    notes: 'Lorem ipsum dolor sit amet consectetur',
    status: 'On Time'
  },
  {
    id: 2,
    accountBalance: 98.01,
    accountNumber: 'BW87654321',
    firstName: 'Ben',
    lastName: 'Wyatt',
    notes: '',
    status: 'On Time'
  },
  {
    id: 3,
    accountBalance: 123.45,
    accountNumber: 'CT01020304',
    firstName: 'Chris',
    lastName: 'Trager',
    notes: '',
    status: 'On Time'
  },
  {
    id: 4,
    accountBalance: 1001983.02,
    accountNumber: 'AD45464748',
    firstName: 'Andy',
    lastName: 'Dwyer',
    notes: '',
    status: 'On Time'
  },
  {
    id: 5,
    accountBalance: -1.04,
    accountNumber: 'AL23129089',
    firstName: 'April',
    lastName: 'Ludgate',
    notes: 'Lorem ipsum dolor sit amet',
    status: 'Overdue'
  },
  {
    id: 6,
    accountBalance: 84.89,
    accountNumber: 'TH12345678',
    firstName: 'Tom',
    lastName: 'Haverford',
    notes: '-',
    status: 'On Time'
  },
  {
    id: 7,
    accountBalance: 53083.97,
    accountNumber: 'JG10987654',
    firstName: 'Jerry',
    lastName: 'Gergich',
    notes: '-',
    status: 'On Time'
  },
  {
    id: 8,
    accountBalance: -1083.23,
    accountNumber: 'RS56789012',
    firstName: 'Ron',
    lastName: 'Swanson',
    notes: 'Lorem ipsum dolor sit amet consectetur',
    status: 'On Time'
  },
  {
    id: 9,
    accountBalance: 67677.67,
    accountNumber: 'AP34567890',
    firstName: 'Ann',
    lastName: 'Perkins',
    notes: '-',
    status: 'On Time'
  },
  {
    id: 10,
    accountBalance: 5986.17,
    accountNumber: 'DM0987654',
    firstName: 'Donna',
    lastName: 'Meagle',
    notes: '-',
    status: 'On Time'
  }
]

const draftRows: any[] = []

const RequestsTable = ({ activeTab }: { activeTab: "requests" | "drafts" }) => {
  const tableRows = activeTab === "requests" ? requestRows : draftRows;
  const showEmptyState = tableRows.length === 0;
  return (
    <Box sx={{ overflow: 'hidden', marginTop: '-1px' }}>   
      {showEmptyState ? (
        <EmptyState />
      ) : (
        <DataGrid
          rows={tableRows}
          columns={[
            {
              disableColumnMenu: true,
              field: 'lastName',
              headerName: 'Last Name',
              minWidth: 80,
              sortable: true
            },
            {
              disableColumnMenu: true,
              field: 'firstName',
              flex: 1,
              headerName: 'First Name',
              minWidth: 50,
              sortable: true
            },
            {
              disableColumnMenu: true,
              field: 'accountNumber',
              flex: 1,
              headerName: 'Account Number',
              minWidth: 100
            },
            {
              align: 'right',
              disableColumnMenu: true,
              field: 'accountBalance',
              headerAlign: 'right',
              headerName: 'Account Balance',
              minWidth: 120,
              sortable: true,
              valueFormatter: function noRefCheck() { }
            },
            {
              disableColumnMenu: true,
              field: 'status',
              flex: 1,
              headerName: 'Status',
              minWidth: 60,
              renderCell: function noRefCheck() { }
            },
            {
              disableColumnMenu: true,
              field: 'notes',
              flex: 1,
              headerName: 'Notes',
              minWidth: 180,
              sortable: false
            },
            {
              align: 'right',
              field: 'action',
              headerAlign: 'right',
              headerName: '',
              minWidth: 48,
              renderCell: function noRefCheck() { },
              sortable: false
            }
          ]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: 600,
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #eee",
            },
          }}
        />
      )}
    </Box>
  )
}

export default RequestsTable;