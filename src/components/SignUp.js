import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { auth } from '../firebase';

import { Button } from '@material-ui/core';


function SignUp() {

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

    const SignUp = (event) => {
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

    return (
        <SignUpDiv>
            <div className="login__logo">
                <img
                    src='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
                    alt='Facebook Logo'
                />

                <img
                    src='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png'
                    alt='Facebook Logo'
                />
            </div>

            <Button onClick={SignUp}>Sing In</Button>

            <Button onClick={SignUp}>
                Create a Facebook Account
            </Button>




            <Link to="/SignUp">

            </Link>
            < div className='login__container' >

                <h1>Sing in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />

                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
</p>
                <p>Need help?</p>
                <button onClick={SignUp} className="login__registerButton">Create your Amazon account</button>
            </div>

        </SignUpDiv>
    )
}

export default SignUp

const SignUpDiv = styled.div`
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
`