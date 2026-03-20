/**
 * Mock Route Data
 * Approval routes for CDM requests across all clients
 */

import type { Route } from "../types/routes";

export const mockRoutes: Route[] = [
  // Sacred Heart Routes (8 routes - all 4 types activated)
  {
    id: 'route_sh_hb_01',
    name: 'Standard HB Review',
    clientId: 'client_sacred_heart',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_hb_01_1',
        order: 1,
        workQueueId: '1', // CDM Analyst Review
        assigneeIds: ['user_ens_001', 'user_ens_002'],
      },
      {
        id: 'stage_sh_hb_01_2',
        order: 2,
        workQueueId: '2', // Client Review
        assigneeIds: ['user_sh_001', 'user_sh_002'],
      },
      {
        id: 'stage_sh_hb_01_3',
        order: 3,
        workQueueId: '3', // Final Approval
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 12,
    createdAt: new Date('2025-11-15'),
    updatedAt: new Date('2026-01-20'),
  },
  {
    id: 'route_sh_hb_02',
    name: 'Expedited HB',
    clientId: 'client_sacred_heart',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_hb_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_sh_hb_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_sh_hb_02_3',
        order: 3,
        workQueueId: '2', // Finance Review - must be last
        assigneeIds: ['user_sh_003'],
      },
    ],
    activeRequestsCount: 3,
    createdAt: new Date('2026-01-10'),
    updatedAt: new Date('2026-01-10'),
  },
  {
    id: 'route_sh_pb_01',
    name: 'Standard PB Review',
    clientId: 'client_sacred_heart',
    requestType: 'PB',
    cdmFileId: 'cdm_pb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_pb_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002', 'user_ens_004'],
      },
      {
        id: 'stage_sh_pb_01_2',
        order: 2,
        workQueueId: '2',
        assigneeIds: ['user_sh_001'],
      },
      {
        id: 'stage_sh_pb_01_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 8,
    createdAt: new Date('2025-11-20'),
    updatedAt: new Date('2026-01-15'),
  },
  {
    id: 'route_sh_supply_01',
    name: 'Supply Items Route',
    clientId: 'client_sacred_heart',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_supply_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_sh_supply_01_2',
        order: 2,
        workQueueId: '4', // Pricing Review
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_sh_supply_01_3',
        order: 3,
        workQueueId: '2',
        assigneeIds: ['user_sh_002'],
      },
      {
        id: 'stage_sh_supply_01_4',
        order: 4,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 15,
    createdAt: new Date('2025-12-01'),
    updatedAt: new Date('2026-01-22'),
  },
  {
    id: 'route_sh_supply_02',
    name: 'Supply Fast Track',
    clientId: 'client_sacred_heart',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'draft',
    stages: [
      {
        id: 'stage_sh_supply_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_sh_supply_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 0,
    createdAt: new Date('2026-01-28'),
    updatedAt: new Date('2026-01-28'),
  },
  {
    id: 'route_sh_pharmacy_01',
    name: 'Pharmacy Standard',
    clientId: 'client_sacred_heart',
    requestType: 'PHARMACY',
    cdmFileId: 'cdm_pharmacy_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_pharmacy_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_sh_pharmacy_01_2',
        order: 2,
        workQueueId: '5', // Compliance Check
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_sh_pharmacy_01_3',
        order: 3,
        workQueueId: '2',
        assigneeIds: ['user_sh_001'],
      },
      {
        id: 'stage_sh_pharmacy_01_4',
        order: 4,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 7,
    createdAt: new Date('2025-12-10'),
    updatedAt: new Date('2026-01-18'),
  },
  {
    id: 'route_sh_pharmacy_02',
    name: 'Pharmacy Expedited',
    clientId: 'client_sacred_heart',
    requestType: 'PHARMACY',
    cdmFileId: 'cdm_pharmacy_01',
    status: 'active',
    stages: [
      {
        id: 'stage_sh_pharmacy_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_sh_pharmacy_02_2',
        order: 2,
        workQueueId: '5',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_sh_pharmacy_02_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 2,
    createdAt: new Date('2026-01-05'),
    updatedAt: new Date('2026-01-05'),
  },
  {
    id: 'route_sh_hb_03',
    name: 'HB Compliance Route',
    clientId: 'client_sacred_heart',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'draft',
    stages: [
      {
        id: 'stage_sh_hb_03_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_sh_hb_03_2',
        order: 2,
        workQueueId: '5',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_sh_hb_03_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 0,
    createdAt: new Date('2026-01-25'),
    updatedAt: new Date('2026-01-25'),
  },

  // All Saints Medicine Routes (5 routes - HB, PB, SUPPLY activated)
  {
    id: 'route_as_hb_01',
    name: 'HB Standard Path',
    clientId: 'client_all_saints',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_as_hb_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_as_hb_01_2',
        order: 2,
        workQueueId: '2',
        assigneeIds: ['user_as_001'],
      },
      {
        id: 'stage_as_hb_01_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 9,
    createdAt: new Date('2025-10-20'),
    updatedAt: new Date('2026-01-12'),
  },
  {
    id: 'route_as_hb_02',
    name: 'HB High Priority',
    clientId: 'client_all_saints',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_as_hb_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001', 'user_ens_002'],
      },
      {
        id: 'stage_as_hb_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_as_hb_02_3',
        order: 3,
        workQueueId: '2', // Finance Review - must be last
        assigneeIds: ['user_as_002'],
      },
    ],
    activeRequestsCount: 4,
    createdAt: new Date('2025-12-05'),
    updatedAt: new Date('2026-01-08'),
  },
  {
    id: 'route_as_pb_01',
    name: 'PB Review Path',
    clientId: 'client_all_saints',
    requestType: 'PB',
    cdmFileId: 'cdm_pb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_as_pb_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_004'],
      },
      {
        id: 'stage_as_pb_01_2',
        order: 2,
        workQueueId: '2',
        assigneeIds: ['user_as_001'],
      },
      {
        id: 'stage_as_pb_01_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 6,
    createdAt: new Date('2025-11-01'),
    updatedAt: new Date('2026-01-19'),
  },
  {
    id: 'route_as_supply_01',
    name: 'Supply Review',
    clientId: 'client_all_saints',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'active',
    stages: [
      {
        id: 'stage_as_supply_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_as_supply_01_2',
        order: 2,
        workQueueId: '4',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_as_supply_01_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 11,
    createdAt: new Date('2025-11-15'),
    updatedAt: new Date('2026-01-20'),
  },
  {
    id: 'route_as_supply_02',
    name: 'Supply Expedited',
    clientId: 'client_all_saints',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'draft',
    stages: [
      {
        id: 'stage_as_supply_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_as_supply_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 0,
    createdAt: new Date('2026-01-20'),
    updatedAt: new Date('2026-01-20'),
  },

  // MASH Healthcare Collective Routes (6 routes - HB, SUPPLY, PHARMACY activated)
  {
    id: 'route_mash_hb_01',
    name: 'Hospital Review',
    clientId: 'client_mash',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_mash_hb_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_004'],
      },
      {
        id: 'stage_mash_hb_01_2',
        order: 2,
        workQueueId: '2',
        assigneeIds: ['user_mash_001'],
      },
      {
        id: 'stage_mash_hb_01_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 5,
    createdAt: new Date('2025-09-10'),
    updatedAt: new Date('2026-01-14'),
  },
  {
    id: 'route_mash_hb_02',
    name: 'HB Quick Review',
    clientId: 'client_mash',
    requestType: 'HB',
    cdmFileId: 'cdm_hb_01',
    status: 'active',
    stages: [
      {
        id: 'stage_mash_hb_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_004'],
      },
      {
        id: 'stage_mash_hb_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_mash_hb_02_3',
        order: 3,
        workQueueId: '2', // Finance Review - must be last
        assigneeIds: ['user_mash_002'],
      },
    ],
    activeRequestsCount: 2,
    createdAt: new Date('2025-12-15'),
    updatedAt: new Date('2026-01-10'),
  },
  {
    id: 'route_mash_supply_01',
    name: 'Supply Standard',
    clientId: 'client_mash',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'active',
    stages: [
      {
        id: 'stage_mash_supply_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_mash_supply_01_2',
        order: 2,
        workQueueId: '4',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_mash_supply_01_3',
        order: 3,
        workQueueId: '2',
        assigneeIds: ['user_mash_001'],
      },
      {
        id: 'stage_mash_supply_01_4',
        order: 4,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 8,
    createdAt: new Date('2025-10-01'),
    updatedAt: new Date('2026-01-16'),
  },
  {
    id: 'route_mash_supply_02',
    name: 'Supply Limited Review',
    clientId: 'client_mash',
    requestType: 'SUPPLY',
    cdmFileId: 'cdm_supply_01',
    status: 'draft',
    stages: [
      {
        id: 'stage_mash_supply_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_001'],
      },
      {
        id: 'stage_mash_supply_02_2',
        order: 2,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 0,
    createdAt: new Date('2026-01-12'),
    updatedAt: new Date('2026-01-12'),
  },
  {
    id: 'route_mash_pharmacy_01',
    name: 'Pharmacy Review',
    clientId: 'client_mash',
    requestType: 'PHARMACY',
    cdmFileId: 'cdm_pharmacy_01',
    status: 'active',
    stages: [
      {
        id: 'stage_mash_pharmacy_01_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_mash_pharmacy_01_2',
        order: 2,
        workQueueId: '5',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_mash_pharmacy_01_3',
        order: 3,
        workQueueId: '2',
        assigneeIds: ['user_mash_001'],
      },
      {
        id: 'stage_mash_pharmacy_01_4',
        order: 4,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 4,
    createdAt: new Date('2025-10-20'),
    updatedAt: new Date('2026-01-11'),
  },
  {
    id: 'route_mash_pharmacy_02',
    name: 'Pharmacy Fast Track',
    clientId: 'client_mash',
    requestType: 'PHARMACY',
    cdmFileId: 'cdm_pharmacy_01',
    status: 'active',
    stages: [
      {
        id: 'stage_mash_pharmacy_02_1',
        order: 1,
        workQueueId: '1',
        assigneeIds: ['user_ens_002'],
      },
      {
        id: 'stage_mash_pharmacy_02_2',
        order: 2,
        workQueueId: '5',
        assigneeIds: ['user_ens_003'],
      },
      {
        id: 'stage_mash_pharmacy_02_3',
        order: 3,
        workQueueId: '3',
        assigneeIds: ['user_ens_003'],
      },
    ],
    activeRequestsCount: 1,
    createdAt: new Date('2025-11-25'),
    updatedAt: new Date('2026-01-09'),
  },

  // Monarch Health Routes (0 routes - no types activated yet, Pending Setup)
];

/**
 * Helper: Get routes by client ID
 */
export function getRoutesByClientId(clientId: string): Route[] {
  return mockRoutes.filter((r) => r.clientId === clientId);
}

/**
 * Helper: Get routes by request type
 */
export function getRoutesByType(requestType: string): Route[] {
  return mockRoutes.filter((r) => r.requestType === requestType);
}

/**
 * Helper: Get active routes only
 */
export function getActiveRoutes(): Route[] {
  return mockRoutes.filter((r) => r.status === 'active');
}

/**
 * Helper: Get route by ID
 */
export function getRouteById(routeId: string): Route | undefined {
  return mockRoutes.find((r) => r.id === routeId);
}

/**
 * Helper: Get routes for client by request type
 */
export function getClientRoutesByType(clientId: string, requestType: string): Route[] {
  return mockRoutes.filter((r) => r.clientId === clientId && r.requestType === requestType);
}