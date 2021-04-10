import React from 'react'
import Typed from 'react-typed';
import '../App.css';

export default function Home() {
    return (
        
        <div className="wrapper">
            <div className="wrapper-info">
                
                <h1>
                <Typed 
                    className = "sriracha-font"
                    //Strings that will be printed
                    strings={['Web Developer', 'Front-End', 'Back-End']}
                    //Forward type speed
                    typeSpeed={40}
                    //Backward type speed
                    backSpeed={50}
                    //Use loop to make it repeat
                    loop 
                />
                
                </h1>
            </div>
        </div>
    )
}
