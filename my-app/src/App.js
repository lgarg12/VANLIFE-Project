import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import Sign from './Pages/Sign';
import Description from './Pages/Description';
import About from './Pages/About';
import Layout from './Components/Layout';
import Host from './Pages/Host/Host';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Review from './Pages/Host/Review';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail from './Vans/HostVanDetail';
import HostVansD from './Vans/HostVansD';
import HostVansPrice from './Vans/HostVansPrice';
import HostVansPhoto from './Vans/HostVansPhoto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Vans" element={<Vans/>}/>
          <Route path="/Sign" element={<Sign/>}/>
          <Route path="/Description/:VanId" element={<Description/>}/>
          <Route path="/Host" element={<Host/>}>
            <Route path="/Host/Dashboard" element={<Dashboard/>}/>
            <Route path="/Host/HostVans" element={<HostVans/>}/>
            <Route path="/Host/Income" element={<Income/>}/>
            <Route path="/Host/Review" element={<Review/>}/>
            <Route path="/Host/HostVans/:VanId" element={<HostVanDetail/>}>
                <Route path="/Host/HostVans/:VanId/Details" element={<HostVansD/>}/>
                <Route path="/Host/HostVans/:VanId/Pricing" element={<HostVansPrice/>}/>
                <Route path="/Host/HostVans/:VanId/Photos" element={<HostVansPhoto/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
