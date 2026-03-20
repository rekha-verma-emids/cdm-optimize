/**
 * Type definitions for Routes page
 */

export type WorkQueueType = 'cdm-analyst' | 'client-finance';

export type UserType = 'ensemble' | 'client';

export interface WorkQueue {
  id: string;
  name: string;
  type: WorkQueueType;
  assignableUserTypes: UserType[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

export interface RouteStage {
  id: string;
  order: number;
  workQueueId: string | null;
  workQueueName?: string; // For newly created queues
  assigneeIds: string[];
}

export type RouteStatus = 'draft' | 'active' | 'deactivated';

export interface Route {
  id: string;
  name: string;
  requestTypeId: 'pb' | 'hb' | 'supply' | 'pharmacy';
  cdmFileId: string;
  status: RouteStatus;
  stages: RouteStage[];
  activeRequestsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RequestTypeSection {
  id: 'pb' | 'hb' | 'supply' | 'pharmacy';
  label: string;
  cdmFileId: string;
  routes: Route[];
  isExpanded: boolean;
}