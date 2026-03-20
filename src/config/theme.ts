import { createTheme } from '@mui/material/styles';

/**
 * MUI Theme Configuration
 * Maps healthcare design system tokens to MUI theme structure
 * 
 * Key principles:
 * - Use this theme for all MUI components via ThemeProvider
 * - Style MUI components using `sx` prop, not Tailwind classes
 * - Use Tailwind only for layout/utility on non-MUI elements
 * - Font: Roboto (from fonts.css)
 * - Base font size: 14px
 * - Badge radius: 2px (per guidelines)
 */

// Design system color tokens converted from oklch to hex
const colors = {
    basic: {
    black: '#000',
    white: '#fff',
  },
  
  // Primary: #061D53 -> deep navy blue
  primary: {
    light: '#384A75',
    main: '#061D53',
    dark: '#04143A',
    contrastText: '#ffffff',
    background: {
      main: '#B4BBCB',
      hover: '#E6E8EE',
      pressed: '#B4BBCB'
    }  
  },
  // Secondary and Info: oklch(0.5647 0.2051 263.75) -> bright blue
  secondary: {
    light: '#5C88F0',
    main: '#336AEC',
    dark: '#234AA5',
    contrastText: '#ffffff',
    background: {
      main: '#C2D2F9',
      hover: '#EBF0FD',
      pressed: '#C2D2F9'
    }
  },
  // Error/Destructive: oklch(0.5083 0.1877 27.16) -> red
  error: {
    light: '#CE5456',
    main: '#B92020',
    dark: '#821616',
    contrastText: '#FFF',
    background: {
      main: '#FFE6E6',
      hover: '#FCD8D8',
      pressed: '#F5C1C1'
    }
  },
  // Warning/Pending: oklch(0.4772 0.0975 88.87) -> yellow
  warning: {
    light: '#F2C62A',
    main: '#735900',
    dark: '#493B0D',
    contrastText: '#493B0D',
    background: {
      main: '#FBEEBF',
      hover: '#F9E395',
      pressed: '#F6D76A'
    }
  },
  // Success: oklch(0.4885 0.1558 144.53) -> green
  success: {
    light: '#339147',
    main: '#007519',
    dark: '#005512',
    contrastText: '#fff',
    background: {
      main: '#DEF4E1',
      hover: '#C6EBCB',
      pressed: '#ADE3B4'
    }
  },
  // Background: oklch(0.9884 0.0013 286.38) -> very light warm gray
  background: {
    default: '#FBFBFC',
    paper: '#FFFFFF',
  },
  // Text colors: oklch(0.314 0.0229 240.85) -> gray-900 dark blue-gray
  text: {
    primary: '#27333C', // gray-900
    secondary: '#4A5B68', // gray-700
    disabled: '#98A5AE', // gray-500
  },
  gray: {
    50: '#FDFDFE',
    100: '#FBFBFC',
    200: '#F3F4F6',
    300: '#EBECEF',
    400: '#CDD3D9',
    500: '#98A5AE',
    600: '#6E7F8E',
    700: '#4A5B68',
    800: '#374856',
    900: '#27333C',
    A100: '#F9FAFB',
    A200: '#F1F4F6',
    A400: '#C7D1D6',
    A700: '#4B5867'
  },
  // Additional colors
  divider: 'rgba(0, 0, 0, 0.1)',
  action: {
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
};

export const muiTheme = createTheme({
  palette: {
    mode: 'light',
    ...colors,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14, // Base font size from guidelines
    button: {
      textTransform: 'none', // Preserve Title Case from content
      fontWeight: 500,
      fontSize: '14px',
    },
    h1: {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    h5: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400
    },
    h6: {
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 500,
    },
    smallbody1: {
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    smallbody2: {
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 300,
    },
    inputLabel: {
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 4, // Default border radius (0.625rem)
  },
  spacing: 8, // 8px base spacing unit
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Fix MUI v7 NotchedOutline CSS conflict with Tailwind v4 preflight resets.
        // Tailwind v4 resets border-width to 0 on all elements, which collapses
        // the outlined input border and breaks floating label notch spacing.
        '.MuiOutlinedInput-notchedOutline': {
          borderWidth: '1px',
        },
        '.MuiOutlinedInput-notchedOutline legend > span': {
          paddingLeft: '4px',
          paddingRight: '4px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: '2px', // Per guidelines: light colored badges with 2px radius
          fontSize: '0.75rem',
          fontWeight: 400,
          minWidth: '20px',
          height: '20px',
          padding: '0 6px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Healthcare-friendly: flat, clean design
      },
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: 500,
          padding: '8px 16px',
        },
        sizeSmall: {
          fontSize: '13px',
          padding: '6px 12px',
        },
        sizeLarge: {
          fontSize: '15px',
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small', // Compact for data-dense healthcare UIs
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          height: '28px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.gray[400],
          '&.Mui-checked': {
            color: colors.primary.main,
          },
          '&.MuiCheckbox-indeterminate': {
            color: colors.primary.main,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0, // Flat design for healthcare UI
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          padding: '12px 16px',
        },
        head: {
          fontWeight: 500,
          backgroundColor: colors.gray.A100,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});