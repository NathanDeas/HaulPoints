import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./features/homepage/pages/Homepage.jsx";
import Login from './features/auth/pages/LoginPage.jsx';
import Register from './features/auth/pages/RegisterPage.jsx';
import Ddashboard from './features/driverDashboard/pages/DriverPage.jsx';
import Adashboard from './features/adminDashboard/pages/AdminPage.jsx'
import "./app.css";

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ddashboard" element={<Ddashboard />} />
        <Route path="/adashboard" element={<Adashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
