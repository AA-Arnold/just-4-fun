import React from 'react';
import './form-input.component.css'

const FormInput = ({label, ...otherProps}) => (
    // <div className='group'>
    //     <input className='form-input' {...otherProps} />
    //     {
    //         label ?
    //             (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
    //             :
    //             null
    //     }
    // </div>

    <div className='group'>
        <input className='form-input' {...otherProps} />
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>
    </div>
)

export default FormInput