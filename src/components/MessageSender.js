import React, { useState } from 'react'
import styled from 'styled-components'

import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { useStateValue } from '../stateProvider/StateProvider'
import db from '../firebase'
import firebase from 'firebase'


function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        // To post directly from the webpage
        db.collection('posts').add({
            message: firebase.firestore.FieldValue
                .serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    }

    return (
        <MessageSenderDiv>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind ${user.displayName}?`} />

                    <input
                        placeholder={`image URL (Optional)`}
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />

                    <button onClick={handleSubmit} type='submit'>
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </MessageSenderDiv>
    )
}

export default MessageSender

const MessageSenderDiv = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
    width: 100%;

& > div { 
        &.messageSender__top {
        display: flex;
        border-bottom: 1px solid #eff2fe;
        padding: 15px;
        }
        & > form {
            flex: 1;
            display: flex;
            & > input {
                outline-width: 0;
                border: none;
                padding: 5px 20px;
                margin: 0 10px;
                border-radius: 999px;
                background-color: #eff2fe;
                &.messageSender__input {
                flex: 1;
                }
            }
            & > button {
                display: none;
            }
        }
        &.messageSender__bottom {
            display: flex;
            justify-content: space-evenly;
        }
        & > div {
            padding: 20px;
            display: flex;
            align-items: center;
            color: gray;
            margin: 5px;
            &:hover {
                background-color: #eff2f5;
                border-radius: 20px;
            }
            & > h3 {
            font-size: medium;
            margin-left: 10px;
            cursor: pointer;
        }
    }
        
}
`