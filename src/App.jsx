import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
