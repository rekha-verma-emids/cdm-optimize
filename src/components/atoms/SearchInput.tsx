/**
 * SearchInput Component
 * Text field with search icon for filtering/searching
 */

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export function SearchInput({ 
  placeholder = 'Search', 
  value, 
  onChange,
  fullWidth = false 
}: SearchInputProps) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: '20px', color: 'text.secondary' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          fontSize: '14px',
          fontFamily: 'Roboto',
          bgcolor: 'background.paper',
          '& fieldset': {
            borderColor: 'gray.400',
          },
          '&:hover fieldset': {
            borderColor: 'gray.500',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'secondary.main',
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '8px 14px',
          fontSize: '14px',
          fontFamily: 'Roboto',
        },
        '& .MuiOutlinedInput-input::placeholder': {
          color: 'gray.500',
          opacity: 1,
        },
      }}
    />
  );
}