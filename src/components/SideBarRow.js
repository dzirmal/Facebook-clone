import React from 'react'
import styled from 'styled-components'

import { Avatar } from '@material-ui/core';


function SideBarRow({ title, src, Icon }) {
    return (
        <DivSideBarRow>
            {src && <Avatar src={src} />}

            <DivIcon>
                {Icon && <Icon />}
            </DivIcon>
            <h4>{title}</h4>
        </DivSideBarRow>
    )
}

export default SideBarRow;

const DivSideBarRow = styled.div`
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
font-size: large;

& > h4 {
    margin-left: 20px;
    font-weight: 600;
}
&:hover {
    background-color: lightGray;
    border-radius: 10px;
}
`
const DivIcon = styled.div`
     color: #2e81f4;
`