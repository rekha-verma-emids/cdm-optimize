/**
 * PageHeader Component
 * Page header with optional breadcrumbs, title, and subtitle
 * Includes standard padding wrapper (40px horizontal, 24px vertical)
 */

import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  titleSuffix?: ReactNode;
  rightSlot?: ReactNode;
  noPadding?: boolean; // Optional: disable default padding
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  titleSuffix,
  rightSlot,
  noPadding = false,
}: PageHeaderProps) {
  return (
    <Box
      sx={{
        px: noPadding ? 0 : 5, // 40px
        py: noPadding ? 0 : 3, // 24px
        marginBottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1, // 8px
        }}
      >
        {/* Breadcrumbs (optional) */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <MuiBreadcrumbs
            separator="/"
            sx={{
              "& .MuiBreadcrumbs-separator": {
                color: "gray.600",
                fontSize: "16px",
              },
            }}
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const isFirst = index === 0;

              if (crumb.onClick) {
                return (
                  <MuiLink
                    key={index}
                    component="button"
                    onClick={crumb.onClick}
                    underline="hover"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5, // 4px
                      fontSize: "16px",
                      fontWeight: 400,
                      color: isLast ? "gray.800" : "gray.600",
                      cursor: isLast ? "default" : "pointer",
                      "&:hover": {
                        color: isLast
                          ? "gray.800"
                          : "primary.main",
                      },
                    }}
                  >
                    {isFirst && (
                      <KeyboardArrowLeftIcon
                        sx={{ fontSize: 24 }}
                      />
                    )}
                    {crumb.label}
                  </MuiLink>
                );
              }

              return (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5, // 4px
                    fontSize: "16px",
                    fontWeight: 400,
                    color: isLast ? "gray.800" : "gray.600",
                  }}
                >
                  {isFirst && (
                    <KeyboardArrowLeftIcon
                      sx={{ fontSize: 24 }}
                    />
                  )}
                  {crumb.label}
                </Box>
              );
            })}
          </MuiBreadcrumbs>
        )}

        {/* Title Row with optional right slot */}
        <Box
          sx={{
            display: "flex",
            justifyContent: rightSlot
              ? "space-between"
              : "flex-start",
            alignItems: "center",
          }}
        >
          {/* Title and Subtitle */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {/* Left: Title and Title Suffix */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "primary.main",
                  margin: 0,
                }}
              >
                {title}
              </Typography>
              {titleSuffix && titleSuffix}
            </Box>

            {/* Subtitle (optional) */}
            {subtitle && (
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "gray.800",
                  margin: 0,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          {/* Right: Action Slot */}
          {rightSlot && rightSlot}
        </Box>
      </Box>
    </Box>
  );
}