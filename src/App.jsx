import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import DestinationPage from './pages/destinations/DestinationPage'
import ActivityPage from './pages/activities/ActivityPage'
import Contact from './pages/about/Contact'
import OurStory from './pages/about/OurStory'
import StyleOfTravel from './pages/about/StyleOfTravel'
import Transfers from './pages/Transfers'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Destinations */}
          <Route path="destinations/:slug" element={<DestinationPage />} />
          
          {/* Activities */}
          <Route path="activities/:slug" element={<ActivityPage />} />
          
          {/* About */}
          <Route path="about/our-story" element={<OurStory />} />
          <Route path="about/style-of-travel" element={<StyleOfTravel />} />
          <Route path="about/contact" element={<Contact />} />
          
          {/* Transfers */}
          <Route path="transfers" element={<Transfers />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App