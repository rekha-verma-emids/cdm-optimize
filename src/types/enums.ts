/**
 * Entity-Layer Enum Types
 * Core enumerations used by entity definitions (CDMFile, Route, ClientConfiguration).
 * These use SCREAMING_SNAKE casing for values like 'SUPPLY', 'NET_NEW', 'IN_PROGRESS'.
 *
 * NOTE: Request-layer types with kebab-case values ('supply', 'net-new', 'in-progress')
 * live in `types/requests.ts` and are used by the Request entity and all UI components.
 * Do not confuse the two layers.
 */

export type UserType = 'ensemble' | 'client';

export type CDMFileType = 'HB' | 'PB' | 'SUPPLY' | 'PHARMACY';

export type CDMFileTypeLabel = 
  | 'HB CDM File'
  | 'PB CDM File'
  | 'Supply CDM File'
  | 'Pharmacy CDM File';

export type EnsembleJobTitle = 
  | 'CDM Analyst I'
  | 'CDM Analyst II'
  | 'CDM Manager';

export type ClientJobTitle = 
  | 'Service Line Lead'
  | 'Finance'
  | 'CFO'
  | 'Department Lead'
  | 'Revenue Integrity'
  | 'Director of Billing';

export type JobTitle = EnsembleJobTitle | ClientJobTitle;

/**
 * Request Types for CDM requests
 */
export type RequestType = 'NET_NEW' | 'CHANGE' | 'DEACTIVATE';

/**
 * Request Status throughout workflow
 */
export type RequestStatus = 
  | 'DRAFT'
  | 'IN_PROGRESS'
  | 'ON_HOLD'
  | 'APPROVED'
  | 'DENIED'
  | 'COMPLETED';

/**
 * Route Status
 */
export type RouteStatus = 'draft' | 'active';

/**
 * Helper function to get CDM File Type Label
 */
export function getCDMFileTypeLabel(type: CDMFileType): CDMFileTypeLabel {
  const labels: Record<CDMFileType, CDMFileTypeLabel> = {
    HB: 'HB CDM File',
    PB: 'PB CDM File',
    SUPPLY: 'Supply CDM File',
    PHARMACY: 'Pharmacy CDM File',
  };
  return labels[type];
}