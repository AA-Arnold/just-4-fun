import React from 'react';
import FormInput from '../form-input/form-input.component'
import { Button } from '../button.component/button.component'
import './sign-up.css'


// const onSubmitForm = e => {
//     e.preventDefault()
//     let { username, email, password } = e.target.elements
//     // console.log(username)
//     console.log('Name : ', username.value, '\n email :', email.value, '\n password : ', password.value)
// }

export const SignUp = () => {
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        console.log(user)
    }, [user])

    const onSubmitForm = e => {
        e.preventDefault()

        setUserName('')
        setEmail('')
        setPassword('')
        setUser({ 'username': userName, 'email': email, 'password': password })
        console.log(user)
    }

    const handleChange = (e) => {
        setUserName(e.target.value)
    }
    const handleChange2 = (e) => {
        setEmail(e.target.value)
    }
    const handleChange3 = (e) => {
        setPassword(e.target.value)
    }
    return (
        <form className='form' onSubmit={onSubmitForm}>
            <FormInput
                name='username'
                type='text' label={'Username'}
                value={userName}
                onChange={handleChange}
                required />

            <FormInput name='email' type='email' label={'Email'} value={email} onChange={handleChange2} required />
            <FormInput name='password' type='password' label={'Password'} value={password} onChange={handleChange3} required />
            <Button>Register</Button>
        </form>
    )
}

