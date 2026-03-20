/**
 * RequestTypesRow Component
 * Displays a row of 4 request type key-value pairs
 * Used on Clients page to show which request types are activated
 */

import { Box } from "@mui/material";
import { RequestTypeKeyValuePair } from "./RequestTypeKeyValuePair";


export interface RequestTypeData {
  hb: string | null;
  pb: string | null;
  supply: string | null;
  pharmacy: string | null;
}

interface RequestTypesRowProps {
  requestTypes: RequestTypeData;
}

export function RequestTypesRow({ requestTypes }: RequestTypesRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '9px 34px',
        alignItems: 'start',
        width: '100%',
      }}
    >
      <Box sx={{ flex: '1 0 0', minWidth: 0 }}>
        <RequestTypeKeyValuePair
          label="HB Requests"
          fileName={requestTypes.hb}
          isActive={requestTypes.hb !== null}
        />
      </Box>
      
      <Box sx={{ flex: '1 0 0', minWidth: 0 }}>
        <RequestTypeKeyValuePair
          label="PB Requests"
          fileName={requestTypes.pb}
          isActive={requestTypes.pb !== null}
        />
      </Box>
      
      <Box sx={{ flex: '1 0 0', minWidth: 0 }}>
        <RequestTypeKeyValuePair
          label="Supply Requests"
          fileName={requestTypes.supply}
          isActive={requestTypes.supply !== null}
        />
      </Box>
      
      <Box sx={{ flex: '1 0 0', minWidth: 0 }}>
        <RequestTypeKeyValuePair
          label="Pharmacy Requests"
          fileName={requestTypes.pharmacy}
          isActive={requestTypes.pharmacy !== null}
        />
      </Box>
    </Box>
  );
}
