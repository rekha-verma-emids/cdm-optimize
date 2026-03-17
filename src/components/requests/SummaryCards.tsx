import { Card, Typography } from "@mui/material"
import Stack from '@mui/material/Stack';

interface StatCard {
  title: string
  value: number
}

const stats: StatCard[] = [
  { title: "New Requests", value: 0 },
  { title: "In Progress", value: 0 },
  { title: "On Hold", value: 0 },
  { title: "Priority", value: 0 }
]

const SummaryCards = () => {
  return (
    <Stack spacing={2} direction="row" sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}>
      {stats.map((stat) => (
        <Card 
          key={stat.title}
          sx={{
            display: "flex",
            padding: "24px 24px 16px 24px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "4px",
            flex: "1 0 0",
            borderRadius: "4px",
            border: "1px solid #F3F4F6",
            backgroundColor: "#FFF",
            boxShadow: "none"
          }}
          >
            <Typography 
              sx={{ 
                color: "#061D53",
                fontFamily: "Roboto",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "22px",
                m: 0,
                p: 0
              }}
            >
              {stat.value}
            </Typography>

            <Typography 
              sx={{ 
                color: "#4A5B68",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
                m: 0,
                p: 0
              }}
            >
              {stat.title}
            </Typography>
          </Card>
      ))}
    </Stack>
  )
}

export default SummaryCards;