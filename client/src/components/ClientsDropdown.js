import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ClientsDropdown({setClientId, clientName}) {
    const [clients, setClients] = useState([]) 
    const [selectedClient, setSelectedClient] = useState(clientName);
    
    // console.log(`clientName: ${clientName}`);

    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then((clients) => {
                setClients(clients)
                setSelectedClient(clientName)
            })
    }, [])    

    const handleOnSelect = (event) => {
        event.preventDefault();
        setClientId(event.target.value);
        setSelectedClient(event.target.name);
    }
    
    const renderClientsDropdown = () => {        
        return clients.map((client) => {            
            return (                
                <Dropdown.Item as="button" onClick={handleOnSelect} name={client.name} value={client.id}>{client.name}</Dropdown.Item>
              );
        });        
    };

    return (
        <DropdownButton id="dropdown-item-button" title={selectedClient || "Select a Client"} >
            {renderClientsDropdown()}
        </DropdownButton>
    );
}

export default ClientsDropdown;