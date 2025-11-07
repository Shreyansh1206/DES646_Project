import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Upload from './pages/Upload'
import About from './pages/About'
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
