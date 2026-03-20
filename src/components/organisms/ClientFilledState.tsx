/**
 * ClientFilledState Component
 * Displays filled state content for active clients: metrics, routes table, and users table
 */

import { Box, Button, Typography } from '@mui/material';
import { ClientRoutesTable } from './ClientRoutesTable';
import { getRoutesByClientId } from '../../data/mockRoutes';
import { getUsersByClientId } from '../../data/mockUsers';


interface ClientFilledStateProps {
  clientId: string;
  onAddRoute?: () => void;
  onAddUser?: () => void;
  onNavigateToRoute?: (routeId: string, action: 'edit' | 'duplicate') => void;
  onUpdateRouteStatus?: (routeId: string, status: 'active' | 'deactivated') => void;
}

export function ClientFilledState({
  clientId,
  onAddRoute,
  onAddUser,
  onNavigateToRoute,
  onUpdateRouteStatus,
}: ClientFilledStateProps) {
  // Get routes and users for this client
  const routes = getRoutesByClientId(clientId);
  const clientUsers = getUsersByClientId(clientId);

  // Calculate metrics from routes
  const hbRoutes = routes.filter(r => r.requestType === 'HB');
  const pbRoutes = routes.filter(r => r.requestType === 'PB');
  const supplyRoutes = routes.filter(r => r.requestType === 'SUPPLY');
  const pharmacyRoutes = routes.filter(r => r.requestType === 'PHARMACY');

  const metrics = {
    hbRequests: hbRoutes.reduce((sum, r) => sum + (r.activeRequestsCount || 0), 0),
    pbRequests: pbRoutes.reduce((sum, r) => sum + (r.activeRequestsCount || 0), 0),
    supplyRequests: supplyRoutes.reduce((sum, r) => sum + (r.activeRequestsCount || 0), 0),
    pharmacyRequests: pharmacyRoutes.reduce((sum, r) => sum + (r.activeRequestsCount || 0), 0),
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* Metrics Row is not needed
      <MetricsRow metrics={metrics} />
      */}

      {/* Routes Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'gray.200',
          borderRadius: '4px',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography variant="h3" sx={{ color: 'primary.main' }}>
            Routes
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={onAddRoute}
          >
            Add Route
          </Button>
        </Box>
        <ClientRoutesTable routes={routes} chipSize="small" onNavigateToRoute={onNavigateToRoute} onUpdateRouteStatus={onUpdateRouteStatus} />
      </Box>
    </Box>
  );
}