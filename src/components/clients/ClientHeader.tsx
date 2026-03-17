import { Box, Typography, Button } from "@mui/material";

export default function ClientHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Typography variant="h5">Client Name</Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="outlined">SEARCH</Button>
        <Button variant="contained">EDIT PROFILE</Button>
      </Box>
    </Box>
  );
}