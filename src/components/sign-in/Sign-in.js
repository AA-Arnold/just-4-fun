import React from 'react';
import FormInput from '../form-input/form-input.component'
import { Button } from '../button.component/button.component'
import '../sign-up/sign-up.css'


// const onSubmitForm = e => {
//     e.preventDefault()
//     let { username, email, password } = e.target.elements
//     // console.log(username)
//     console.log('Name : ', username.value, '\n email :', email.value, '\n password : ', password.value)
// }

export const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [user, setUser] = React.useState({})

    React.useEffect(() => {
        console.log(user)
    }, [user])

    const onSubmitForm = e => {
        e.preventDefault()
        setEmail('')
        setPassword('')
        setUser({ 'email': email, 'password': password })

    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleChange2 = (e) => {
        setPassword(e.target.value)
    }
    return (
        <form className='form' onSubmit={onSubmitForm}>
            <FormInput name='email' type='email' label={'Email'} value={email} onChange={handleChange} required />
            <FormInput name='password' type='password' label={'Password'} value={password} onChange={handleChange2} required />
            <Button>Sign In</Button>
        </form>
    )
}

