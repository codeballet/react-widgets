import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    // keep track if dropdown is open
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // If clicked on Dropdown component, do nothing
            if (ref.current.contains(event.target)) {
                return;
            }
            // For clicking on other DOM elements, close dropdown
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyClick);

        // cleanup eventListener from component when removed from DOM
        return() => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []); // Emty list arg to run only once

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return(
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return(
        // set up a ref for Dropdown root element
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={
                        `ui selection dropdown ${open ? 'visible active' : ''}`
                    }
                >
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div 
                        className={`menu ${open ? 'visible transition' : ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;