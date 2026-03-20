/**
 * RouteStatusChip Component
 * Displays route status badges with icon and label (Active, Draft, Deactivated)
 * Uses base Chip component with design system colors
 */

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Chip } from '@mui/material';

export type RouteStatus = 'active' | 'draft' | 'deactivated';

interface RouteStatusChipProps {
  status: RouteStatus;
  size?: 'small' | 'medium';
}

const STATUS_CONFIG = {
  active: {
    label: 'Active',
    chipColor: 'success' as const,
    icon: CheckCircleIcon,
    borderRadius: '4px',
  },
  draft: {
    label: 'Draft',
    chipColor: 'info' as const,
    icon: RadioButtonCheckedIcon,
    borderRadius: '2px',
  },
  deactivated: {
    label: 'Deactivated',
    chipColor: 'other' as const,
    icon: RemoveCircleIcon,
    borderRadius: '2px',
  },
};

export function RouteStatusChip({ status, size = 'small' }: RouteStatusChipProps) {
  const config = STATUS_CONFIG[status];
  const IconComponent = config.icon;

  return (
    <Chip
      label={config.label}
      chipColor={config.chipColor}
      chipShape="square"
      variant="filled"
      size={size}
      icon={
        <IconComponent
          sx={{
            fontSize: size === 'small' ? '12px !important' : '16px !important',
          }}
        />
      }
      sx={{
        textTransform: 'capitalize',
        '& .MuiChip-icon': {
          color: 'inherit',
        },
        borderRadius: config.borderRadius,
      }}
    />
  );
}