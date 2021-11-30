import React, {Component} from 'react';
 
 
 
 class Trainers extends React.Component{
             render_trainer = () => {
            fetch("/trainers")
            .then((r) => r.json(r))
            .then((data) => setTrainer(clients))
        }
}

return(
    <button onClick={render_trainer}>Trainer</button>
)
export default Trainers;