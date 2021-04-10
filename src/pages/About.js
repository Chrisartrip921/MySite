import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';
export default function About() {
    //const [isShowing, setIsShowing] = useState(false);

    const spring1 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
        config: config.slow
    });

    return (
        <Container className="sriracha-font">
            <Row >
                <Col className="mt-5">
                    <animated.div style={spring1}>
                        <div className="card1 mr-5 ">
                            <animated.div style={spring1}><big><b>My Computer Science background</b></big></animated.div>
                        </div>
                        <div className="mt-3 mr-5">gggg</div>
                    </animated.div>
                </Col>
                <Col className="mt-5">
                    <animated.div style={spring1}>
                        <div className="card1 mr-5">
                            <animated.div style={spring1}><h1>Hello</h1></animated.div>
                        </div>
                    </animated.div>
                </Col>
                <Col className="mt-5">
                    <animated.div style={spring1}>
                        <div className="card1 mr-5">
                            <animated.div style={spring1}><h1>Hello</h1></animated.div>
                        </div>
                    </animated.div>
                </Col>
            </Row>
        </Container>
    );
}


