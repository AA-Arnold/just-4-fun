import React from 'react';
import { Link } from 'react-router-dom';
import './learn-more-button.styles.css'


 const LearnMore = ({ children}) => (
    <Link to='signup' className='btn-text'>{children}</Link>
 )



    

export default LearnMore
