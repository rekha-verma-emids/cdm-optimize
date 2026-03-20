/**
 * Mock User Data
 * Mix of ensemble (internal) and client users
 */


export const mockUsers: any[] = [
  // Ensemble (internal) users
  {
    id: 'user_ens_001',
    email: 'sarah.chen@ensemble.health',
    firstName: 'Sarah',
    lastName: 'Chen',
    jobTitle: 'CDM Analyst',
    userType: 'ensemble',
    clientId: null,
    isActive: true,
  },
  {
    id: 'user_ens_002',
    email: 'michael.rodriguez@ensemble.health',
    firstName: 'Michael',
    lastName: 'Rodriguez',
    jobTitle: 'CDM Analyst',
    userType: 'ensemble',
    clientId: null,
    isActive: true,
  },
  {
    id: 'user_ens_003',
    email: 'jennifer.kim@ensemble.health',
    firstName: 'Jennifer',
    lastName: 'Kim',
    jobTitle: 'CDM Leader',
    userType: 'ensemble',
    clientId: null,
    isActive: true,
  },
  {
    id: 'user_ens_004',
    email: 'david.thompson@ensemble.health',
    firstName: 'David',
    lastName: 'Thompson',
    jobTitle: 'CDM Analyst',
    userType: 'ensemble',
    clientId: null,
    isActive: true,
  },
  
  // Client users - Sacred Heart
  {
    id: 'user_sh_001',
    email: 'john.dorian@sacredheart.org',
    firstName: 'John',
    lastName: 'Dorian',
    jobTitle: 'Chargemaster Coordinator',
    userType: 'client',
    clientId: 'client_sacred_heart',
    isActive: true,
  },
  {
    id: 'user_sh_002',
    email: 'elliot.reid@sacredheart.org',
    firstName: 'Elliot',
    lastName: 'Reid',
    jobTitle: 'Revenue Cycle Manager',
    userType: 'client',
    clientId: 'client_sacred_heart',
    isActive: true,
  },
  {
    id: 'user_sh_003',
    email: 'perry.cox@sacredheart.org',
    firstName: 'Perry',
    lastName: 'Cox',
    jobTitle: 'Finance Director',
    userType: 'client',
    clientId: 'client_sacred_heart',
    isActive: true,
  },
  
  // Client users - All Saints Medicine
  {
    id: 'user_as_001',
    email: 'alex.martinez@allsaints.org',
    firstName: 'Alex',
    lastName: 'Martinez',
    jobTitle: 'Chargemaster Coordinator',
    userType: 'client',
    clientId: 'client_all_saints',
    isActive: true,
  },
  {
    id: 'user_as_002',
    email: 'jordan.williams@allsaints.org',
    firstName: 'Jordan',
    lastName: 'Williams',
    jobTitle: 'Finance Manager',
    userType: 'client',
    clientId: 'client_all_saints',
    isActive: true,
  },
  
  // Client users - MASH Healthcare Collective
  {
    id: 'user_mash_001',
    email: 'hawkeye.pierce@mashhc.org',
    firstName: 'Benjamin',
    lastName: 'Pierce',
    jobTitle: 'Chargemaster Coordinator',
    userType: 'client',
    clientId: 'client_mash',
    isActive: true,
  },
  {
    id: 'user_mash_002',
    email: 'margaret.houlihan@mashhc.org',
    firstName: 'Margaret',
    lastName: 'Houlihan',
    jobTitle: 'Finance Director',
    userType: 'client',
    clientId: 'client_mash',
    isActive: true,
  },
  
  // Client users - Monarch Health
  {
    id: 'user_monarch_001',
    email: 'lisa.cooper@monarchhealth.com',
    firstName: 'Lisa',
    lastName: 'Cooper',
    jobTitle: 'Revenue Cycle Director',
    userType: 'client',
    clientId: 'client_monarch',
    isActive: true,
  },
];

/**
 * Helper: Get user by ID
 */
export function getUserById(userId: string): User | undefined {
  return mockUsers.find((u) => u.id === userId);
}

/**
 * Helper: Get users by type
 */
export function getUsersByType(userType: 'ensemble' | 'client'): User[] {
  return mockUsers.filter((u) => u.userType === userType);
}

/**
 * Helper: Get ensemble (internal) users
 */
export function getEnsembleUsers(): User[] {
  return getUsersByType('ensemble');
}

/**
 * Helper: Get client users
 */
export function getClientUsers(): User[] {
  return getUsersByType('client');
}

/**
 * Helper: Get users by client ID
 */
export function getUsersByClientId(clientId: string): User[] {
  return mockUsers.filter((u) => u.clientId === clientId);
}

/**
 * Helper: Get active users
 */
export function getActiveUsers(): User[] {
  return mockUsers.filter((u) => u.isActive);
}

/**
 * Adapter: Convert centralized User to any format
 * Routes component expects a single 'name' field
 */
export function toRouteUser(user: User): any {
  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    type: user.userType,
  };
}

/**
 * Helper: Get all users in any format
 */
export function getMockUsersForRoutes(): any[] {
  return mockUsers.map(toRouteUser);
}