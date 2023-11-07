import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgBackground from '../images/hero.jpg';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    return(
        <section className="hero hero--bgimg" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__filter"></div>
            <Container>
                <Row>
                    <Col>
                        <div className='hero__container'>
                            <div className='hero__content'>
                                <h1 class="text--title">¡Bienvenido a la Revolución del Menú Digital!</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;