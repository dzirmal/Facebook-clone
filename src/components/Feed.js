import React from 'react'
import styled from 'styled-components'

import StoryReel from './StoryReel'
import MessageSender from './MessageSender'

function Feed() {
    return (
        <FeedDiv>
            {/* Story Row */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />

        </FeedDiv>
    )
}

export default Feed

const FeedDiv = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`