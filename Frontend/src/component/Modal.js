import React from 'react'
import { Form } from 'react-bootstrap'
import LajmiService from '../services/LajmiService';
import './modal.css'
import $ from 'jquery';

function Modal(){
  return (
     <div className='d-none form-outline form-white' id='modal-form'>
        <Form>
            <Form.Group className='text-dark'>
            <Form.Label>Ulesja numër:</Form.Label>
            <Form.Control
            type="text"        
            required
            id='n'
            
            disabled>
                

            </Form.Control>
            <Form.Label>Emri:</Form.Label>
            <Form.Control
            type="text"
            placeholder='Emri'
            id='emri'
            required>
         
            </Form.Control>
            <p className='d-none text-danger' id='emri-label'></p>
            <Form.Label>Mbiemri:</Form.Label>
            <Form.Control
            type="text"
            placeholder='Mbiemri'
            id='mbiemri'
            required>

            </Form.Control>
            <p className='d-none text-danger' id='mbiemri-label'></p>
            <Form.Label>E-mail adresa:</Form.Label>
            <Form.Control
            type="text"
            placeholder='e-mail adresa *'
            id='email-adresa'
            required
            >

            </Form.Control>
            <Form.Label>Numri i telefonit:</Form.Label>
            <Form.Control
            type="text"
            placeholder='Numri i telefonit *'
            required>

            </Form.Control>
            </Form.Group>
         
            <a id="butoni-rezervimit" onClick={()=> merriTeDhenat()} className='btn btn-success mt-2 mb-2 text-white' target="_blank">Rezervo</a>
            <p id='teksti-rez'></p>
        </Form>
     </div>
  )
  function merriTeDhenat(){
   

    var numriUleses=document.getElementById('n').value;
    var emri=document.getElementById('emri').value;
    var mbiemri=document.getElementById('mbiemri').value;
    var emailadresa=document.getElementById('email-adresa').value;
    var emriMesazh=document.getElementById('emri-label');
    LajmiService.krijoRezervinPerBilete(numriUleses,emri,mbiemri,emailadresa)
    var butoniRezervimit=document.getElementById('butoni-rezervimit');
    var mbiemriMesazh=document.getElementById('mbiemri-label');
    var tekst=document.getElementById('teksti-rez');
    var unik=emri.substring(0,1)+mbiemri.substring(1,2)+Math.floor(Math.random() * 9999999999999999);
      butoniRezervimit.href="http://localhost:8080/api/stadiumi/export/PDF/"+unik+"/"+numriUleses+"/"+emri+"/"+mbiemri+"/"+emailadresa;   
      butoniRezervimit.classList.add('d-none')
      tekst.innerHTML="Rezervim i suksesshem";
      tekst.classList.add('text-success')
      
    }
  
  
}

export default Modal