import { DataGrid } from "@mui/x-data-grid";
import { Chip, Card, Typography } from "@mui/material";

const columns = [
  { field: "name", headerName: "Name", width: 180 },
  { field: "file", headerName: "CDM File", width: 180 },

  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params: any) => (
      <Chip
        label={params.value}
        color={params.value === "Active" ? "success" : "default"}
        size="small"
      />
    )
  },

  { field: "queues", headerName: "Work Queues", width: 140 },
  { field: "requests", headerName: "Active Requests", width: 160 },
  { field: "created", headerName: "Created", width: 150 },
  { field: "updated", headerName: "Updated", width: 150 }
];

const rows = [
  {
    id: 1,
    name: "Route Name",
    file: "Supply CDM File",
    status: "Active",
    queues: 5,
    requests: 12,
    created: "01/01/2024",
    updated: "01/05/2024"
  }
];

export default function RoutesTable() {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Routes
      </Typography>

      <div style={{ height: 300 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Card>
  );
}