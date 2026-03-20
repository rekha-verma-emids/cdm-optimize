/**
 * ClientDetailHeader Component
 * Header for client detail view with client name, last import date, search, and edit button
 */

import { Box, Button } from "@mui/material";
import { SearchInput } from "../atoms/SearchInput";

interface ClientDetailHeaderProps {
  clientName: string;
  lastImport: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onEditProfile: () => void;
}

export function ClientDetailHeader({
  clientName,
  lastImport,
  searchValue,
  onSearchChange,
  onEditProfile,
}: ClientDetailHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }} className="mt-[0px] mr-[0px] mb-[24px] ml-[0px]"
    >
      {/* Left: Client Name + Last Import */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2>
          {clientName}
        </h2>
      </Box>

      {/* Right: Search + Edit Profile Button */}
      <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Box sx={{ width: '240px' }}>
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={onSearchChange}
            fullWidth
          />
        </Box>
        <Button
          variant="outlined"
          size="small"
          onClick={onEditProfile}
        >
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
}
