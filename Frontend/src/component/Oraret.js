import React, {useEffect, useState} from "react";
import LajmiService from '../services/LajmiService';
import $ from 'jquery';
import './Oraret.css';
import { format } from 'date-fns'
import './Akademia.css';
import HederiAkademis from "./HederiAkademis";
import Foteri from "./Foteri";

export default function Oraret() {
    
    
    const[oraret,setOraret]=useState([])

    useEffect(()=>{
     LajmiService.gjejOraret().then((response)=>{
       setOraret(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }, [])

    $("#U13").click(function(e){
        LajmiService.gjejOraretU13().then((response)=>{
            setOraret(response.data)
             console.log(response.data)
          });
    })
    
    $("#U11").click(function(e){
        LajmiService.gjejOraret().then((response)=>{
            setOraret(response.data)
             console.log(response.data)
          });
    })

    $("#U15").click(function(e){
        LajmiService.gjejOraretU15().then((response)=>{
            setOraret(response.data)
             console.log(response.data)
          });
    })
    $("#U17").click(function(e){
        LajmiService.gjejOraretU17().then((response)=>{
            setOraret(response.data)
             console.log(response.data)
          });
    })
    return (
    <div>
        <HederiAkademis />
    <div class="container-fluid">
    <div class="row justify-content-center">
        <div class=" col-lg-6 col-md-8">
            <div class="card p-3">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="heading text-center">Malisheva Akademi</h2>
                    </div>
                </div>
                <form onsubmit="event.preventDefault()" class="form-card">
                    <div class="row justify-content-center mb-4 radio-group">
                        <div class="col-sm-3 col-5" id="U11">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/306308120_2046668812197426_6505384141593400939_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=4ZaSVZps-TkAX_6WhyJ&tn=N4WyhM_pxd-Clz8x&_nc_ht=scontent.fprn7-1.fna&oh=00_AfBEORN0IUZy8reSd72s_VvXGjtejT_ZfvX-Wyxe-IqAgQ&oe=6372B2E2" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5" id="U13">
                            <div class='radio mx-auto' data-value="visa" > <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/306755962_2047491522115155_6552142934613554742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=cUySlteU2a0AX8E5-b6&_nc_ht=scontent.fprn7-1.fna&oh=00_AfDEhIdsQreopnewToE0cMcKa9li9teHM4eNqdXfjKV4GA&oe=63716032" width="105px" height="55px"/> </div>
                        </div>
                        
                        <div class="col-sm-3 col-5" id="U15">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/306740795_2047493072115000_7083493625206129358_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=qPZ0siiuc9gAX9EjQ0C&_nc_ht=scontent.fprn7-1.fna&oh=00_AfDJA-9F5BXlZW-SCJH4z43dPWJc3Smeof6X_w7cAPPUkg&oe=63730E8F" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5" id="U17">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/306529604_2047493775448263_6409442576933401626_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=CibG8DjHULEAX9TY9T6&_nc_ht=scontent.fprn7-1.fna&oh=00_AfCMlN3DBb3X1P694CRYC71Z1JLQCT3J3pwmsVAH-3nfmg&oe=63722DEA" width="105px" height="55px"/> </div>
                        </div> 
                    </div>
                    
                            <div class="custom-control custom-radio custom-control-inline text-center">  <label for="customRadioInline1" class="custom-control-label label-radio">Orari i stervitjeve</label> </div>
                       
                   <div className="d-flex">
                        {        
                            oraret.map(
                                orari=>
                                
                    <div class="row justify-content-center text-center" id={"grupi-"+orari.grupi}>
                                <h5>Grupi: {orari.grupi}</h5>
                                <p className=''><b>Data: </b> {format(orari.data, 'dd/MM/yyyy')}</p>   
                                <p className=''><b>Dita: </b> {orari.dita}</p>
                                <p className=''><b>Ora: </b>{orari.ora}</p>
                                <p className=''><b>Lokacioni: </b>{orari.lokacioni}</p> 
                                </div>
                            )
                        }
                     
                       </div>
                </form>
            </div>
        </div>
    </div>
</div>
<Foteri />
</div>
  )
}