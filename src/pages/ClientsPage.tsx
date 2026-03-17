import { Grid, Box, Container } from "@mui/material";
import ClientHeader from "../components/clients/ClientHeader";
import ClientList from "../components/clients/ClientList";
import RoutesTable from "../components/clients/RoutesTable";

export default function ClientsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>

        {/* LEFT SIDEBAR */}
        <Grid xs={12} md={3}>
          <ClientList />
        </Grid>

        {/* MAIN CONTENT */}
        <Grid xs={12} md={9}>

          <ClientHeader />

          <Box sx={{ mt: 3 }}>
            <RoutesTable />
          </Box>

        </Grid>

      </Grid>
    </Container>
  );
}