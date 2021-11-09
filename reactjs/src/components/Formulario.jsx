
import React,{Fragment} from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import Modal from './Modal'

const Formulario = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (evento) => {

      console.log(evento);
      /*Onclick al registrar*/
      cambiarEstadoModal1(true);
    
    }
  /*Mostrar ventana Modal*/ 
   const ShowModal = (evento) =>{
        cambiarEstadoModal1(true);
     }
   


    return (
        <Fragment>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label className="d-block m-4">Nombre</label>
                <input  name="name" className="my-2 m-4 form-control-sm" placeholder="Nombre Completo"
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
          
            

            <label className="d-block m-4">Pais</label>
            <select className="my-2 m-4" placeholder="Pais">

                    <option >Ecuador</option>
                    <option >Colombia</option>
                    <option >Argentina</option>
                    <option >Brasil</option>
                    <option>Chile</option>
            </select>

            <label className="d-block m-4">Dirección</label>
            <input  name="direccion" className="my-2 m-4 form-control-sm" placeholder="Direccion"/>
                
            <text className="d-block m-4">Correo</text>
            <input 
                types="text"
                name="email"
                className=" my-2 m-4 form-control-sm"
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
            

            <label className="d-block m-4">Constraseña</label>
            <input 
                type="password"
                name="password"
                className="  my-2 m-4  form-control-sm ph-center"
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
            
            
            <label className="d-block m-4">Reingresa la Constraseña</label>
            <input 
                type="password"
                name="password"
                className="  my-2 m-4 form-control-sm"
                placeholder="Confirmar Contraseña"    
            />
            
        <div class="container-fluid h-100 p-2"> 
    		<div class="row w-100 align-items-center">
    			<div class="col-4 my-2 m-5">
    				<button class="btn regular-button" id="btn" onclick= {ShowModal} >Registrarse</button>
    			</div>	
    		</div>
    
    
    	</div>
                
            </form>
            
            </div>
            <Modal
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
            titulo="¡Hola!"
            >
              <Contenido>
              <h1>¡Bienvenido!</h1>
                <p>Muchas gracias por tu Registro.</p>
              </Contenido>
                
            </Modal>
            
        </Fragment>
    )
}

export default Formulario

 
const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
