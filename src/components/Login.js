import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { actionTypes } from '../stateProvider/reducer';
import { useStateValue } from '../stateProvider/StateProvider';

import { Button } from '@material-ui/core';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <LoginDiv>
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