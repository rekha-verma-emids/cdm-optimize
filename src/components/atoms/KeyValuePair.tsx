/**
 * KeyValuePair Component
 * Displays a key-value pair with support for multiple layouts and value types
 * 
 * Variants:
 * 1. Vertical: key above value (default)
 * 2. Horizontal: key and value side-by-side (16px gap)
 * 3. Key with icon prefix
 * 4. Value as chip/badge component
 */
import { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface KeyValuePairProps {
  label: string;
  value: string | ReactNode;
  orientation?: 'vertical' | 'horizontal';
  keyIcon?: ReactNode;
}

export function KeyValuePair({ 
  label, 
  value, 
  orientation = 'vertical',
  keyIcon 
}: KeyValuePairProps) {
  const isHorizontal = orientation === 'horizontal';
  const isTextValue = typeof value === 'string';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        alignItems: isHorizontal ? 'center' : 'flex-start',
        gap: isHorizontal ? 1 : 0,

      }}
    >
      {/* Key/Label */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {keyIcon && keyIcon}
        <Typography variant="smallbody1" color="text.secondary">{label}</Typography>
      </Box>

      {/* Value */}
      {isTextValue ? (
        <Typography 
          variant="body1" 
          color="text.primary"
          sx={{ 
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {value}
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {value}
        </Box>
      )}
    </Box>
  );
}