/**
 * ClientListSidebar Component
 * Left sidebar with status filter, search, and client cards list
 * Matches Figma: flat divider-separated list, selected state = left blue border + blue bg
 */

import { Box, Typography, IconButton, Divider, Select } from "@mui/material";
import { SearchInput } from "../atoms/SearchInput";

export interface Client {
  id: string;
  name: string;
  status: 'Active' | 'Pending Setup' | 'Deactivated';
  keyValuePairs: Array<{ key: string; value: string }>;
}

/* ── ClientCard (internal) ─────────────────────────────────── */

interface ClientCardProps {
  title: string;
  status: 'Active' | 'Pending Setup' | 'Deactivated';
  keyValuePairs: Array<{ key: string; value: string }>;
  selected?: boolean;
  onClick?: () => void;
}

function ClientCard({
  title,
  status,
  keyValuePairs,
  selected = false,
  onClick,
}: ClientCardProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        bgcolor: selected ? 'secondary.background.hover' : 'background.paper',
        cursor: onClick ? 'pointer' : 'default',
        pl: 2,
        pr: 1,
        py: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        // Selected left border accent
        ...(selected && {
          borderLeft: '6px solid',
          borderLeftColor: 'secondary.main',
          pl: '10px', // 16px - 6px border
        }),
        '&:hover': onClick
          ? { bgcolor: selected ? 'secondary.background.hover' : 'gray.100' }
          : {},
      }}
    >
      {/* Header row: name … chevron */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography
          variant={selected ? 'body2' : 'body1'}
          sx={{
            color: 'text.primary',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <IconButton
          size="small"
          sx={{ minWidth: 32, minHeight: 32, p: 1 }}
          tabIndex={-1}
        >
          {/* <ChevronRightIcon sx={{ fontSize: 16, color: 'primary.main' }} /> */}
        </IconButton>
      </Box>

      {/* Status chip + key-value pairs row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px 16px',
          alignItems: 'center',
          fontFamily: 'Roboto',
          fontWeight: 400,
        }}
      >
        {/* <StatusChip status={status} /> */}
        {keyValuePairs.map((item, idx) => (
          <Box
            key={idx}
            sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                lineHeight: '20px',
                color: 'text.secondary',
                whiteSpace: 'nowrap',
              }}
            >
              {item.key}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '24px',
                color: 'text.primary',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* ── ClientListSidebar ─────────────────────────────────────── */

interface ClientListSidebarProps {
  clients: Client[];
  selectedClientId: string | null;
  statusFilter: string[];
  searchValue: string;
  onClientSelect: (clientId: string) => void;
  onStatusFilterChange: (values: string[]) => void;
  onSearchChange: (value: string) => void;
}

export function ClientListSidebar({
  clients,
  selectedClientId,
  statusFilter,
  searchValue,
  onClientSelect,
  onStatusFilterChange,
  onSearchChange,
}: ClientListSidebarProps) {
  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending Setup' },
    { value: 'deactivated', label: 'Deactivated' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'gray.200',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Sticky heading */}
      <Box
        sx={{
          px: 2,
          pt: 2,
          pb: 3,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            lineHeight: '28px',
            color: 'primary.main',
            fontFamily: 'Roboto',
            fontWeight: 400,
          }}
        >
          Client List
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, width: '100%', pt: 1 }}>
          <Select
            label="Status"
            options={statusOptions}
            value={statusFilter}
            onChange={onStatusFilterChange}
            placeholder="All Statuses"
            fullWidth
            sx={{ minWidth: '96px' }}
          />
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={onSearchChange}
            fullWidth
          />
        </Box>
      </Box>

      {/* Client list – flat divider-separated rows */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {clients.map((client, idx) => (
          <Box key={client.id}>
            <Divider sx={{ borderColor: 'gray.400' }} />
            <ClientCard
              title={client.name}
              status={client.status}
              keyValuePairs={client.keyValuePairs.filter(
                (pair) =>
                  pair.key !== 'Request Types' && pair.key !== 'CDM Files'
              )}
              selected={selectedClientId === client.id}
              onClick={() => onClientSelect(client.id)}
            />
            {idx === clients.length - 1 && (
              <Divider sx={{ borderColor: 'gray.400' }} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}