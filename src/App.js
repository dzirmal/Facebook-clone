import React, { useEffect } from 'react';
import styled from 'styled-components'

import { auth } from './firebase'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './stateProvider/StateProvider'


function App() {
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition. "useEffect"
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      // Any clean-up operations go here. like time or other resets.
      unsubscribe();
    }

  }, []);

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