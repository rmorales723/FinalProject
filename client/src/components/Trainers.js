// import React, {Component} from 'react';
import React, { useState } from 'react'
import { useEffect } from 'react'

 
 
//  class Trainers extends React.Component{
//              render_trainers = () => {
//             fetch("/trainers")
//             .then((r) => r.json(r))
//             .then((clients) => setTrainers(clients))
//         }
// }

function Trainers() {
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        fetch("/trainers")
            .then((res) => res.json())
            .then((clients) => setTrainer(clients))
    }, [])

return(
    <button onClick={Trainers}>Trainer</button>
)}
export default Trainers;