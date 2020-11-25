import React from 'react';
import './learn-more-button.styles.css'


const signInButton = () =>{
    console.log('clicked')
}

export const LearnMore = ({ children }) => (
    <a href="#i" className="btn-text" onClick={signInButton}>{children}</a>
)