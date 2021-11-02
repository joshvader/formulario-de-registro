
import React, {useState} from 'react'
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Header from './components/Header';
import styled from 'styled-components';





function App() {
   

	return (
    <div>
      <Header/>
      <Formulario/>
      <br/>
      
      <br/>
	  
      <Footer/>
    </div>
      
);
}

export default App;

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
