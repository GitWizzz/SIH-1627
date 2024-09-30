
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoginPage from './components/loginPage';
import LoginForm from './components/loginForm';
import Footer from './components/footer';
import BookAppointment from './components/BookAppointment';
import BedAvability from './components/BedAvability';
import Medi from './components/Medi';
import DataAnalytics from './components/DataAnalytics';
import Map from './components/Map';
import Dashboard from './components/DashBoard';


function Layout() {
  const location = useLocation();
  
  const hideNavBarAndFooter = location.pathname === '/login' || location.pathname === '/data' || location.pathname === '/dashboard' || location.pathname === '/map';
  const hideNavBarAndFooter1 = location.pathname === '/login'|| location.pathname === '/dashboard' || location.pathname === '/map';
  
  return (
    <div>
      
           {!hideNavBarAndFooter1 && <NavBar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/bed" element={<BedAvability />} />
        <Route path="/medi" element={<Medi />} />
        <Route path="/data" element={<DataAnalytics />} />
        <Route path="/map" element={<Map/>} />
      </Routes>
      
      
      {!hideNavBarAndFooter && <Footer />}

      
      
    </div>
  );
} 

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
