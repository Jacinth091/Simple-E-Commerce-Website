import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" element={<div>About</div>} /> 
          <Route path="/contact" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
