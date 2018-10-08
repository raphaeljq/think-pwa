import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import workshop from '../img/workshop.png'
import datahora from '../img/data-hora.png'
import instrutor from '../img/instrutor.png'
import lote1 from '../img/lote1.png'
import lote2 from '../img/lote2.png'
import lote3 from '../img/lote3.png'

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
                        Chega pra cá!
                    </p>
                    </Col>

                </Row>
            </Container>
        </section>
        <section className="text-light fundoEscuro datahora" >
            <Container>
                <Row>
                    <Col xs="12" lg="8" className="d-flex justify-content-center">
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
                    <Col xs="12" className="text-center">
                        <h3>O Instrutor</h3>
                        <p>Professor de Branding e marketing, especialista
                        em Marketing Digital, nosso CEO
                        Nyl Barbosa vai mostrar passo a passo
                        como é possível otimizar sua marca para o
                        mundo digital e impulsionar seu negócio.
                         </p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="text-light fundoEscuro investimento">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Investimento</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" lg="4" className="d-flex justify-content-center">
                        <img src={lote1} />
                    </Col>
                    <Col xs="12" lg="4" className="d-flex justify-content-center">
                        <img src={lote2} className="img-fluid"/>
                    </Col>
                    <Col xs="12" lg="4" className="d-flex justify-content-center">
                        <img src={lote3} className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </section>                  
    </main>


)
export default Home