import React, { useEffect, useState } from 'react'
import './style.css';

const Clock = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    // Use effect to update time
    // Use effect takes an arrow function
    // Use variable functions
    useEffect(() => {
        // variable function to update time every second
        const interval = setInterval(
            // Takes an arrow function
            () => {
                setCurrentTime(new Date());
            }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='clock'>
            <h3>{currentTime.toLocaleTimeString()}</h3>
        </div>
    )
}

export default Clock