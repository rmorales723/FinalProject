import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Trainers() {
    const [trainers, setTrainers] = useState("");

    useEffect(() => {
        fetch("/trainers")
            .then((res) => res.json())
            .then((trainers) => setTrainers(trainers))
    }, [])
}




export default Trainers;