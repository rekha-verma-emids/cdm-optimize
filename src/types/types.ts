/**
 * User Entity
 * Represents both Ensemble (internal) and Client users
 */

import { ID, Email } from './common';
import { UserType, EnsembleJobTitle, ClientJobTitle } from './enums';

export interface User {
  id: ID;
  name: string;
  email: Email;
  type: UserType;
  clientId: ID | null;
  jobTitle: EnsembleJobTitle | ClientJobTitle;
}

/**
 * Type guard to check if user is an Ensemble user
 */
export function isEnsembleUser(user: User): boolean {
  return user.type === 'ensemble';
}

/**
 * Type guard to check if user is a Client user
 */
export function isClientUser(user: User): boolean {
  return user.type === 'client';
}

/**
 * Helper to filter users by client
 */
export function getUsersByClient(users: User[], clientId: ID): User[] {
  return users.filter(user => user.clientId === clientId);
}

/**
 * Helper to filter users by type
 */
export function getUsersByType(users: User[], type: UserType): User[] {
  return users.filter(user => user.type === type);
}
