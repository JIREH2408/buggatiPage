import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserServices } from "./services/user.services";

export const Users = () => {

    const navigate = useNavigate();

    const [listUser, setListUser] = useState([])
    const [formulario, setFormulario] = useState(false)
    useEffect(() => {
        getData()
    }, [formulario]);

    const getData = async () => {
        const data = await UserServices.getAllDataUser();
        setListUser(data);
    }

    const handdleRegistrerUser = () => {
        navigate('/app/users/FormUsers');
    } 

        // FUNCION PARA ELIMINAR
    const handdleDelete = async (id)=>{
        console.log()
        const response = await UserServices.deleteUser(id)
        console.log(response)
        if(response.success){
            alert('Usuario Eliminado Exitosamente')
            getData()
                }else{
            alert('Error al eliminar el usuario')
        }
    }


    return (
        <>
        <div className="row">
          <div className="col-12 d-flex justify-content-end aling-items-end">
            <button onClick={handdleRegistrerUser} className='btn btn-primary'>Nuevo registro</button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Acciones</th>
                </tr>
                <tbody>
                    {listUser.map((element, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{element.fullname}</td>
                            <td>{element.email}</td>
                            <td>{element.company.name}</td>
                            <td>
                                <button onClick={()=>handdleDelete(element.id)} className="btn btn-danger">Eliminar</button>
                                <button className="btn btn-warning">Editar</button>
                            </td>
                      </tr>
                    ))}
                </tbody>
              </thead>
            </table>
          </div>
        </div>
  
      </>
    );
}