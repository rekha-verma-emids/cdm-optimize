import { Button, Select, MenuItem, TextField, Tabs, Tab, Stack, InputAdornment, FormControl } from "@mui/material"
import TuneIcon from "@mui/icons-material/Tune";
import { Search } from "@mui/icons-material";
import { useState } from "react";

interface RequestsTabsProps {
  activeTab: "requests" | "drafts"
  onTabChange: (tab: "requests" | "drafts") => void
}

const RequestsTabs = ({ activeTab, onTabChange }: RequestsTabsProps) => {
  const [queue, setQueue] = useState("");

  return (
    <Stack direction="row" alignItems="end" justifyContent="space-between">
      {/* Tabs on the left */}
      <Tabs
        value={0}
        sx={{
          alignItems: "end",
          "& .MuiTabs-indicator": { display: "none" },
        }}
      >
        <Tab
          label="Requests"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            bgcolor: "#e3f2fd",
            mr: 1,
          }}
        />
        <Tab label="Drafts" sx={{ textTransform: "none" }} />
      </Tabs>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <FormControl size="small">
          <Select
            value={queue}
            onChange={(e) => setQueue(e.target.value)}
            displayEmpty
            sx={{
              borderRadius: 2,
              height: 36,
              px: 1,
            }}
          >
            <MenuItem value="">
              Work Queue
            </MenuItem>
            <MenuItem value="queue1">Queue 1</MenuItem>
            <MenuItem value="queue2">Queue 2</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" startIcon={<TuneIcon />}>
          ALL FILTERS
        </Button>

        <TextField
          size="small"
          placeholder="Search"
          sx={{
            width: 250,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  )
}

export default RequestsTabs;