import React, { useState } from 'react'
import { Link, useHistory, Router, Route } from 'react-router-dom'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { actionTypes } from '../stateProvider/reducer';
import { useStateValue } from '../stateProvider/StateProvider';

import { Button } from '@material-ui/core';

function Login() {
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const login = (event) => {
        event.preventDefault(); // It prevents the refresh of the page
        // do the login logic....
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to the home page.
                history.push("/");
            })
            .catch((event) => alert(event.message));
    };
    const register = (event) => {
        event.preventDefault(); // It prevents the refresh of the page

        // do the register logic....
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in...
                history.push("/");
            })
            .catch((event) => alert(event.message));
    };

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <LoginDiv>
            <div className="login__logo">
                <img
                    src='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
                    alt='Facebook Logo' />
                <img
                    src='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png'
                    alt='Facebook Logo' />
            </div>
            < div className='login__container' >

                <h1>Sing in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <Button onClick={login} className="login__signInButton" type="submit" >Sign in</Button>

                </form>
                <Button onClick={register} className="login__registerButton">Create your Facebook account</Button>
            </div>

            <Button
                type="submit" onClick={signIn}
            >
                <img src='http://pngimg.com/uploads/chrome_logo/chrome_logo_PNG31.png' alt='Google logo' style={{ width: '40px', marginRight: '10px' }} />
                  Sign in With Google
            </Button>

        </LoginDiv>
    )
}

export default Login;

const LoginDiv = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    & > div {
        display: flex;
        flex-direction: column;
        & > img {
            object-fit: contain;
            height: 150px;
        }
        &.login__container {
        width: 500px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 1px solid lightgrey;
        align-items: center;
        & > h1 {
            font-weight: 500;
            margin-bottom: 20px;
            }   
        }
        & > form {
            display: flex;
            flex-direction: column;
            & > input {
                height: 30px;
                margin-bottom: 10px;
                background-color: white;
                width: 98%;
            }
            & > Button {
                width: 300px;
                background-color: #2e81f4;
                color: #eff2f5;
                font-weight: 800;
                margin-bottom: 10px;
                &:hover {
                background-color: white;
                color: #2e81f4;
            }
        & > Button {
        width: 300px;
        background-color: #2e81f4;
        color: #eff2f5;
        font-weight: 800;
        &:hover {
        background-color: white;
        color: #2e81f4;
        }
    }
        }
    }
    & > Button {
        width: 300px;
        background-color: #2e81f4;
        color: #eff2f5;
        font-weight: 800;
        &:hover {
        background-color: white;
        color: #2e81f4;
        }
    }
}
`