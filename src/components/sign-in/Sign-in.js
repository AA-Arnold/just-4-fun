import React from 'react';
import FormInput from '../form-input/form-input.component'
import { Button } from '../button.component/button.component'
import './sign-in.css'


const onSubmitForm = e => {
    e.preventDefault()
    let { username, email, password } = e.target.elements
    // console.log(username)
    console.log('Name : ', username.value, '\n email :', email.value, '\n password : ', password.value)
}

// const [userName, setUserName] = React.useState('')
// const [email, setEmail] = React.useState('')
// const [password, setPassword] = React.useState('')


export const SignIn = () => (
    <form className='form' onSubmit={onSubmitForm}>
        <FormInput name='username' type='text' label={'Username'} required />
        <FormInput name='email' type='email' label={'Email'} required />
        <FormInput name='password' type='password' label={'Password'} required />
        <Button>Register</Button>
    </form>
)