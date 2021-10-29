import React from 'react'
import { Formik} from 'formik'

const Formulario_2 = () => {
    return (
        <>
         <Formik
         initialValues= {{
             nombre: '' ,
             correo:''
         }}
            onSubmit={(valores)=>{
                console.log(valores);
                console.log('Formulario Enviado');
            }}
         >
             {( {values, handleSubmit, handleChange,handleBlur} )=> (
                 <form className="formulario" onSubmit={handleSubmit}>
                 <div className="text-center">
                     <label  className="d-block m-2" htmlFor="nombre">Nomnbre</label>
                     <input  className="col-6 m-2" 
                     type="text"  
                     id="nombre"
                     name="nombre" 
                     placeholder="Joe Doe" 
                     value={values.nombre}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     />
                 </div>
                 <div className="text-center">
                     <label className="d-block m-2"  htmlFor="correo">Correo</label>
                     <input  className="col-6 m-2" 
                     type="text" 
                     id="correo" 
                     name="nombre" 
                     placeholder="correo@correo.com" 
                     value={values.correo}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     
                     />
                 </div>
                 <div className="text-center">
                 <button className="btn regular-button btn-primary"type="submit">Enviar</button>
                 </div>
                 
        </form>  
             )}
         </Formik>
         
        </>
    )
}

export default Formulario_2
