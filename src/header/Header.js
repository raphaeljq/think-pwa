import React from 'react'
import {Jumbotron, Container, Button} from 'reactstrap'

const Header = (props) =>{
   
    return (
        <div>
        <Jumbotron data-css3 fluid>
          <Container data-centro>
            
          <div className="hero hero-text">
            {/**<h1 class="display-4">Workshop no Amazoom Cowork</h1>**/}
            <p className="display-4 tituloHeader"><span className="oswald">PLA<br/>NEJA<br/>MENTO<br/></span> </p><p><span className="verdeTexto tituloHeaderVerde"> DE MARKETING DIGITAL</span></p>
            <p>Aprenda passo-a-passo como planejar sua campanha digital de sucesso, estabelecendo metas e resultados que você quer alcançar para seus negócios.</p>
            <Button color="success" className="verdeFundo">Inscreva-se!</Button>
          </div>
          </Container>
        </Jumbotron>
      </div>
    )
}
export default Header