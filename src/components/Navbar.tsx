import {
    Box,
    Tabs,
    Tab,
    Select,
    MenuItem
} from "@mui/material"

interface NavbarProps {
    currentTab: number
    setCurrentTab: (value: number) => void
}

const Navbar = ({ currentTab, setCurrentTab }: NavbarProps) => {

    return (
        <Box
            sx={{
                background: "#f5f5f5",
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 4,
                py: 1,
                minHeight: 50
            }}
        >
            <Tabs
                value={currentTab}
                onChange={(_, v) => setCurrentTab(v)}
                sx={{
                    borderBottom: "none",
                    "& .MuiTabs-flexContainer": {
                        gap: "0"
                    },
                    "& .MuiTab-root": {
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 600,
                        minWidth: "auto",
                        color: "#6B7280",
                        display: "flex",
                        padding: "12px 24px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                        borderBottom: "2px solid transparent",
                        "&.Mui-selected": {
                            color: "#061D53",
                            borderBottom: "2px solid #061D53",
                            backgroundColor: "transparent"
                        }
                    },
                    "& .MuiTabs-indicator": {
                        display: "none"
                    }
                }}
            >
                <Tab label="Requests" />
                <Tab label="CDM" />
            </Tabs>

            <Select 
                size="small" 
                defaultValue="client"
                sx={{
                    minWidth: 150,
                    background: "#fff"
                }}
            >
                <MenuItem value="client">Client Name</MenuItem>
            </Select>
        </Box>
    )

}

export default Navbar;