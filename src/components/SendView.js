import React, { useState } from 'react';

export const SendView = ({ onSend }) => {

    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = () => {
        console.log('Amount to send:', amount);
        onSend(address, amount);
    };

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div>
            <h2>Send Money</h2>
            <input 
                type="text" 
                value={address} 
                onChange={handleAddressChange} 
                placeholder="Enter address destination" 
            />
            <input 
                type="number" 
                value={amount} 
                onChange={handleInputChange} 
                placeholder="Enter amount" 
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    );
}