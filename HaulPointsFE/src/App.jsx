import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./Homepage.jsx"
import Login from './users/Pages/LoginPage.jsx';
import Register from './users/Pages/RegisterPage.jsx';
import "./app.css"

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
