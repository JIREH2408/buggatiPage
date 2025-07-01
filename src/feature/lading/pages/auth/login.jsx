import React, {useState} from "react";
import { Navbar } from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { AuhtLogin } from "./services/login.services";

export const Login = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleHome = () => {
        navigate('/')
    }

  const handleAcces = async (e) => {
    e.preventDefault()
    // try{
      const response = await AuhtLogin(userName, password)
      console.log(response)
    
      if(response.token){
        navigate ('/app/home')
      }else{
        alert('Credenciales Incorrecatas')
      }
    // } catch (error) {
      // console.error("Error credenciales", error);
      // alert('Credenciales incorrectas')
    // }
  };

  return (
    <>
    
      <div className="containerLogin">
        <button onClick={handleHome} className="botonInicio">Inicio</button>
        <div className="containerSecion">
          <h1>BUGGATI</h1>
          <form onSubmit={handleAcces}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Usuario</label>
              <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" placeholder="Email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Ingrese su contraseña"/>
            </div>
            <input type="submit" className="btn btn-primary" value="Iniciar Sesión" />
          </form>
        </div>
      </div>
    </>
  );
};
