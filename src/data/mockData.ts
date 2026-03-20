
/**
 * Client Entity
 * Represents a healthcare organization using the CDM system
 */

/**
 * Mock Client Data
 * Healthcare organizations using the CDM Request system
 */


export const mockClients: Client[] = [
  {
    id: 'client_sacred_heart',
    name: 'Sacred Heart',
    isActive: true,
    status: 'Active',
    metrics: {
      routes: 8,
      users: 3,
      requestTypes: 4,
      cdmFiles: 4,
    },
    lastImport: '01/28/2026',
  },
  {
    id: 'client_all_saints',
    name: 'All Saints Medicine',
    isActive: true,
    status: 'Active',
    metrics: {
      routes: 5,
      users: 2,
      requestTypes: 3,
      cdmFiles: 4,
    },
    lastImport: '01/22/2026',
  },
  {
    id: 'client_mash',
    name: 'MASH Healthcare Collective',
    isActive: true,
    status: 'Active',
    metrics: {
      routes: 6,
      users: 2,
      requestTypes: 3,
      cdmFiles: 4,
    },
    lastImport: '01/15/2026',
  },
  {
    id: 'client_monarch',
    name: 'Monarch Health',
    isActive: true,
    status: 'Pending Setup',
    metrics: {
      routes: 0,
      users: 1,
      requestTypes: 0,
      cdmFiles: 4,
    },
    lastImport: '12/10/2025',
  },
];

/**
 * Helper: Get client by ID
 */
export function getClientById(clientId: string): Client | undefined {
  return mockClients.find((c) => c.id === clientId);
}

/**
 * Helper: Get active clients
 */
export function getActiveClients(): Client[] {
  return mockClients.filter((c) => c.isActive);
}

/**
 * Helper: Get client by status
 */
export function getClientsByStatus(status: 'Active' | 'Pending Setup' | 'Deactivated'): Client[] {
  return mockClients.filter((c) => c.status === status);
}


export interface Client {
  id: any;
  name: string;
  isActive: boolean;
  
  // Optional UI metadata for ClientsPage display
  status?: 'Active' | 'Pending Setup' | 'Deactivated';
  metrics?: {
    routes: number;
    users: number;
    requestTypes: number;
    cdmFiles: number;
  };
  lastImport?: string; // Format: MM/DD/YYYY
}

// export interface Client {
//   name: string;
//   routes: number;
//   users: number;
//   status: string;
// }

export interface Route {
  name: string;
  file: string;
  status: string;
  queues: number;
  requests: number;
  created: string;
  updated: string;
}

export const routes: Route[] = [
  {
    name: "Expedited HB",
    file: "Hospital-Based Charges",
    status: "Active",
    queues: 3,
    requests: 3,
    created: "01/09/2026",
    updated: "01/09/2026"
  },
  {
    name: "HB Compliance Route",
    file: "Hospital-Based Charges",
    status: "Deactivated",
    queues: 3,
    requests: 0,
    created: "01/24/2026",
    updated: "01/24/2026"
  },
  {
    name: "Pharmacy Expedited",
    file: "Pharmacy Charges",
    status: "Active",
    queues: 3,
    requests: 2,
    created: "01/04/2026",
    updated: "01/04/2026"
  }
];


export function toUIClient(client: Client): any {
  const keyValuePairs: Array<{ key: string; value: string }> = [];
  
  if (client.metrics) {
    keyValuePairs.push({ key: 'Routes', value: client.metrics.routes.toString() });
  }
  
  return {
    id: client.id,
    name: client.name,
    status: client.status || 'Active',
    keyValuePairs,
  };
}

/**
 * Converts all clients to UI format
 */
export function toUIClients(clients: Client[]): UIClient[] {
  return clients.map(toUIClient);
}

/**
 * Gets request type data for a client (for ClientsPage detail panel)
 */
export function getRequestTypeDataForClient(clientId: string): RequestTypeData {
  const config = getConfigurationByClientId(clientId);
  
  if (!config || config.activatedRequestTypes.length === 0) {
    return {
      hb: null,
      supply: null,
      pharmacy: null,
    };
  }
  
  const data: RequestTypeData = {
    hb: null,
    supply: null,
    pharmacy: null,
  };
  
  config.activatedRequestTypes.forEach(rt => {
    const cdmFile = mockCDMFiles.find(f => f.id === rt.cdmFileId);
    if (cdmFile) {
      const fileName = `${cdmFile.type}_${cdmFile.name.replace(/\s+/g, '_')}_2026.xlsx`;
      
      switch (rt.type) {
        case 'HB':
          data.hb = fileName;
          break;
        case 'SUPPLY':
          data.supply = fileName;
          break;
        case 'PHARMACY':
          data.pharmacy = fileName;
          break;
      }
    }
  });
  
  return data;
}

export const mockClientConfigurations: ClientConfiguration[] = [
  {
    clientId: 'client_sacred_heart',
    activatedRequestTypes: [
      { type: 'HB', cdmFileId: 'cdm_hb_01' },
      { type: 'PB', cdmFileId: 'cdm_pb_01' },
      { type: 'SUPPLY', cdmFileId: 'cdm_supply_01' },
      { type: 'PHARMACY', cdmFileId: 'cdm_pharmacy_01' },
    ],
  },
  {
    clientId: 'client_all_saints',
    activatedRequestTypes: [
      { type: 'HB', cdmFileId: 'cdm_hb_01' },
      { type: 'PB', cdmFileId: 'cdm_pb_01' },
      { type: 'SUPPLY', cdmFileId: 'cdm_supply_01' },
    ],
  },
  {
    clientId: 'client_mash',
    activatedRequestTypes: [
      { type: 'HB', cdmFileId: 'cdm_hb_01' },
      { type: 'SUPPLY', cdmFileId: 'cdm_supply_01' },
      { type: 'PHARMACY', cdmFileId: 'cdm_pharmacy_01' },
    ],
  },
  {
    clientId: 'client_monarch',
    activatedRequestTypes: [],
  },
];

/**
 * Helper: Get configuration by client ID
 */
export function getConfigurationByClientId(clientId: string): any | undefined {
  return mockClientConfigurations.find((c) => c.clientId === clientId);
}


export const mockCDMFiles: any[] = [
  {
    id: 'cdm_hb_01',
    clientId: 'shared', // Shared across all clients
    type: 'HB',
    name: 'Hospital-Based Charges',
    effectiveDate: '2026-01-01',
    isActive: true,
  },
  {
    id: 'cdm_pb_01',
    clientId: 'shared',
    type: 'PB',
    name: 'Professional-Based Charges',
    effectiveDate: '2026-01-01',
    isActive: true,
  },
  {
    id: 'cdm_supply_01',
    clientId: 'shared',
    type: 'SUPPLY',
    name: 'Supply Charges',
    effectiveDate: '2026-01-01',
    isActive: true,
  },
  {
    id: 'cdm_pharmacy_01',
    clientId: 'shared',
    type: 'PHARMACY',
    name: 'Pharmacy Charges',
    effectiveDate: '2026-01-01',
    isActive: true,
  },
];

/**
 * Helper: Get CDM file by ID
 */
export function getCDMFileById(cdmFileId: string): any | undefined {
  return mockCDMFiles.find((f) => f.id === cdmFileId);
}

/**
 * Helper: Get CDM file by type
 */
export function getCDMFileByType(type: 'HB' | 'PB' | 'SUPPLY' | 'PHARMACY'): any | undefined {
  return mockCDMFiles.find((f) => f.type === type);
}

/**
 * Helper: Get active CDM files
 */
export function getActiveCDMFiles(): any[] {
  return mockCDMFiles.filter((f) => f.isActive);
}
