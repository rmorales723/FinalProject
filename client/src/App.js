import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnAuthenticatedApp from './components/UnAuthenticatedApp'
import AppointmentsForm from './components/AppointmentsForm'
import AppointmentsContainer from './components/AppointmentsContainer'


// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // const [authChecked, setAuthChecked] = useState(false)
  

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("currentUserId");
    setCurrentUser(loggedInUserId);
    console.log(`loggedInUserId: ${loggedInUserId}`);
    
    if(loggedInUserId) {
      setCurrentUser(loggedInUserId);
      return; 
    }

    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((trainer) => {
            setCurrentUser(trainer)
            console.log(`trainer: ${JSON.stringify(trainer)}`);
            if (trainer) {              
              console.log(`trainer.id: ${trainer.id}`);
              localStorage.setItem("currentUserId", trainer.id);
            }          })
           } else {
            //  setAuthChecked(true)
        }
      })
  }, [])

  //  if(!authChecked) { return <div></div>}
  return (

    <div className="App">
      <AppointmentsContainer/>
      <Router>
        {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnAuthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
        }
      </Router>
    </div>
  )
}

export default App;