// import './App.css';
import NavigationBar from './NavigationBar'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Client from './Client'
import EditClient from './EditClient'
import NewClient from './NewClient'





function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()
    const handleLogout = () => {
      fetch(`/logout`, {
        method: 'DELETE'
      })
        .then(res => {
            if (res.ok) {
              setCurrentUser(null)
              history.push('/')
            }
          })
      }
    return (
        <div className="App">
      <nav>
        <NavigationBar />
        <span>Logged in as {currentUser.name} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AuthenticatedApp}>
              <Client currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/client" component={Client}>
              <Client currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/client/new" component={NewClient} >
              <NewClient currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/client/:id/edit" component={NewClient} >
              <EditClient currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </ Router>
      </div>
    </div>
  );
}

    export default AuthenticatedApp;