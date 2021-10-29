import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-white" id="footer">
                <div className="container">
                    <nav className="row">
                        <div>
                        <img  className="img-fluid" src="./images/logo.png" id="codealo"/>
                        
                    </div>
                        
                        <ul className="text-center float-sm">
                            <li className="d-inline p-4" href="#">Politicas de privacidad</li>
                            <li className="d-inline p-4">Terminos y condiciones</li>
                            <li className="d-inline p-4" id="text">&copy; 2021 Codealo</li>
                        </ul>
                        
                    </nav>
                    
                   
                </div>

            </footer>
        </div>
    )
}

export default Footer
