import React, {useEffect, useState, useRef} from "react";
import LajmiService from '../services/LajmiService';
import './Akademia.css';
import $ from 'jquery';
import HederiSekondar from "./HederiSekondar";
import HederiAkademis from "./HederiAkademis";
import Foteri from "./Foteri";



export default function Akademia() { 

    
  function apliko(){
    var shkarkoButon=document.getElementById('shkarko-buton');
    var emriA=document.getElementById("e");
    var mbiemriA=document.getElementById("m");
    var moshaA=document.getElementById("mo");
    var pozitaA=document.getElementById('p');
    var kodi=document.getElementById('kodi').value;
    var emaili=document.getElementById('emaili').value;
    var butoniApliko=document.getElementById('a');
    var shkarko=document.getElementById('shkarko');
    var teksti=document.getElementById('sukses-text');
    var aplikimet={
      emri: emriA.value,
      mbiemri: mbiemriA.value,
      mosha: moshaA.value,
      pozita: pozitaA.value
    }
    LajmiService.verifikoKodin(kodi,emaili);
    emriA.disabled=true;
    mbiemriA.disabled=true;
    moshaA.disabled=true;
    pozitaA.disabled=true;
   
    var isTrue;
    $.ajax({
        url: "http://localhost:8080/api/aplikimet/merr/sakt/"+kodi,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            isTrue = JSON.parse(JSON.stringify(data));
             if(isTrue==true){
              LajmiService.shtoAplikimin(aplikimet);
              shkarkoButon.classList.remove('d-none');
              shkarko.href="http://localhost:8080/api/aplikimet/export/PDF/aplikimin/"+aplikimet.emri+"/"+aplikimet.mbiemri+"/"+aplikimet.mosha+"/"+aplikimet.pozita;
              butoniApliko.disabled = true;
              butoniApliko.classList.add("d-none");
              teksti.innerHTML="Kodi i dhene sakte. Ju keni aplikuar me sukses per "+aplikimet.emri+" "+aplikimet.mbiemri+". Me poshte mund te shkarkoni aplikimin e berë. Ju Faleminderit!";
              teksti.classList.add("text-success")
              teksti.classList.remove("text-danger")

          }else{
            teksti.innerHTML="Kodi i dhene gabim!";      
            teksti.classList.add("text-danger")
               }
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });
    
}

  function vazhdo(){
    var emaili=document.getElementById('emaili').value;
    var teksti=document.getElementById('sukses-text');
    $.ajax({
        url: "http://localhost:8080/api/aplikimet/gjej/email/"+emaili,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        //data: JSON.stringify(user),
        success: function (data) {
            var isTrue = JSON.parse(JSON.stringify(data));
             if(isTrue==true){
                teksti.innerHTML="Ekziston nje aplikues me kete email. Ju lutem zgjedhni nje email adres tjeter";      
                teksti.classList.add("text-danger");

          }else{
            teksti.innerHTML="";
            var firstSlide=document.getElementById('first-slide');
            var secondSlide=document.getElementById('second');
            var vazhdo=document.getElementById('vazhdo');
            var butoniApliko=document.getElementById('a');
            butoniApliko.classList.remove('d-none');
            firstSlide.classList.add('d-none');
            secondSlide.classList.remove('d-none');
            vazhdo.classList.add('d-none');
            var emaili=document.getElementById('emaili').value;
            LajmiService.dergoKodin(emaili);  
               }
        },
        error: function (request, status, error) {
            console.log(error);
            console.log(status);
        },
    });

   
};

  function prapa(){
    var firstSlide=document.getElementById('first-slide');
    var secondSlide=document.getElementById('second');
    var prapa=document.getElementById('prapa');
    firstSlide.classList.remove('d-none');
    secondSlide.classList.add('d-none');
    prapa.classList.add('d-none');
  }
    return (
        
    <div >
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
                        <div class="col-sm-3 col-5">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-4.png" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/305830472_2042759765921664_3618077956763490066_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=aHN-WQi-v1oAX8nCTkN&tn=N4WyhM_pxd-Clz8x&_nc_ht=scontent.fprn7-1.fna&oh=00_AfCYyTJSAEX2I46edZmM20M3uczCEoeLeXkXjsIyiHQr8g&oe=6372B329" width="105px" height="55px"/> </div>
                        </div>
                        
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/302161100_2035516686645972_6932110223969249365_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=veWHcroaRz4AX9DNTou&_nc_ht=scontent.fprn7-1.fna&oh=00_AfB5-n3qgRW2UJQJWPPdHPp3PSOdHHN8BpnqlIixO6GhCA&oe=6373306C" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-3 col-5">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/305018352_2039707826226858_6780150966098934980_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=BoJvtrRSZtgAX_GrEFt&tn=N4WyhM_pxd-Clz8x&_nc_ht=scontent.fprn7-1.fna&oh=00_AfASum0KsFfqtuR0dNqZLE3De6I-ucJW_8fgIIrgryB-hQ&oe=6371A493" width="105px" height="55px"/> </div>
                        </div> 
                    </div>
                    <div className='text-primary ' id='first-slide'>
                    <div class="row justify-content-center form-group text-center">
                        <div class="col-12 px-auto">
                            <div class="custom-control custom-radio custom-control-inline">  <label for="customRadioInline1" class="custom-control-label label-radio">Apliko per Malisheva Akademi</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="input-group"> <input type="text" name="Name" id="e" placeholder=""/> <label>Emri</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="input-group"> <input type="text" id="m" name="card-no" placeholder=""/> <label>Mbiemri</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="input-group"> <input type="text" id="emaili" name="card-no" placeholder=""/> <label>E-mail</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group"> <input type="text" id="mo" name="expdate" placeholder="" /> <label>Mosha</label> </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group"> <input type="text" name="" id='p' placeholder=""/> <label>Pozita</label> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='d-none' id='second'>
                    <div class="row justify-content-center form-group">
                        <div class="col-12 px-auto text-center">
                            <div class="custom-control custom-radio custom-control-inline">  <label for="customRadioInline1" class="custom-control-label label-radio">Sheno kodin e derguar ne e-mailin tuaj</label> </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="input-group"> <input type="text" name="Name" id="kodi" placeholder=""/> <label>Kodi</label> </div>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center"><a className='text-primary mr-4 d-none' id='prapa' onClick={()=> prapa()}>Kthehu prapa</a><a id='vazhdo' className='text-white btn btn-primary' style={{width:"100%"}} onClick={()=>vazhdo()}>Vazhdo</a> <input class="btn btn-pay placeicon d-none" id="a"  onClick={()=>apliko()} value="Apliko" /> 
                        <p className='text-success' id='sukses-text'></p>
                        <button className='btn btn-dark d-none' id='shkarko-buton'><i className="bi bi-download mr-2"></i><a id='shkarko'>Shkarko Aplikimin</a></button>
                         </div>
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
