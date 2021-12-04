import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnAuthenticatedApp from './components/UnAuthenticatedApp'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // const [authChecked, setAuthChecked] = useState(false)
  

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((trainer) => {
            setCurrentUser(trainer)
          })
           } else {
            //  setAuthChecked(true)
        }
      })
  }, [])

  //  if(!authChecked) { return <div></div>}
  return (
    <div className="App">
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