import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import { SocialIcon } from 'react-social-icons';

export default function Projects() {
  const [isFindGroupVisible, setIsFindGroupVisible] = useState(false);
  const [isGiphyVisible, setIsGiphyVisible] = useState(false);

  function findGroupButton(e) {
    e.preventDefault();
    setIsFindGroupVisible(!isFindGroupVisible);
    if(isGiphyVisible){
        setIsGiphyVisible(false)
    }
  }

  function giphyButton(e) {
    e.preventDefault();
    setIsGiphyVisible(!isGiphyVisible);
    if(isFindGroupVisible){
        setIsFindGroupVisible(false)
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="mt-4 mb-3">
            <span className="light-blue bold">Project Name: FindGroup</span>
            </div>
            <button className="button mb-3" onClick={findGroupButton}>
              Reveal FindGroup!
            </button>
            <div>
              <div>
                {isFindGroupVisible ? (
                  
                  <div className="iframe-wrapper">
                    
                  
                    <iframe
                      title="Project Video"
                      src="https://www.youtube.com/embed/uzNrGFSndEs"
                      allowFullScreen
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      frameBorder="0"
                    />
                    
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <p className="mt-2"><span className="light-blue bold">GitHub Repo</span></p>
              <div className="mt-2"><SocialIcon url="https://github.com/samhu911/Capstone-project"/></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-4 mb-3">
              <span className="light-blue bold">Project Name: Giphy-App</span>
            </div>
            <button className="button mb-3" onClick={giphyButton}>
              Reveal Giphy-App!
            </button>
            <div>
              <div>
                {isGiphyVisible ? (
                  
                  <div className="iframe-wrapper">
                    <iframe
                      title="Project Video"
                      src="https://www.youtube.com/embed/kI8dsnqMt-U"
                      allowFullScreen
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      frameBorder="0"
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
