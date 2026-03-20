/**
 * ClientDetailPanel Component
 * Right panel showing client details with header, request types, and content area
 */

import { Box } from "@mui/material";
import { ClientDetailHeader } from "../molecules/ClientDetailsHeader";
import { EmptyStateBlock } from "../molecules/EmptyStateBlock";
import { RequestTypesRow } from "../molecules/RequestTypeRow";
import { ClientFilledState } from "./ClientFilledState";

interface ClientDetailPanelProps {
  clientId: string;
  clientName: string;
  lastImport: string;
  requestTypes: any[]; // Replace with actual type if available
  isEmpty: boolean;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onEditProfile: () => void;
  onSetupClient: () => void;
  onNavigateToRoute?: (routeId: string, action: 'edit' | 'duplicate') => void;
  onUpdateRouteStatus?: (routeId: string, status: 'active' | 'deactivated') => void;
}

export function ClientDetailPanel({
  clientId,
  clientName,
  lastImport,
  requestTypes,
  isEmpty,
  searchValue,
  onSearchChange,
  onEditProfile,
  onSetupClient,
  onNavigateToRoute,
  onUpdateRouteStatus,
}: ClientDetailPanelProps) {
  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Client Detail Header */}
      <ClientDetailHeader
        clientName={clientName}
        lastImport={lastImport}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onEditProfile={onEditProfile}
      />

      {/* Request Types Row */}
      <Box
        sx={{
        }} className="p-[0px] mt-[0px] mr-[0px] mb-[24px] ml-[0px]"
      >
        <RequestTypesRow requestTypes={requestTypes} />
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: isEmpty ? 'center' : 'flex-start',
          justifyContent: isEmpty ? 'center' : 'flex-start',
          overflow: 'auto',
        }} className="rounded-[4px]"
      >
        {isEmpty ? (
          <EmptyStateBlock
            clientName={clientName}
            onSetupClient={onSetupClient}
          />
        ) : (
          <Box sx={{ width: '100%' }}>
            <ClientFilledState 
              clientId={clientId}
              onNavigateToRoute={onNavigateToRoute}
              onUpdateRouteStatus={onUpdateRouteStatus}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}