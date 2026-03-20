import MuiTable from '@mui/material/Table';
import type { TableProps as MuiTableProps } from '@mui/material/Table';

import MuiTableBody from '@mui/material/TableBody';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';

import MuiTableCell from '@mui/material/TableCell';
import type { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';

import MuiTableContainer from '@mui/material/TableContainer';
import type { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';

import MuiTableHead from '@mui/material/TableHead';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';

import MuiTableRow from '@mui/material/TableRow';
import type { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';

import TableFooter from '@mui/material/TableFooter';
import type { TableFooterProps } from '@mui/material/TableFooter';

import MuiTablePagination from '@mui/material/TablePagination';
import type { TablePaginationProps } from '@mui/material/TablePagination';

import TableSortLabel from '@mui/material/TableSortLabel';
import type { TableSortLabelProps } from '@mui/material/TableSortLabel';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

/**
 * TableContainer with design system defaults
 */
export interface TableContainerProps extends MuiTableContainerProps {}

export function TableContainer({ sx, ...props }: TableContainerProps) {
  return (
    <MuiTableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'gray.400',
        borderRadius: '2px',
        bgcolor: 'background.paper',
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * Table with design system defaults
 */
export interface TableProps extends MuiTableProps {}

export function Table({ sx, ...props }: TableProps) {
  return (
    <MuiTable
      sx={{
        borderCollapse: 'collapse',
        width: '100%',
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * TableHeader - semantic wrapper for thead
 */
export interface TableHeaderProps extends MuiTableHeadProps {}

export function TableHeader(props: TableHeaderProps) {
  return <MuiTableHead {...props} />;
}

/**
 * TableHead - header cell with design system defaults
 */
export interface TableHeadProps extends MuiTableCellProps {}

export function TableHead({ sx, ...props }: TableHeadProps) {
  return (
    <MuiTableCell
      sx={{
        bgcolor: 'gray.200',
        fontSize: '14px',
        fontWeight: 500,
        color: 'gray.800',
        textTransform: 'capitalize',
        borderBottom: '0.5px solid',
        borderBottomColor: 'gray.400',
        height: '48px',
        padding: '8px',
        fontFamily: 'Roboto',
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * TableCell - body cell with design system defaults
 */
export interface TableCellProps extends MuiTableCellProps {}

export function TableCell({ sx, ...props }: TableCellProps) {
  return (
    <MuiTableCell
      sx={{
        fontSize: '14px',
        fontWeight: 400,
        color: 'gray.800',
        borderTop: '0.5px solid',
        borderTopColor: 'gray.400',
        borderBottom: '0.5px solid',
        borderBottomColor: 'gray.400',
        height: '48px',
        padding: '8px',
        fontFamily: 'Roboto',
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * TableBody - body wrapper
 */
export interface TableBodyProps extends MuiTableBodyProps {}

export function TableBody(props: TableBodyProps) {
  return <MuiTableBody {...props} />;
}

/**
 * TableRow - row component with hover and selected states
 */
export interface TableRowProps extends MuiTableRowProps {}

export function TableRow({ hover, selected, sx, ...props }: TableRowProps) {
  return (
    <MuiTableRow
      hover={hover}
      selected={selected}
      sx={{
        bgcolor: 'background.paper',
        ...(hover && {
          '&:hover': {
            bgcolor: 'gray.200',
            cursor: 'pointer',
          },
        }),
        ...(selected && {
          '&.Mui-selected': {
            bgcolor: 'background.default',
            borderLeft: '4px solid',
            borderLeftColor: 'primary.main',
            '&:hover': {
              bgcolor: 'background.default',
            },
          },
        }),
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * DataGridContainer — standard wrapper providing the outer border
 * around header, body rows, and footer (pagination).
 */
export interface DataGridContainerProps extends BoxProps {}

export function DataGridContainer({ sx, ...props }: DataGridContainerProps) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'gray.400',
        borderRadius: '2px',
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    />
  );
}

/**
 * TablePagination — styled footer matching the Figma data-grid footer.
 */
export function TablePagination(props: TablePaginationProps) {
  return (
    <MuiTablePagination
      {...props}
      sx={{
        bgcolor: 'gray.100',
        borderTop: '0.5px solid',
        borderTopColor: 'gray.400',
        color: 'primary.main',
        fontFamily: 'Roboto',
        '& .MuiTablePagination-toolbar': {
          minHeight: '48px',
          height: '48px',
          px: 2,
        },
        '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
          fontSize: '12px',
          fontFamily: 'Roboto',
          color: 'primary.main',
          fontWeight: 400,
        },
        '& .MuiTablePagination-select': {
          fontSize: '12px',
          fontFamily: 'Roboto',
          color: 'primary.main',
        },
        '& .MuiTablePagination-selectIcon': {
          color: 'primary.main',
        },
        '& .MuiTablePagination-actions': {
          color: 'primary.main',
          '& .MuiIconButton-root': {
            color: 'primary.main',
          },
          '& .Mui-disabled': {
            opacity: 0.5,
          },
        },
        ...(typeof props.sx === 'object' ? props.sx : {}),
      }}
    />
  );
}

// Re-export remaining MUI components without modifications
export { TableFooter, TableSortLabel };

// Re-export types
export type { TableFooterProps, TablePaginationProps, TableSortLabelProps };