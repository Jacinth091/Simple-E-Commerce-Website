import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='text-red-500'>Hello World</div>} />
        {/* <Route path="/about" element={} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
