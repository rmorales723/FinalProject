import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TimeSelectDropdown({time, setTime, hideOptions}) {    
    const [selectedTime, setSelectedTime] = useState(time);
    const timeOptions = ['12:00am', '12:15am', '12:30am', '1:00am'];

    const handleOnSelect = (event) => {
        console.log(`inside handleOnSelect: ${event.target.value}`);
        event.preventDefault();
        setTime(event.target.value);      
        setSelectedTime(event.target.value);
    }
    
    const renderTimeSelectDropdown = () => {   
        return timeOptions.map((time) => {
            return (         
                <Dropdown.Item as="button" onClick={handleOnSelect} name={time} value={time}>{time}</Dropdown.Item>
            );
        });        
    };

    return (
        hideOptions ? <Button variant="primary" size="sm">{time}</Button>
            : 
            <DropdownButton id="dropdown-item-button" title={selectedTime || "Select a Time"} >
                {renderTimeSelectDropdown()}
            </DropdownButton>
    );
}

export default TimeSelectDropdown;