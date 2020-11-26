import React from 'react';
import './form-input.component.css'

const FormInput = ({placeholder, label}) => (
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
        <input className='form-input' placeholder={placeholder} />
        <label className='form-input-label' >{label}</label>
    </div>
)

export default FormInput