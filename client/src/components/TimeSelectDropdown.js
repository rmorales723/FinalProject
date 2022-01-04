import React, { useState, useEffect } from 'react';
import { DropdownButton, Dropdown, Button} from 'react-bootstrap';

function TimeSelectDropdown({time, setTime, hideOptions}) {    
    const [selectedTime, setSelectedTime] = useState(time);
    const timeOptions = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

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