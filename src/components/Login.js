import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { Navigate, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Login = ({isLogin, setIsLogin}) => {

    const navigate  = useNavigate();

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false)
    const [ hasError, setHasError ] = useState(false)

    const handleChange = (name, value) => {
        if(name === 'user'){
            setUser(value)
        } else {
            if(value.length < 7){
                setPasswordError(true)
            } else {
                setPasswordError(false)
                setPassword(value)
            }
        }
    }

    function ifMatch(account) {
        if(account.user.length > 0 && account.password.length > 0){
            if(account.user === 'ensolvers@fake.com' && account.password === 'ensolvers'){
                const { user, password } = account;
                let ac = { user, password };
                let accountLocal = JSON.stringify(ac);
                localStorage.setItem('accountLocal', accountLocal);
                setIsLogin(true);
                navigate('/')
            } else {
                setIsLogin(false);
                setHasError(true)
            }
        } else {
            setIsLogin(false);
            setHasError(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        let account = { user, password }
        if(account){
            ifMatch(account)
        }
    }

  return (
    <div className='d-flex p-2 justify-content-center'>
        <Card border="secondary" style={{ width: '30rem' }} >
            <div className='p-5'>
            <Form>
                {hasError && <Alert>Incorrect email or username</Alert>}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name='user' 
                        placeholder="ensolvers@fake.com" 
                        onChange={(e) => handleChange(e.target.name, e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="ensolvers" 
                        onChange={(e) => handleChange(e.target.name, e.target.value)} 
                    />
                </Form.Group>
                {passwordError && <Alert>Incomplete password</Alert>}

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            </div>
        </Card>
    </div>
  )
}

export default Login