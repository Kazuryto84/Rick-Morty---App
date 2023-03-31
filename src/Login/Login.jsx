import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    function handleChange(e){
    
    }
    return (
    <div>
        <form>
        <label>Email:</label>
        <input name="email" value={inputs.email} onChange={handleChange} placeholder="Escribe tu Email "></input>
        <p className="danger">{errors.email}</p>
        <label>Password:</label>
        <input name="password" value={inputs.email} onChange={handleChange} placeholder="Escribe tu Contrasena"></input>
        <p className="danger">{errors.email}</p>
        <Link to= "/home">
        <button>Ingresar</button>
        </Link>
        </form>
    </div>
  );
}
