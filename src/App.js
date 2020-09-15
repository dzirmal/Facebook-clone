import React from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Feed from './components/Feed'

function App() {
  return (
    <DivApp>
      <Header />

      <AppBody>
        <SideBar />
        {/* // Feed */}
        <Feed />
        {/* // Widgets */}

      </AppBody>

    </DivApp>

  );

}

export default App;

const DivApp = styled.div`
  background-color: #f1f2f5;
  height: 100vh;
`

const AppBody = styled.div`
  display: flex;
`

// // const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;