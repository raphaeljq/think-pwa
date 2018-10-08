import React from 'react'
import { Container, Button, Row, Col} from 'reactstrap'
import workshop from '../img/workshop.png'
import planejamento from '../img/planejamento.png'
import tituloworkshop from '../img/titulo-workshop.png'
const Header = (props) =>{
   
    return (
        <div>
         
      <section data-css3 className="fluid  hero-text" >
        <nav className="d-flex justify-content-center badgeworshop">
          <img src={tituloworkshop} fluid/>
        </nav> 
        <Container data-centro>
          <Row className="header">
                <Col sm="12">
                  <img src={planejamento} className="img-fluid planejamento" />
                
                </Col>
                <Col sm="4" lg="12">
                  <p>Aprenda passo-a-passo como planejar sua campanha digital de sucesso, estabelecendo metas e resultados que você quer alcançar para seus negócios.</p>
                  <Button color="success" className="verdeFundo">Inscreva-se!</Button>
                </Col>
          </Row>
        </Container>  
        </section>
      </div>
    )
}
export default Header