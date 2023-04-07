import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
  
    const [users, setUsers] = useState();
  
    useEffect(()=> {
        let isMounted=true;
        const controller = new AbortController();

        const getUsers = async()=>{
            try{
             const response = await axios.get('/users', {
                signal: controller.signal
             });
             console.log(response.data);
             isMounted && setUsers(response.data)
            }catch(err){
              console.log(err)
            }
        }
        getUsers();

        return () =>{
            isMounted= false;
            controller.abort();
        }
    },[])
    return (
    <article>
          {
            users?.length
            ?(
                <ul>
                    {users.map((user,i)=> <li key={i}>{
                    user?.username
                    }</li>)} 
                </ul>
            ) : <p>No</p>
          }
        </article>
  )
}

export default Users