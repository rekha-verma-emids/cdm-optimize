import { Grid, Box } from "@mui/material";
import { ClientListSidebar } from "../components/organisms/ClientListSideBar";
import { useState } from "react";
import { getRequestTypeDataForClient, mockClients, toUIClients } from "../data/mockData";
import { ClientDetailPanel } from "../components/organisms/ClientDetailsPanel";

interface ClientsPageProps {
  onSetupClient?: (clientId?: string, hash?: string, routeId?: string) => void;
  onNavigate: (tab: 'cdm' | 'clients' | 'users') => void;
}

export default function ClientsPage({ onSetupClient, onNavigate }: ClientsPageProps) {
  const [selectedClientId, setSelectedClientId] = useState<string | null>('client_sacred_heart');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [detailSearch, setDetailSearch] = useState('');

  // Convert centralized clients to UI format
  const uiClients = toUIClients(mockClients);

  // Get selected client from both UI format and original mock data
  const selectedClient = uiClients.find((c) => c.id === selectedClientId) || uiClients[0];
  const selectedMockClient = mockClients.find((c) => c.id === selectedClientId) || mockClients[0];
  const requestTypes = getRequestTypeDataForClient(selectedClientId || 'client_sacred_heart');

  // Check if client is in empty state (no request types activated)
  const isEmpty = Object.values(requestTypes).every((val) => val === null);

  const handleSetupClient = () => {
    console.log('Setup client:', selectedClient.name);
    // Will open wizard later
    if (onSetupClient) {
      onSetupClient(selectedClient.id);
    }
  };

  const handleEditProfile = () => {
    console.log('Edit profile:', selectedClient.name);
    // Navigate to client profile page
    if (onSetupClient) {
      onSetupClient(selectedClient.id);
    }
  };
  
  const handleNavigateToRoute = (routeId: string, action: 'edit' | 'duplicate') => {
    console.log(`${action} route:`, routeId);
    // Navigate to ClientProfilePage Routes section
    // For now, navigate to client profile with routes hash
    if (onSetupClient) {
      onSetupClient(selectedClient.id, 'routes', routeId);
    }
  };
  
  const handleUpdateRouteStatus = (routeId: string, status: 'active' | 'deactivated') => {
    console.log(`Update route ${routeId} to status:`, status);
    // TODO: Implement actual status update logic when data persistence is added
    // For now, just log the action
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: 'background.default' }}>
      {/* AppBar - Fixed at top */}
      {/* <AppBar currentTab="clients" onTabChange={onNavigate} /> */}

      {/* Main Content Area - Below AppBar */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          mt: '56px', // AppBar height offset
          overflow: 'hidden',
        }}
      >
        {/* PageHeader - Full width */}
        {/* <PageHeader title="Clients" /> */}

        {/* Two-Column Layout Container with margin */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            padding: '0px 40px 40px 40px',
            overflow: 'hidden',
          }}
        >
          {/* 12-Column Grid Layout */}
          <Grid container spacing={3} sx={{ height: '100%', width: '100%', flexWrap: 'nowrap' }}>
            {/* Left Column: Sidebar (3 columns = 25% width) */}
            <Grid size={3} sx={{ height: '100%', display: 'flex' }}>
              <ClientListSidebar
                clients={uiClients}
                selectedClientId={selectedClientId}
                statusFilter={statusFilter}
                searchValue={sidebarSearch}
                onClientSelect={setSelectedClientId}
                onStatusFilterChange={setStatusFilter}
                onSearchChange={setSidebarSearch}
              />
            </Grid>

            {/* Right Column: Detail Panel (9 columns = 75% width) */}
            <Grid size={9} sx={{ height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <ClientDetailPanel
                clientId={selectedClientId || 'client_sacred_heart'}
                clientName={selectedClient.name}
                lastImport={selectedMockClient.lastImport || '—'}
                requestTypes={requestTypes}
                isEmpty={isEmpty}
                searchValue={detailSearch}
                onSearchChange={setDetailSearch}
                onEditProfile={handleEditProfile}
                onSetupClient={handleSetupClient}
                onNavigateToRoute={handleNavigateToRoute}
                onUpdateRouteStatus={handleUpdateRouteStatus}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}