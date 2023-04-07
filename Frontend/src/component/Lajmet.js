import React, {useEffect, useState} from "react";
import LajmiService from "../services/LajmiService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons';
import './Lajmet.css'
import './images/fusha.jpg'
import Modal from "./Modal";
import './images/malistadium.png'
const Lajmet = () => {
    const [lajmes, setLajmi] = useState([])

    useEffect(()=>{
     LajmiService.getLajmet().then((response)=>{
        setLajmi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
     
    }, [])

    function gjejNdeshjen(){

    
     LajmiService.gjejNdeshjenEFundit().then((response)=>{
        setLajmi(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
    }
   
  
   
   let classes="col w-25 lead  mx-1 my-1 border border-dark id-";
  
   function rezervoUlesen(ulesja){

    var ulesjaId=ulesja.id;
    var ulesjaELire=ulesja.eLire;
    var mesazhi=document.getElementById("rezervim-i-pamundur");
    var modali=document.getElementById("modal-form");
    var modaliId=document.getElementById("n");
    if(ulesjaELire!=1){
         mesazhi.classList.remove("d-none");
         modali.classList.add("d-none")
         mesazhi.innerHTML="Ulesja numër "+ulesjaId+" nuk eshte e lire per rezervim";
    }else{
        mesazhi.classList.add("d-none")
        modali.classList.remove("d-none")
        modaliId.value=ulesja.id;
        
    }
   }
   
    return(
        
        <div className="container h-100 d-flex mt-5 " id="fade"> 
    
            <div className="row" >
            <div className=""></div>
           
            <p id="rezervim-i-pamundur" className="d-none text-danger"></p>
            <a className="d-none" id="bileta-pdf">Kliko</a>
            
            <Modal/>    
            {
                lajmes.map(
                    lajm=>
                    <div  onClick={()=> rezervoUlesen(lajm)} id={"ulesja"} className={classes+lajm.id}><p className={lajm.eLire==1 ? "d-none" : "mt-4 "} id="e-rezervuar">E Rezervuar</p><div id="pershkrimi" className={lajm.eLire==1 ? "ml-2 mt-3" : "d-none"}>{'\n'+lajm.id+'\n'}<b><br/>Cmimi: </b>{lajm.cmimi} <b>€</b></div>          
                    </div>
                    ) 
            }
            <div className="my-1"><img className="w-100" src="https://scontent.fprn7-1.fna.fbcdn.net/v/t39.30808-6/301156988_2032153066982334_7744918064547608869_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=v1m9nTR-MhAAX_p3t-A&_nc_ht=scontent.fprn7-1.fna&oh=00_AfC3xyvoCs8vAq_88mbWRn6pPWNYh50dQE1F3TNMNRzvUQ&oe=6371F2AF"/></div>
            </div>
        </div>
    )

}

export default Lajmet