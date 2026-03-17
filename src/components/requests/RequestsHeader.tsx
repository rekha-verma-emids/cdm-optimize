import { Box, Typography, Button } from "@mui/material"

const RequestsHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Requests</Typography>

        <Typography variant="body2" color="text.secondary">
          Last import at MM/DD/YYYY HH:MM AM
        </Typography>
      </Box>

      <Button 
        variant="contained"
        sx={{ 
          display: "flex",
          height: "30px",
          padding: "8px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "2px",
          backgroundColor: "#061D53",
          color: "#FFFFFF",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#051245"
          }
        }}
      >
        Create Request
      </Button>
    </Box>
  )
}

export default RequestsHeader;