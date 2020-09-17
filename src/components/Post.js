import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <PostDiv>
            <div className="post__top">
                <Avatar src={profilePic} style={{ marginRight: '10px' }} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>

            </div>

        </PostDiv>
    )
}

export default Post;


const PostDiv = styled.div`
    width: 100%;
    margin-top: 15px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
& > div {
    &.post__top {
        display: flex;
        position: relative;
        align-items: center;
        padding: 15px;
    }
    & > div {
        & > h3 {
            font-size: medium;
        }
        & > p {
            font-size: small;
            color: gray;
        }
    }
    &.post__bottom {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 15px 25px;
    }
}
& > div {
        & > img {
            width: 100%;
            height: 500px;
        }
    }
& > div {
    &.post__options {
        padding-top: 10px;
        border-top: 1px solid lightGray;
        display: flex;
        justify-content: space-evenly;
        font-size: medium;
        color: gray;
        cursor: pointer;
        padding: 15px;
        & > div {
            &.post__option {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px;
                flex: 1;
                &:hover {
                    background-color: #eff2f5;
                    border-radius: 10px;
                }
            }
            & > p {
                margin-left: 10px;
            }
        }
    }
}
`