import React from 'react'
import {FeatureBox} from '../../components/feature-box/feature-box.component'
import './features.scss'

export const Features = () => (
    <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox heading={'Explore the world'} iconName={'icon-basic-world'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, necessitatibus! 
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Meet Nature'} iconName={'icon-basic-compass'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, necessitatibus! 
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Find your way'} iconName={'icon-basic-map'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, necessitatibus! 
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Live a healthier life'} iconName={'icon-basic-heart'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, necessitatibus! 
                </FeatureBox>
            </div>      
        </div>
    </section>
)