/**
 * EmptyStateBlock Component
 * Empty state with illustration, title, description, and CTA button
 */

import { Box, Typography, Button } from "@mui/material";

interface EmptyStateBlockProps {
  clientName: string;
  onSetupClient: () => void;
}

// Simplified illustration placeholder - represents users/clipboard graphic
function EmptyStateIllustration() {
  return (
    <Box
      sx={{
        width: '200px',
        height: '169px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <svg width="192" height="169" viewBox="0 0 192 169" fill="none">
        {/* Background circle */}
        <circle cx="96" cy="84.5" r="70" fill="#EBF0FD" />
        
        {/* Simplified clipboard/users illustration */}
        <g>
          {/* Clipboard */}
          <rect x="60" y="50" width="72" height="90" rx="4" fill="#fff" stroke="#061D53" strokeWidth="2" />
          <rect x="75" y="45" width="42" height="10" rx="2" fill="#061D53" />
          
          {/* User figures (simplified) */}
          <circle cx="96" cy="80" r="12" fill="#336AEC" />
          <path d="M96 92 C85 92, 82 98, 82 105 L110 105 C110 98, 107 92, 96 92 Z" fill="#336AEC" />
          
          <circle cx="75" cy="90" r="10" fill="#061D53" opacity="0.6" />
          <path d="M75 100 C67 100, 65 105, 65 110 L85 110 C85 105, 83 100, 75 100 Z" fill="#061D53" opacity="0.6" />
          
          <circle cx="117" cy="90" r="10" fill="#061D53" opacity="0.6" />
          <path d="M117 100 C109 100, 107 105, 107 110 L127 110 C127 105, 125 100, 117 100 Z" fill="#061D53" opacity="0.6" />
        </g>
      </svg>
    </Box>
  );
}

export function EmptyStateBlock({ 
  clientName, 
  onSetupClient 
}: EmptyStateBlockProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '360px',
        margin: '0 auto',
        padding: '32px 16px',
      }}
    >
      {/* Illustration */}
      <EmptyStateIllustration />

      {/* Title and Description */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'primary.main',
            lineHeight: '20px',
          }}
        >
          {clientName} Not Setup
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: 'text.primary',
            lineHeight: '20px',
          }}
        >
          Edit their profile to begin building routes and forms
        </Typography>
      </Box>

      {/* Button */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: '8px' }}>
        <Button
          variant="contained"
          onClick={onSetupClient}
        >
          Setup Client
        </Button>
      </Box>
    </Box>
  );
}