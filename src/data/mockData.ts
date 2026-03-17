export interface Client {
  name: string;
  routes: number;
  users: number;
  status: string;
}

export interface Route {
  name: string;
  file: string;
  status: string;
  queues: number;
  requests: number;
  created: string;
  updated: string;
}

export const clients: Client[] = [
  { name: "Sacred Heart", routes: 8, users: 3, status: "Active" },
  { name: "All Saints Medicine", routes: 5, users: 2, status: "Active" },
  { name: "MASH Healthcare", routes: 6, users: 2, status: "Active" },
  { name: "Monarch Health", routes: 0, users: 1, status: "Pending Setup" }
];

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