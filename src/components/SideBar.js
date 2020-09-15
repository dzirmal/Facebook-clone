import React from 'react'
import styled from 'styled-components'

import SideBarRow from './SideBarRow';


import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';



function SideBar(props) {
    return (
        <DivSideBar>
            <SideBarRow src='https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80' title='Maiwand' />
            <SideBarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />

            <SideBarRow title='Pages' Icon={EmojiFlagsIcon} />
            <SideBarRow title='Friends' Icon={PeopleIcon} />
            <SideBarRow title='Messenger' Icon={ChatIcon} />
            <SideBarRow title='Marketplace' Icon={StorefrontIcon} />
            <SideBarRow title='Videos' Icon={VideoLibraryIcon} />
            <SideBarRow title='Marketplace' Icon={ExpandMoreOutlined} />
        </DivSideBar>
    )
}

export default SideBar

const DivSideBar = styled.div`
    padding: 25px 10px;
    flex: 0.33;
`