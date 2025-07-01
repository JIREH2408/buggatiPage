import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AiFillHdd } from "react-icons/ai";
import { AiFillFund } from "react-icons/ai";


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="
                https://static.vecteezy.com/system/resources/previews/020/499/795/non_2x/bugatti-brand-logo-symbol-white-design-french-cars-automobile-illustration-with-black-background-free-vector.jpg" alt="" className='img-fluid' />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/app/home" className='link'><IoMdHome /> Inicio</Link></li>
                    <li><Link to="/app/users" className='link'><AiOutlineUser /> Usuarios</Link></li>
                    <li><Link to="/app/services" className='link'><AiFillHdd /> Servicios</Link></li>
                    <li><Link to="/app/companies" className='link'><AiFillFund /> Compañias</Link></li>
                    {/* <li><Link to="/app/home" className='link'>Categorias</Link></li> */}
                    <li><Link to="/login" className='link'><BiLogOut /> Salir</Link></li>
                </ul>
            </div>
        </div>
    )
}