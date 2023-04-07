import React, {useEffect, useState} from "react";
import LajmiService from '../services/LajmiService'
import { format } from 'date-fns'
import HederiAkademis from "./HederiAkademis";
import Foteri from "./Foteri";

function Njoftime() {
    const [count,setCount]= useState(0);
    const [njoftimet, setNjoftimet] = useState([])

    useEffect(()=>{
     LajmiService.merrNjoftimet().then((response)=>{
        setNjoftimet(response.data)
        console.log(response.data)
     }).catch(error=>{
        console.log(error);
     })
     
    }, [])
 var autorzimi=localStorage.getItem(2);
 if(autorzimi=='auth'){

 
  return (
    <div>
        <HederiAkademis />
    <div class="container-fluid">
    <div class="row justify-content-center">
        <div class=" col-lg-6 col-md-8">
            <div class="card p-3">
                <div class="row justify-content-center">
                    <div class="col-12 ">
                        <h2 class="heading text-center">Malisheva Akademi</h2>
                    </div>
                </div>

                <form onsubmit="event.preventDefault()" class="form-card">
                    <div className='text-primary ' id='first-slide'>
                    <div class="row justify-content-center form-group">
                        
                            <div class="custom-control custom-radio custom-control-inline text-center">  <label for="customRadioInline1" class="custom-control-label label-radio">Njoftimet</label> </div>
                     
                    </div>
                    <div class="row">
                        {
                            njoftimet.map(
                        
                                njoftimi=>
                              <div style={{border: "1px solid black", borderRadius: "5px", boxShadow: "2px 6px 8px 0 rgb(22 22 26 / 25%)"}} className="mb-4 mt-2 text-dark bg-light">
                            
                              <div className="d-flex">
                           <img className="avatar mt-1 mb-1 mt-auto mb-auto" src="https://previews.123rf.com/images/cpoungpeth/cpoungpeth1812/cpoungpeth181200006/117887401-back-view-of-swimming-coaches-wearing-coach-shirt-working-together-at-an-outdoor-swimming-pool.jpg" />
                           <div ><p>{njoftimi.trajneri}</p>
                              <p ><i class="bi bi-calendar-event-fill mr-2"></i>{njoftimi.data.toString()}</p>
                              <p className="pl-4"><i class="bi bi-alarm-fill mr-2"></i>{njoftimi.ora.toString("")}</p>
                              </div>
                              <div  style={{borderLeft: "1px solid grey"}} className="mt-auto mb-auto w-75"> <b style={{ borderBottom: "1x solid grey"}}>{njoftimi.pershkrimi}</b></div>
                              </div>
                             </div>   
                            )
                        }
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
                    }else{
                        return <p>Ju nuk jeni i autorizuar ti qaseni kesaj faqeje</p>
                    }
}

export default Njoftime