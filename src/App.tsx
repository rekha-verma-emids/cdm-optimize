import { useState } from 'react'
import Navbar from './components/Navbar'
import RequestsPage from './pages/RequestsPage'
import ClientsPage from './pages/ClientsPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { muiTheme } from './config/theme'

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && <RequestsPage />}
      {currentTab === 1 && <ClientsPage />}
    </ThemeProvider>
  )
}

export default App
