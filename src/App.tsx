import { useState } from 'react'
import Navbar from './components/Navbar'
import RequestsPage from './pages/RequestsPage'
import ClientsPage from './pages/ClientsPage'

function App() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && <RequestsPage />}
      {currentTab === 1 && <ClientsPage />}
    </>
  )
}

export default App
