import { Card, Typography, TextField, List, ListItem } from "@mui/material";

const clients = [
  "Ardent Health Services",
  "Ballad Health",
  "Beebe Health",
  "Summit Health"
];

export default function ClientList() {
  return (
    <Card sx={{ p: 2 }}>

      <Typography variant="h6">Client List</Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search"
        sx={{ mt: 2 }}
      />

      <List>
        {clients.map((client) => (
          <ListItem key={client}>
            {client}
          </ListItem>
        ))}
      </List>

    </Card>
  );
}