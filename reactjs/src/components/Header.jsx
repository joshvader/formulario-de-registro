import React from 'react'
import codealo from '../components/img/codealo.png'
const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img className ="img-fluid" src={codealo} />
            </div>
            <h2 className="m-5 text-center">¡Bienvenidos!</h2>
            <h3 className="text-center">Por favor completa el siguiente formulario</h3>
        </div>
    )
}

export default Header
    

