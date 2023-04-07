import React from 'react'
import Akademia from './Akademia'
import AkademiaDash from './AkademiaDash'
import Carda from './Carda'
import Foteri from './Foteri'
import GjithaLajmet from './GjithaLajmet'
import Hederi from './Hederi'
import Historia from './Historia'
import Lajmet from './Lajmet'
import LajmetCard from './LajmetCard'
import LajmetDash from './LajmetDash'
import LajmetId from './LajmetId'
import LogIn from './LogIn'
import NdeshjaEFunditStadium from './NdeshjaEFunditStadium'
import NdeshjaFundit from './NdeshjaFundit'
import Njoftime from './Njoftime'
import Oraret from './Oraret'
import Partneret from './Partneret'
import ShtoNjoftime from './ShtoNjoftime'
import SideBar from './SideBar'
import Slideri from './Slideri'
import TabelaLojtareveDash from './TabelaLojtareveDash'
import TabelaStatistikave from './TabelaStatistikave'
import TabelaSuperLiges from './TabelaSuperLiges'
import TeGjithaLajmet from './TeGjithaLajmet'
import UlsjaDash from './UlsjaDash'

function FaqjaKryesore() {
  localStorage.setItem(2, 'unauth')
  localStorage.setItem(3, 'unauth')
  return (
    <div className="App">
    <Hederi />
    <Carda />
    <Historia />
    <NdeshjaEFunditStadium/>
    <Lajmet />
    <Slideri />
   <TabelaStatistikave />
   <LajmetCard />
   <NdeshjaFundit />
   <TabelaSuperLiges />
   <Partneret />
   <Foteri />
  
  
   <div style={{overflow: 'auto'}}>
  
   </div>
  
   </div>
  )
}

export default FaqjaKryesore