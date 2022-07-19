import React, { useContext } from 'react'
import { Appcontext } from './Context/AppContext';
import "./Style/Home.css"

export default function Home() {
    let obj = JSON.parse(localStorage.getItem("User")) || [
        {
            name: "",
            avatar: "",
            email: "",
            contact: "",
            id:"1"
        }]

        obj.forEach((obj, i) => {
            obj.id = i + 1;
          });
          console.log(obj)

    const a =useContext(Appcontext)   
    const handleDelete = (id) => {
           
    }

    return (
        <div className='contact-table'>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name </th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>



                    {obj.map(function (el) {
                        return (
                            <tr key={el.id}>
                            <td>{el.avatar}</td>
                            <td>{el.name} {el.id}</td>
                            <td>{el.contact}</td>
                            <td>{el.email}</td>
                            <td><i onClick={() => handleDelete(el.id)} class="fa-regular fa-trash-can"></i> <i class="fa-solid fa-user-pen"></i></td>
                        </tr>
                        )
                       
                    })}
                </tbody>


            </table>
        </div>
    )
}
