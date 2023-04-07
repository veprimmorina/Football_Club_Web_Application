import React, { useEffect, useState } from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import './Sidebar.css'
import TabelaLojtareveDash from './TabelaLojtareveDash';
import LajmetDash from './LajmetDash';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid  } from 'recharts';
import axios from 'axios';
import TabelaSuperLigesDashboard from './TabelaSuperLigesDashboard';
import UlsjaDash from './UlsjaDash';
import AkademiaDash from './AkademiaDash';
import SponzoretDash from './SponzoretDash';
import Ndeshjet from './Ndeshjet';



function SideBar() {

  

  var autentikimi=localStorage.getItem(3);
  var statistika=document.getElementById('stats');

  const [aplikuesit, setAplikuesit]=useState({});
  const [regjistruar, setRegjistruar]=useState({});
  const [aplikuesitSot, setAplikuesitSot]=useState({});
  const [rezervimet, setRezervimet]=useState({});
  const [numriFutbollisteve, setNumriFutbollistve]=useState({});
  const [show, setShow] = useState(false);
  const [showLajme, setShowLajme] = useState(false);
  const [showStatistika, setShowStatistika] = useState(false);
  const [showUlset, setShowUlset] = useState(false);
  const [showAplikimet, setShowAplikimet]= useState(false);
  const [showSponzoret, setShowSponzoret]=useState(false);
  const [showNdeshjet, setShowNdeshjet]=useState(false);
  const [clasname, setClassName] = useState("")
  const [showNumriRezervimeve, setNumriRezervimeve]=useState(false);
  const [showAll, setShowAll]=useState(true);
  useEffect(()=>{
    axios.get("http://localhost:8080/api/aplikimet/numri/aplikuesve")
    .then(response=>{setAplikuesit(response.data)}
  )});

  useEffect(()=>{
    axios.get("http://localhost:8080/api/aplikimet/numri/regjistruar")
    .then(response=>{setRegjistruar(response.data)}
  )});
  useEffect(()=>{
    axios.get("http://localhost:8080/api/aplikimet/numri/aplikuesve/sot")
    .then(response=>{setAplikuesitSot(response.data)}
  )});
  useEffect(()=>{
    axios.get("http://localhost:8080/api/stadiumi/numri/rezervimeve")
    .then(response=>{setRezervimet(response.data)}
  )});
  useEffect(()=>{
  axios.get("http://localhost:8080/api/stadiumi/merr/rezervimet/numri")
  .then(response=>{setNumriRezervimeve(response.data)}
  )})
  useEffect(()=>{
    axios.get("http://localhost:8080/api/futbollistet/merr/numri/futbollisteve")
    .then(response=>{setNumriFutbollistve(response.data)}
    )})
 

function showStatistikat(){
  setShowStatistika(true);
  setShowAplikimet(false);
  setShowLajme(false);
  setShowNdeshjet(false);
  setShowSponzoret(false);
  setShowUlset(false);
  setShow(false);
  setClassName('invisible')
}

function showUlse(){
  setShowStatistika(false);
  setShowAplikimet(false);
  setShowLajme(false);
  setShowNdeshjet(false);
  setShowSponzoret(false);
  setShowUlset(true);
  setShow(false);
  setClassName('invisible')

}
function showSponzor(){
  setShowStatistika(false);
  setShowAplikimet(false);
  setShowLajme(false);
  setShowNdeshjet(false);
  setShowSponzoret(true);
  setShowUlset(false);
  setShow(false);
  setClassName('invisible')

}
function showLajmet(){
  setShowStatistika(false);
  setShowAplikimet(false);
  setShowLajme(true);
  setShowNdeshjet(false);
  setShowSponzoret(false);
  setShowUlset(false);
  setShow(false);
  setClassName('invisible')

}
function showNdeshje(){
  setShowStatistika(false);
  setShowAplikimet(false);
  setShowLajme(false);
  setShowNdeshjet(true);
  setShowSponzoret(false);
  setShowUlset(false);
  setShow(false);
  setClassName('invisible')

}
function showAplikime(){
  setShowStatistika(false);
  setShowAplikimet(true);
  setShowLajme(false);
  setShowNdeshjet(false);
  setShowSponzoret(false);
  setShowUlset(false);
  setShow(false);
  setClassName('invisible')

}
function setSho(){
  setShow(true);
  setShowStatistika(false);
  setShowAplikimet(false);
  setShowLajme(false);
  setShowNdeshjet(false);
  setShowSponzoret(false);
  setShowUlset(false);

}
    const data = [
      {name: "Aplikues", value: aplikuesit},
      {name: "Te regjistruar", value: regjistruar-3},
      {name: "Rezervime", value: rezervimet},
    ]

    const data1 = [
      {name: "Aplikues", uv: 100, pv: aplikuesit, amt: 2290},
      {name: "Aplikues sot", uv: 100, pv: aplikuesitSot, amt: 2290},
      {name: "Te Regjistruar", uv: 100, pv: regjistruar-3, amt: 2290},
      {name: "Rezervime", uv: 100, pv: rezervimet, amt: 2290},
    ]
    function logOut(){
      window.location.href="http://localhost:3000"
    }
    if(autentikimi=='auth'){
    return (
      <div className='d-flex'>
   <div className="d-flex text-light">
    <div className="text-white " style={{borderRight: "2px solid grey", backgroundColor: "#2A3F54"}}>
       <div className="logo-and-name" style={{marginLeft: "20px", paddingLeft: "20px"}}>
          <div className="">
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FC_Malisheva.svg/1200px-FC_Malisheva.svg.png' style={{width: "50px"}} alt='' />
            <h2 className='text-white mt-3'>KF Malisheva</h2>
          </div>
       </div>
       <div >
       <ul className='mt-2 dash-list'>
        <li className='h2 text-primary text-white' style={{borderTop: "3px solid black"}}><a  onClick={()=> setSho()}><i class="bi bi-table mr-2"></i>Tabela</a></li>
        <li className='h2 text-primary text-white'><a onClick={()=> showStatistikat()}><i class="bi bi-graph-up mr-2 "></i>Statistikat</a></li>
        <li className='h2 text-primary text-white'><a onClick={()=> showUlse()}><i class="bi bi-grip-horizontal mr-2"></i>Ulset</a></li>
        <li className='h2 text-primary text-white'><a onClick={()=> showSponzor()}><i class="bi bi-collection mr-2"></i>Sponzoret</a></li>
        <li className='h2 text-primary text-white'><a  onClick={()=> showLajmet()}><i class="bi bi-newspaper mr-2"></i>Lajme</a></li>
        <li className='h2 text-primary text-white'><a onClick={()=> showNdeshje()}><i class="bi bi-layout-text-sidebar mr-2"></i>Ndeshjet</a></li>
        <li className='h2 text-primary text-white'><a onClick={()=> showAplikime()}><i class="bi bi-clipboard2-check-fill mr-2"></i>Aplikimet</a></li>
        <li className='h2 text-primary text-white'><a className='text-white' href='http://localhost:3000/shtoNjoftime'><i class="bi bi-bell-fill mr-2"></i>Njoftime</a></li>

       
       </ul>

       </div>
    </div>
    {
    
    <div>
    <div className='d-flex justify-content-between ' style={{backgroundColor: "#2A3F54"}}><h2 className='text-white'>Admin dashboard</h2><h2 className='text-white'>{"Miresevini. Kycur si: "+localStorage.getItem(4)}</h2><button className='btn btn-danger' onClick={()=> logOut()}>Log out</button></div>
      <div className=''>
        {
          show   && <TabelaSuperLigesDashboard /> 
          
        }
        {
          showLajme  &&  <LajmetDash /> 
        }
        {
          showStatistika && <TabelaLojtareveDash />
        }
        {
          showUlset && <UlsjaDash />
        }
       {
        showAplikimet && <AkademiaDash />  
       }
       {
        showSponzoret && <SponzoretDash />
       }
       {
        showNdeshjet && <Ndeshjet />
       }
       <div className={clasname}>
       <div style={{paddingLeft: "10px"}}>
          <div className='row' id='stats'>
           <div className='col card'>
            <div className='card-body text-center text-dark'>
            <h1><i class="bi bi-person-video2"></i></h1>
            <h5 className='card-title'>Stafi dhe lojtaret</h5>
            <h5 className='card-text mt-2'>{""+numriFutbollisteve}</h5>

            </div>
           </div>
           <div className='col card bg-secondary '>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-clipboard2-data"></i></h1>
            <h5 className='card-title'>Aplikimet</h5>
            <h5 className='card-text mt-2'>{""+aplikuesit}</h5>
            
            </div>
           </div>
           <div className='col card bg-primary'>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-clipboard2-check-fill"></i></h1>
            <h5 className='card-title'>Aplikime sot</h5>
            <h5 className='card-text mt-2'>{""+aplikuesitSot}</h5>
            
            </div>
           </div>
           <div className='col card bg-danger'>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-people-fill"></i></h1>
            <h5 className='card-title'>Te regjistruar</h5>
            <h5 className='card-text mt-2'>{""+regjistruar}</h5>
            
            </div>
           </div>
           <div className='col card bg-success'>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-card-checklist"></i></h1>
            <h5 className='card-title'>Rezervime</h5>
            <h5 className='card-text mt-2'>{""+rezervimet}</h5>
            
            </div>
           </div>
           <div className='col card bg-warning'>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-check-square-fill"></i></h1>
            <h5 className='card-title'>Ulset e rezervuara</h5>
            <h5 className='card-text mt-2'>{""+showNumriRezervimeve}</h5>
            </div>
           </div>
           <div className='col card bg-info'>
            <div className='card-body text-center text-dark'>
              <h1><i class="bi bi-person-circle"></i></h1>
            <h5 className='card-title'>Admin</h5>
            <h5 className='card-text mt-2'>3</h5>
            </div>
           </div>
          </div>
          </div>   
          <div className="d-flex" style={{borderTop: "2px solid grey"}}><h3>Statistikat</h3>
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        
        
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          className="mt-5 " 
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      
   
          </div>
    
      </div>
     </div>
     </div>
    }
   </div>
   </div>
        
        )
        
        }else{
          return(
          <p>Ju nuk jeni i autorzuar per tu casur ne kete faqe</p>
          )
        }
}

export default SideBar