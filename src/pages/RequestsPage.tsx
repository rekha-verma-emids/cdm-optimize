import { Container, Box, Stack, Paper, Button, TextField } from "@mui/material"
import { useState } from "react"
import RequestsFilters from "../components/requests/RequestsTabs";
import RequestsHeader from "../components/requests/RequestsHeader";
import RequestsTable from "../components/requests/RequestsTable";
import SummaryCards from "../components/requests/SummaryCards";
import RequestsTabs from "../components/requests/RequestsTabs";

const RequestsPage = () => {
  const [activeTab, setActiveTab] = useState<"requests" | "drafts">("requests")

  return (
    <Box sx={{ mt: 3 }}>
      <Paper sx={{ p: 2, borderRadius: 2 }}>

        {/* Tabs (attached to table) */}
        <RequestsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <RequestsTable activeTab={activeTab} />

      </Paper>
    </Box>
  )
}

export default RequestsPage;