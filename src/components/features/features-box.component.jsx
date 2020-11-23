import React from 'react'
import './feature-box.component.css'


//iconName is a linear package to use this component make sure the package is available
export const FeatureBox = ({children, heading, iconName}) => (
    <div className="feature-box">
        <i className={`feature-box__icon ${iconName}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">
            {heading}
        </h3>
        <p className="feature-box__text">
            {children}
        </p>
    </div>
)