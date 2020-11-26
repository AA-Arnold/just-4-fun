import React from 'react';

import './button.styles.css'

export const Button = ({ children, isAnimated }) => (
    <button  type='submit' className={`${isAnimated ? 'btn btn--white btn--animated' : 'btn btn--white'}`}>{children}</button>
) 