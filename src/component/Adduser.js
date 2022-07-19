import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


export default function Adduser() {
    const Swal = require('sweetalert2')
    const history=useNavigate();
    const [user,setuser]=useState({
        name:"",
        avatar:"",
        email:"",
        contact:""
    })

    const {name,email,avatar,contact}=user
    const handlechange = (event) =>{
       setuser({...user,[event.target.name]:event.target.value})
    }
    const handlesubmit = (event) =>{
        event.preventDefault()
        if (!user.name || !user.avatar || !user.email || !user.contact ) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true,
              
            });
          }



        
       let obj=user
       let arr=JSON.parse(localStorage.getItem("User")) || [];
       arr.push(obj)
       localStorage.setItem("User",JSON.stringify(arr))
       setuser({
        name:"",
        avatar:"",
        email:"",
        contact:""
    })
    history("/")
    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${user.name}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });


    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={e => handlechange(e)} />
                </label>
                <label>
                    Ematl:
                    <input type="text" name="email" value={email} onChange={e => handlechange(e)} />
                </label>
                <label>
                    Avatar:
                    <input type="text" name="avatar" value={avatar} onChange={e => handlechange(e)} />
                </label>
                <label>
                    contact:
                    <input type="text" name="contact" value={contact} onChange={e => handlechange(e)} />
                </label>
              
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
} 
