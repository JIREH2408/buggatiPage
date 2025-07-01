import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export function FormUsers() {

    const navigate = useNavigate();


    const[listRoles, setListRoles] = useState([])
    const[listCompanies, setListCompanies] = useState([])

    const handleBack = () => {
        navigate('/app/users');
    }

    const changeData = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <>
        <form>
        <button onClick={handleBack} button type="submit" className="btn btn-primary mb-3">Regresar</button>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="fullname"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="company" className="form-label">Empresa</label>
                <select type="text" className="form-control" id="company"/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Compañia</label>
                    <select onChange={changeData} name='companyId' class="form-select" aria-label="Default select example"/>
                        <option selected>Seleccione</option>
                        {listCompanies.map((element, index) => (
                            <option key={element.id} value={element.id}>{element.name}</option>
                        ))}
            </div>
            <div>
            <label for="exampleFormControlInput1" class="form-label">Rol</label>
                    <select onChange={changeData} name='roleId' class="form-select" aria-label="Default select example"/>
                        <option selected>Seleccione</option>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </>
    );
}