import React from 'react';
import styled from 'styled-components';

function Widgets() {
    return (
        <WidgetsDiv>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FThinkingHumanity%2Fposts%2F3601576553236541&show_text=true&width=0&height=0&appId"
                width="340"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={false}
                allow='encrypted-media'
                title='ThinkingHumanity'
            >
            </iframe>
        </WidgetsDiv>
    )
}

export default Widgets;

const WidgetsDiv = styled.div``