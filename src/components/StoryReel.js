import React from 'react'
import styled from 'styled-components'

import Story from './Story'

function StoryReel() {
    return (
        <StoryReelDiv>
            {/* Story */}
            <Story
                image='https://images.unsplash.com/photo-1582880517901-26c9e7045615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
                profileSrc='https://images.unsplash.com/photo-1573084615714-fd555dcc785e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                title='Kitty'
            />
            <Story
                image='https://images.unsplash.com/photo-1520787497953-1985ca467702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80'
                profileSrc='https://images.unsplash.com/photo-1559146039-f3a4ed3e470a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                title='Mea'
            />
            <Story
                image='https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://images.unsplash.com/flagged/photo-1563807556028-4ee2b3253dbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                title='July'
            />
            <Story
                image='https://images.unsplash.com/photo-1569406951428-660231311689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://images.unsplash.com/photo-1565765246307-664118925e7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                title='Jem'
            />
            <Story
                image='https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                profileSrc='https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                title='Pitty'
            />
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </StoryReelDiv>
    )
}

export default StoryReel

const StoryReelDiv = styled.div`
display: flex;
`