import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Analytic from './Pages/Analytic';
import Orders from './Pages/Orders';
import Wallet from './Pages/Wallet';
import Files from './Pages/Files';

function App() {
  return (
    <div className='dark'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navbar />}>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/analytics' element={<Analytic />} />
            <Route exact path='/orders' element={<Orders />} />
            <Route exact path='/wallet' element={<Wallet />} />
            <Route exact path='/files' element={<Files />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
