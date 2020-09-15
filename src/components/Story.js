import React from 'react'
import styled from 'styled-components'

import { Avatar } from '@material-ui/core';

function Story({ image, profileSrc, title }) {
    return (
        <StoryReelDiv style={{ backgroundImage: `url(${image})` }}>
            <Avatar style={{
                margin: `10px`,
                border: `5px solid #2e81f4`
            }} src={profileSrc} />
            <h4>{title}</h4>
        </StoryReelDiv>
    )
}

export default Story

const StoryReelDiv = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: none;
    width: 120px;
    height: 200px;
    box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    margin-right: 10px;
    transition: transform 100mx ease-in;
    cursor: pointer;

    &:hover {
        transform: scale(1.07);
    }

    & > h4 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
    }
`