import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'


function UnAuthenticatedApp({ setCurrentUser }) {
    console.log('Rendered UnAuthenticatedApp');
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <SignUp setCurrentUser={setCurrentUser} />
      </Route>
    </Switch>
  )
}

export default UnAuthenticatedApp;