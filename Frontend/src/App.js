import logo from './logo.svg';
import './App.css';
import Lajmet from './component/Lajmet';
import Statistikat from './component/Statistikat';
import Futbollistet from './component/Futbollistet';
import Slideri from './component/Slideri';
import TabelaStatistikave from './component/TabelaStatistikave';
import StadiumiInfo from './component/StadiumiInfo';
import Partneret from './component/Partneret';
import NdeshjaFundit from './component/NdeshjaFundit';
import TabelaSuperLiges from './component/TabelaSuperLiges';
import Historia from './component/Historia';
import Hederi from './component/Hederi';
import LajmetCard from './component/LajmetCard';
import NdeshjaEFunditStadium from './component/NdeshjaEFunditStadium';
import Carda from './component/Carda';
import Foteri from './component/Foteri';
import LajmId from './LajmiId';
import LajmetId from './component/LajmetId';
import TabelaLojtareveDash from './component/TabelaLojtareveDash';
import UlsjaDash from './component/UlsjaDash';
import LajmetDash from './component/LajmetDash';
import LajmetPage from './LajmetPage';
import TeGjithaLajmet from './component/TeGjithaLajmet';
import SideBar from './component/SideBar';
import Akademia from './component/Akademia';
import AkademiaDash from './component/AkademiaDash';
import Oraret from './component/Oraret';
import Njoftime from './component/Njoftime';
import ShtoNjoftime from './component/ShtoNjoftime';
import LogIn from './component/LogIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import FaqjaKryesore from './component/FaqjaKryesore';
import AdminLogin from './component/AdminLogin';
import GjithaLajmet from './component/GjithaLajmet';
import { LoginTest } from './component/LogInTest';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FaqjaKryesore />}></Route>
        <Route path="/dashboard" element={<SideBar />}></Route>
        <Route path="/akademia" element={<Akademia />}></Route>
        <Route path="/orari" element={<Oraret />}></Route>
        <Route path="/njoftimet" element={<Njoftime />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/shtoNjoftime" element={<ShtoNjoftime />}></Route>
        <Route path="*" element={<FaqjaKryesore />}></Route>
        <Route path="/lajmet" element={<TeGjithaLajmet />}></Route>
        <Route path="/ulset" element={<UlsjaDash />}></Route>
        <Route path="/dashboard/akademia" element={<AkademiaDash />}></Route>
        <Route path="/lajm/:id" element={<LajmetId />}></Route>
        <Route path='/admin/login' element={<AdminLogin />}></Route>
        <Route path='/gjitha/lajmet' element={<GjithaLajmet />}></Route> 
        <Route path="/lajmet/:id" element={<LajmetId />}></Route>
        <Route path="login/test" element={<LoginTest />}></Route>
      </Routes>
    </BrowserRouter>    
  );
}


export default App;
