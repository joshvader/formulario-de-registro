
import React,{Fragment} from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
const Formulario = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (evento) => {
      console.log(evento);
      cambiarEstadoModal1(true);
    
    }

    const ShowModal = (evento) =>{
       cambiarEstadoModal1(true);
    }

    return (
        <Fragment>
            <div className="text-center">
            <form onSubmit={handleSubmit(onSubmit)} >
                <label className="d-block m-2">Nombre</label>
                <input  name="name" className=" col-6 my-2 m-2" placeholder="Nombre Completo"
                {...register("name", {
                    required: {
                        value: true,
                        message: "El campo es obligatorio, oh si"
                    }
                })}
                />
            <div>
            {errors.name && <span className="text-danger m-2">{errors.name.message}</span>}
            </div>
          
            

            <label className="d-block m-2">Pais</label>
            <select value="Pais"className="col-6  my-2 m-2" placeholder="Pais">
                    <option value="">Pais</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
            </select>

            <label className="d-block m-2">Dirección</label>
            <input  name="direccion" className="col-6 my-2 m-2" placeholder="Direccion"/>
                
            <text className="d-block m-2">Correo</text>
            <input 
                types="text"
                name="email"
                className="col-3 my-2 m-2"
                placeholder="Correo" 
                {...register("email", {
                    required: {
                      value: true,
                      message: "Necesitas este campo"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto"
                    }
                  })}
            />
            <div>
            {errors.email && <span className="text-danger m-2">{errors.email.message}</span>}
            </div>
            

            <label className="d-block m-2">Constraseña</label>
            <input 
                type="password"
                name="password"
                className="my-2 m-2 ph-center"
                placeholder="Contraseña"  
                {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es obligatorio"
                    },
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres"
                    }
                  })}
                />  
                <div>
                {errors.name && <span className="text-danger m-2">{errors.password.message}</span>}
                </div>
            
            
            <label className="d-block m-2">Reingresa la Constraseña</label>
            <input 
                type="password"
                name="password"
                className="my-2 m-2"
                placeholder="Confirmar Contraseña"    
            />
            
        <div class="container-fluid h-100 p-2"> 
    		<div class="row w-100 align-items-center">
    			<div class="col text-center">
    				<button class="btn regular-button" id="btn">Registrarse</button>
    			</div>	
    		</div>
    
    
    	</div>
                
            </form>
            </div>
            
        </Fragment>
    )
}

export default Formulario
