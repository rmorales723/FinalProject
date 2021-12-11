// import './App.css';
import NavigationBar from './NavigationBar'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Client from './Clients'
import EditClient from './EditClient'
import NewClient from './NewClient'
import Appointment from './Appointment'
import AppointmentForm from './AppointmentForm'
import AppointmentsContainer from './AppointmentsContainer';

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    console.log('Rendered AuthenticatedApp');
    console.log(`currentUser: ${JSON.stringify(currentUser)}`);

    const history = useHistory()
    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.setItem("currentUserId", null);
        history.push('/');
    //   fetch(`/logout`, {
    //     method: 'DELETE'
    //   })
    //     .then(res => {
    //         if (res.ok) {
    //           setCurrentUser(null)
    //           localStorage.setItem("currentUserId", null);
    //           history.push('/')
    //         }
    //       })
      }
    return (
        <div className="App">
      <nav>
        <NavigationBar />
        <span>Logged in as {currentUser.username}<button onClick={handleLogout}>Logout</button></span>
      </nav>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AuthenticatedApp}>
              <Client 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/clients" component={Client}>
              <Client 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </ Route>
            <Route exact path="/clients/new" component={NewClient} >
              <NewClient 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path="/clients/:id/edit" component={EditClient} >
              <EditClient 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </Route>

            <Route exact path="/appointments" component={AppointmentsContainer}>
                <AppointmentsContainer />
            </Route>
            <Route exact path="/appointments/new" component={AppointmentForm} >
              <AppointmentForm 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </Route>
            {/* <Route exact path="/appointments/:id/edit" component={EditAppointment} >
              <EditAppointment 
              currentUser={currentUser} 
              setCurrentUser={setCurrentUser} />
            </Route> */}
          </Switch>
        </ Router>
      </div>
    </div>
  );
}

    export default AuthenticatedApp;