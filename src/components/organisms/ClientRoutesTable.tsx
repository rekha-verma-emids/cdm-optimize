/**
 * ClientRoutesTable Component
 * Table displaying routes for a specific client with columns: Name, CDM File, Status, Work Queues, Active Requests, Updated, Created
 * Features: Sortable columns with visual indicators, row actions menu
 */

import { useState, useMemo } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import { getCDMFileById, type Route } from '../../data/mockData';
import type { RouteStatus } from '../../types/routes';
import { DataGridContainer, TableHeader } from '../ui/table';
import { RouteStatusChip } from '../atoms/RouteStatusChip';

interface ClientRoutesTableProps {
  routes: Route[];
  chipSize?: 'small' | 'medium';
  onNavigateToRoute?: (routeId: string, action: 'edit' | 'duplicate') => void;
  onUpdateRouteStatus?: (routeId: string, status: 'active' | 'deactivated') => void;
}

// Sort order type
type Order = 'asc' | 'desc';

// Sortable column keys
type SortableColumn = 'name' | 'cdmFile' | 'status' | 'workQueues' | 'activeRequests' | 'updated' | 'created';

// Generic comparator function
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// Get comparator based on order direction
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string | Date }, b: { [key in Key]: number | string | Date }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function ClientRoutesTable({ routes, chipSize = 'medium', onNavigateToRoute, onUpdateRouteStatus }: ClientRoutesTableProps) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<SortableColumn>('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  // Menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
  
  // Dialog state
  const [deactivateDialogOpen, setDeactivateDialogOpen] = useState(false);
  const [routeToDeactivate, setRouteToDeactivate] = useState<string | null>(null);

  // Handle sort request
  const handleRequestSort = (property: SortableColumn) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  // Menu handlers
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, routeId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedRouteId(routeId);
  };
  
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedRouteId(null);
  };
  
  // Action handlers
  const handleEdit = () => {
    if (selectedRouteId && onNavigateToRoute) {
      onNavigateToRoute(selectedRouteId, 'edit');
    }
    handleCloseMenu();
  };
  
  const handleDuplicate = () => {
    if (selectedRouteId && onNavigateToRoute) {
      onNavigateToRoute(selectedRouteId, 'duplicate');
    }
    handleCloseMenu();
  };
  
  const handleDeactivate = () => {
    setRouteToDeactivate(selectedRouteId);
    setDeactivateDialogOpen(true);
    handleCloseMenu();
  };
  
  const handleConfirmDeactivate = () => {
    if (routeToDeactivate && onUpdateRouteStatus) {
      onUpdateRouteStatus(routeToDeactivate, 'deactivated');
    }
    setDeactivateDialogOpen(false);
    setRouteToDeactivate(null);
  };
  
  const handleCancelDeactivate = () => {
    setDeactivateDialogOpen(false);
    setRouteToDeactivate(null);
  };

  // Create sortable data with computed values
  const sortableRoutes = useMemo(() => {
    return routes.map((route) => {
      const cdmFile = getCDMFileById(route.cdmFileId);
      return {
        ...route,
        cdmFileName: cdmFile?.name || route.requestType,
        workQueuesCount: route.stages?.length || 0,
        updatedDate: route.updatedAt ? new Date(route.updatedAt).getTime() : 0,
        createdDate: route.createdAt ? new Date(route.createdAt).getTime() : 0,
      };
    });
  }, [routes]);

  // Sort the data
  const sortedRoutes = useMemo(() => {
    const comparator = (a: typeof sortableRoutes[0], b: typeof sortableRoutes[0]) => {
      switch (orderBy) {
        case 'name':
          return order === 'asc' 
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case 'cdmFile':
          return order === 'asc'
            ? a.cdmFileName.localeCompare(b.cdmFileName)
            : b.cdmFileName.localeCompare(a.cdmFileName);
        case 'status':
          return order === 'asc'
            ? a.status.localeCompare(b.status)
            : b.status.localeCompare(a.status);
        case 'workQueues':
          return order === 'asc'
            ? a.workQueuesCount - b.workQueuesCount
            : b.workQueuesCount - a.workQueuesCount;
        case 'activeRequests':
          return order === 'asc'
            ? (a.activeRequestsCount || 0) - (b.activeRequestsCount || 0)
            : (b.activeRequestsCount || 0) - (a.activeRequestsCount || 0);
        case 'updated':
          return order === 'asc'
            ? a.updatedDate - b.updatedDate
            : b.updatedDate - a.updatedDate;
        case 'created':
          return order === 'asc'
            ? a.createdDate - b.createdDate
            : b.createdDate - a.createdDate;
        default:
          return 0;
      }
    };

    return [...sortableRoutes].sort(comparator);
  }, [sortableRoutes, order, orderBy]);

  if (routes.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          No routes configured yet
        </Typography>
      </Box>
    );
  }

  return (
    <DataGridContainer>
      <TableContainer sx={{ maxHeight: '336px', overflow: 'auto', border: 0, borderRadius: 0 }}>
        <Table stickyHeader>
          <TableHeader>
            <TableRow>
              <TableHead>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableHead>
              <TableHead>
                <TableSortLabel
                  active={orderBy === 'cdmFile'}
                  direction={orderBy === 'cdmFile' ? order : 'asc'}
                  onClick={() => handleRequestSort('cdmFile')}
                >
                  CDM File
                </TableSortLabel>
              </TableHead>
              <TableHead>
                <TableSortLabel
                  active={orderBy === 'status'}
                  direction={orderBy === 'status' ? order : 'asc'}
                  onClick={() => handleRequestSort('status')}
                >
                  Status
                </TableSortLabel>
              </TableHead>
              <TableHead sx={{ textAlign: 'center' }}>
                <TableSortLabel
                  active={orderBy === 'workQueues'}
                  direction={orderBy === 'workQueues' ? order : 'asc'}
                  onClick={() => handleRequestSort('workQueues')}
                >
                  Work Queues
                </TableSortLabel>
              </TableHead>
              <TableHead sx={{ textAlign: 'center' }}>
                <TableSortLabel
                  active={orderBy === 'activeRequests'}
                  direction={orderBy === 'activeRequests' ? order : 'asc'}
                  onClick={() => handleRequestSort('activeRequests')}
                >
                  Active Requests
                </TableSortLabel>
              </TableHead>
              <TableHead>
                <TableSortLabel
                  active={orderBy === 'created'}
                  direction={orderBy === 'created' ? order : 'asc'}
                  onClick={() => handleRequestSort('created')}
                >
                  Created
                </TableSortLabel>
              </TableHead>
              <TableHead>
                <TableSortLabel
                  active={orderBy === 'updated'}
                  direction={orderBy === 'updated' ? order : 'asc'}
                  onClick={() => handleRequestSort('updated')}
                >
                  Updated
                </TableSortLabel>
              </TableHead>
              <TableHead sx={{ width: '48px' }}></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRoutes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((route) => {
              const cdmFile = getCDMFileById(route.cdmFileId);
              const workQueuesCount = route.stages?.length || 0;
              const formattedUpdated = route.updatedAt
                ? new Date(route.updatedAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                : '—';
              const formattedCreated = route.createdAt
                ? new Date(route.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
                : '—';

              // Map route status to RouteStatus type
              const routeStatus: RouteStatus = route.status === 'active' ? 'active' : 'deactivated';

              return (
                <TableRow key={route.id} hover>
                  <TableCell>{route.name}</TableCell>
                  <TableCell>{cdmFile?.name || route.requestType}</TableCell>
                  <TableCell>
                    <RouteStatusChip status={routeStatus} size={chipSize} />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{workQueuesCount}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{route.activeRequestsCount || 0}</TableCell>
                  <TableCell>{formattedCreated}</TableCell>
                  <TableCell>{formattedUpdated}</TableCell>
                  <TableCell sx={{ width: '48px' }}>
                    <IconButton
                      size="small"
                      aria-label="more actions"
                      onClick={(event) => handleOpenMenu(event, route.id)}
                      sx={{
                        color: 'primary.main',
                        '& .MuiSvgIcon-root': {
                          fontSize: 16,
                        },
                      }}
                    >
                      {/* <MoreVertIcon /> */}
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
      {/* Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            boxShadow: '0px 4px 8px 0px rgba(199, 209, 214, 0.5)',
            borderRadius: '2px',
            minWidth: '120px',
          },
        }}
      >
        <MenuItem onClick={handleEdit} sx={{ py: 0.5, px: 1 }}>
          <ListItemIcon sx={{ minWidth: '24px !important' }}>
            {/* <CreateIcon sx={{ fontSize: 16, color: 'primary.main' }} /> */}
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 400,
              color: 'gray.800',
              fontFamily: 'Roboto',
            }}
          />
        </MenuItem>
        <MenuItem onClick={handleDuplicate} sx={{ py: 0.5, px: 1 }}>
          <ListItemIcon sx={{ minWidth: '24px !important' }}>
            {/* <ContentCopyIcon sx={{ fontSize: 16, color: 'primary.main' }} /> */}
          </ListItemIcon>
          <ListItemText
            primary="Duplicate"
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 400,
              color: 'gray.800',
              fontFamily: 'Roboto',
            }}
          />
        </MenuItem>
        <MenuItem onClick={handleDeactivate} sx={{ py: 0.5, px: 1 }}>
          <ListItemIcon sx={{ minWidth: '24px !important' }}>
            {/* <Inventory2Icon sx={{ fontSize: 16, color: 'primary.main' }} /> */}
          </ListItemIcon>
          <ListItemText
            primary="Deactivate"
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 400,
              color: 'gray.800',
              fontFamily: 'Roboto',
            }}
          />
        </MenuItem>
      </Menu>
      
      {/* Deactivate Confirmation Dialog */}
      <Dialog
        open={deactivateDialogOpen}
        onClose={handleCancelDeactivate}
        PaperProps={{
          sx: {
            borderRadius: '2px',
            minWidth: '400px',
          },
        }}
      >
        <DialogTitle sx={{ fontSize: 18, fontWeight: 500, color: 'text.primary' }}>
          Deactivate Route
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: 14, fontWeight: 400, color: 'text.secondary' }}>
            Are you sure you want to deactivate this route? This will prevent new requests from being submitted through this route.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={handleCancelDeactivate}
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: '2px',
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDeactivate}
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: '2px',
              bgcolor: 'error.main',
              '&:hover': {
                bgcolor: 'error.dark',
              },
            }}
          >
            Deactivate
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={sortedRoutes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </DataGridContainer>
  );
}