import React, { useState } from 'react'
import { useEffect } from 'react'

 
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