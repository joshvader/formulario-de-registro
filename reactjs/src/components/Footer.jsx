import React from 'react'
import logo from './img/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="text-white" id="footer">
                <div className="container">
                    <nav className="row">
                        <div>
                        <img className="img-fluid" src={logo}  id="codealo"/>
                        
                    </div>
                        
                        <ul className="text-center option">
                            <li className="d-inline flex-sm-column p-2" href="#">Politicas de privacidad</li>
                            <li className="d-inline flex-sm-column p-2">Terminos y condiciones</li>
                            <li className="d-inline flex-sm-column p-2" id="text">&copy; 2021 Codealo</li>
                        </ul>
                        
                    </nav>
                    
                   
                </div>

            </footer>
        </div>
    )
}

export default Footer
