import React from 'react';
import './Style/Navebar.css';
import { Link } from 'react-router-dom';

export default function Navebar() {
    return (
        <div>
            <section className='nav'>
                <div>
                <div className="logo_img">
               
                ContactList  
                </div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                        </li>
                    <li>
                    <Link to="/about">About</Link>
                        </li>
                    <li>
                    <Link to="/"> Favourite</Link>
                       </li>
                </ul>
                <button className="addUser">
                    <Link to="add">Add user  </Link>
                </button>
                </div>
            </section>
        </div>
    )
}
