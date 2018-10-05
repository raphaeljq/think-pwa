import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import workshop from '../img/workshop.png'
import datahora from '../img/data-hora.png'
import instrutor from '../img/instrutor.png'

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
        <section className="text-light keyfundo">
            <Container>
                <Row>
                    <Col className="text-center">
                    
                    <p>O Marketing é uma das chaves
que você vai precisar pra abrir as portas para
o mercado. Quer fazer sua marca ser mais
conhecida, desejada e vista positivamente
pelos consumidores?
Chega pra cá!</p>
                    </Col>

                </Row>
            </Container>
        </section>
        <section className="text-light fundoEscuro">
            <Container>
                <Row>
                    <Col className="text-center">
                        <img src={datahora}  className="img-fluid"/>
                   
                    </Col>

                </Row>
            </Container>
        </section>
        <section className="text-light fundoTopicos">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Tópicos abordados</h2>
                        <ul className="text-left">
                            <li>Posicionamento de Marca</li>
                            <li>Marketing</li>
                            <li>Funil de Vendas</li>
                            <li>Canais estratégicos</li>
                            <li>Relacionamento Digital</li>
                            <li>Vendas</li>
                        </ul>
                   
                    </Col>

                </Row>
            </Container>
        </section>
        <section className="fundoInstrutor">
            <Container>
                <Row>
                    <Col xs="12" className="text-center fotoInstrutor">
                        <img src={instrutor} />
                   
                    </Col>
                    <Col xs="12" className="text-center"><h3>O Instrutor</h3></Col>

                </Row>
            </Container>
        </section>                 
             

    </main>


)
export default Home