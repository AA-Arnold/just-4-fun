import React from 'react'
import {FeatureBox} from '../../components/features/features-box.component'
import './features.css'

export const Features = () => (
    <section className="section-features">
        <div className="row">
            <div className="col-1-of-4">
                <FeatureBox heading={'Explore the world'} iconName={'icon-basic-world'}>
                Your messages are secured with
                end to end encryption and your 
                account is secure. J4f is built 
                with top-notch security
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Meet Nature'} iconName={'icon-basic-compass'}>
                We are constantly working on
                J4F as a platform to make 
                it as user friendly as 
                possible to enable good user experience
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Find your way'} iconName={'icon-basic-map'}>
                Set up your account within 
                seconds and begin having fun 
                without worrying about any 
                additional charges what so ever 
                </FeatureBox>
            </div>
            <div className="col-1-of-4">
                <FeatureBox heading={'Live a healthier life'} iconName={'icon-basic-heart'}>
                if there's anything that you
                need help with feel free to 
                contact us at any medium we
                are always available round the
                clock
                </FeatureBox>
            </div>      
        </div>
    </section>
)