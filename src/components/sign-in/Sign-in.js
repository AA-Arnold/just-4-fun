import React from 'react';
import FormInput from '../form-input/form-input.component'
import './sign-in.css'

export const SignIn = () => (
    <form className='form'>
        <FormInput label={'Username'} />
        <FormInput label={'Email'} />
        <FormInput label={'Password'} />
    </form>
)