import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    
    function projectButton(e){
        e.preventDefault();
        console.log("Hello");
        setIsVisible(!isVisible);
    }
    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="mt-4 mb-3">
                            <b>Project Name: FindGroup</b> 
                        </div>
                        <button className=" mb-3" onClick={projectButton}>
                            Reveal FindGroup!
                        </button>
                        <div>
                            <div>
                                {
                                isVisible 
                                ? 
                                    (
                                        <div className="iframe-wrapper">
                                            <iframe 
                                                title="Project Video" 
                                                src="https://www.youtube.com/embed/uzNrGFSndEs&ab_channel=ChristopherArtrip"
                                                allowFullScreen
                                                webkitallowfullscreen="true"
                                                mozallowfullscreen="true"
                                                frameBorder="0"
                                            />
                                        </div>
                                    ) 
                                :
                                    (
                                        <div>

                                        </div>
                                    ) 
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>        

    )
}
