import React from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './stateProvider/StateProvider'


function App() {
  const [{ user }] = useStateValue();

  return (
    <DivApp>
      {!user ? (
        < Login />
      ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Feed />
              <Widgets />
            </AppBody>
          </>
        )}
    </DivApp>
  );
}

export default App;

const DivApp = styled.div`
  background-color: #f1f2f5;
`

const AppBody = styled.div`
  display: flex;
`

// // const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;