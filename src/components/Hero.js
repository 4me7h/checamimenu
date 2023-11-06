import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Hero.scss';

const Hero = () => {
    return(
        <section className='hero'>
            <Container>
                <Row>
                    <Col>
                        <div className='hero__container'>
                            <div className='hero__header'>
                                <h1>¡Bienvenido a la Revolución del Menú Digital!</h1>
                            </div>
                            <div className='hero__content'>
                                <img src="https://tinyurl.com/checamimenu" alt="imgHero"/>
                                <p>
                                    ¿Estás buscando la forma más moderna y conveniente de presentar tus deliciosos platillos a tus clientes?
                                </p>
                                <p>
                                    ¡No busques más!
                                </p>
                                <p>
                                    Nuestro Menú Digital para Restaurantes es la solución perfecta para llevar la experiencia culinaria de tu restaurante al siguiente nivel.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;