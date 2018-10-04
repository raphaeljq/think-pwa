import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import workshop from '../img/workshop.png'

const Home = () => (

    <main>
        <section className="verdeFundo text-light">
            <Container>   
                <Row>
                    <Col xs="12">
                   
                    </Col>
                    <Col xs="12" className="text-center">
                        <h2>Objetivos do Curso</h2>
                        <p>Facilitar o dia-a-dia dos empreendedores e profissionais de marketing que desejam aprender uma metodologia de Planejamento Estratégico Digital para aplicar nos seus negócios, e em grandes ações de marketing.</p>
                    </Col>
                </Row>
            </Container>    
        </section>
        <section className="text-light">
            <Container>
                <Row>
                    <Col className="text-center">
                    <h2>PÚBLICO</h2>
                    <p>Empreendedores inovadores, profissionais de empresas, gerentes de marketing, instituições envolvidas com projetos de comunicação digital e administradores com interesse em aprimorar suas estratégias e técnicas de planejamento estratégico de seus negócios e produtos no ambiente digital.</p>
                    </Col>

                </Row>
            </Container>
        </section>     
             

    </main>


)
export default Home