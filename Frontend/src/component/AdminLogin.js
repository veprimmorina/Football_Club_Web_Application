import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

function AdminLogin() {
  

 var autentikimi=localStorage.getItem(3);
    function login(){
        var emriP=document.getElementById('username').value;
        var fjalkalimi=document.getElementById('password').value;
        var pergjigja="";
        localStorage.setItem(4, emriP);
       
        if(emriP=="veprimmorina"&&fjalkalimi==='veprim123'|| emriP=="kushtrimmorina"&&fjalkalimi==='kushtrim123'){
         
            localStorage.setItem(3, 'auth')
        }else{
            
           // window.location.href="http://localhost:3000/admin/login" 
        }

    }
  
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
       <div>
        <form>
            <div className='mt-4'>
         <label>Emri Perdoruesit</label>
         <input type="text" id='username'/>
         </div>
         <div className='mt-4'>
         <label>Fjalkalimi</label>
         <input type="password" id="password" className=''/>
         <div className='text-center'>
         <Link to={'/dashboard'}>
         <button type='submit' className='btn btn-success mt-3' onClick={()=>login()}>Kycu</button>
          
         </Link>
       
         </div>
         </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default AdminLogin