import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    // To fitch the data from the database.
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            );
    }, []);

    return (
        <FeedDiv>
            <StoryReel />
            <MessageSender />

            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))}

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