import { Box, Typography, Button, Card } from "@mui/material"
import imageContainer from "../../assets/image_container.svg"

const EmptyState = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 40px",
        textAlign: "center",
        border: "2px dashed #D1D5DB",
        backgroundColor: "#FAFBFC",
        minHeight: "100%",
        width: "100%",
        boxShadow: "none"
      }}
    >
      {/* Illustration */}
      <Box
        sx={{
          marginBottom: "32px",
          width: "150px",
          height: "150px"
        }}
      >
        <img 
          src={imageContainer} 
          alt="No requests" 
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* Content */}
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          color: "#1F2937",
          marginBottom: "8px"
        }}
      >
        No Requests
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#6B7280",
          marginBottom: "24px",
          maxWidth: "300px"
        }}
      >
        Currently, no requests to display
      </Typography>

      {/* Button */}
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
          fontSize: "14px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#051245"
          }
        }}
      >
        Create Request
      </Button>
    </Card>
  )
}

export default EmptyState
