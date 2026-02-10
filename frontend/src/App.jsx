import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavDropdown from './components/NavDropdown';
import AddReminderPage from './pages/AddReminderPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <NavDropdown />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/AddReminder" element={<AddReminderPage />} />
      </Routes>
    </Router>
  )
}

export default App
