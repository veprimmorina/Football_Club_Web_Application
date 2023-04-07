import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './NdeshjaEFundit.css'



function NdeshjaFundit() {
  return (
    <div className='container pt-5 mt-5 pb-5 mb-5 text-light' id='ndeshja-fundit' >
   <h2>Ndeshja E Fundit</h2>
        <table>
          <thead>
            <tr>
              <th><img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/61/FC_Malisheva.svg/1200px-FC_Malisheva.svg.png' className='img-fluid h-50 w-50'/></th>
              <th><h1>2</h1></th>
              <th><h1>-</h1></th>
              <th><h1>1</h1></th>
              <th><img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/00/FC_Ballkani.svg/1200px-FC_Ballkani.svg.png' className='img-fluid h-50 w-50' /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td></td>
            <td className='text-dark'><i><img src='https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-19.png' className='img-fluid ' id="gola-fotografi"/> </i>  <b>Mergim Pefqeli 45'</b></td>
            <td></td>
            <td className='text-dark'><i><img src='https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-19.png' className='img-fluid' id="gola-fotografi"/> </i>   <b>    Albion Rrahman 32'</b></td>
            </tr>
            <tr>
              <td></td>
              <td className='text-dark'><i><img src='https://www.freeiconspng.com/thumbs/soccer-ball-png/soccer-ball-png-19.png' className='img-fluid ' id="gola-fotografi"/> </i>  <b>Mergim Pefqeli 45'</b></td>
            </tr>
            
          </tbody>
        </table>
    </div>
  )
}

export default NdeshjaFundit