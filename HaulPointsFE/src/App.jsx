import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./Homepage/Pages/Homepage.jsx";
import Login from './users/Pages/LoginPage.jsx';
import Register from './users/Pages/RegisterPage.jsx';
import Ddashboard from './Driver/Pages/DriverPage.jsx';
import Adashboard from './Admin/Pages/AdminPage.jsx'
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
