import React, { useState, useEffect } from 'react';
import { EthereumRepositoryImpl } from '../data/ethereum/EthereumRepositoryImpl';
import { EthereumAddress } from '../models/EthereumAddress';

export const EthereumAddressInfo = ({ address }) => {
    const [ethereumAddress, setEthereumAddress] = useState(null);

    useEffect(() => {
        async function fetchData() {
            console.log('fetching data for ' + address)
            const ethereumRepository = new EthereumRepositoryImpl();
            const balance = await ethereumRepository.getBalance(address);
            const tokens = await ethereumRepository.getTokens(address);
            const ethAddress = new EthereumAddress(address, balance, tokens);
            setEthereumAddress(ethAddress);
        }
        fetchData();
    }, [address]);

    if (!ethereumAddress) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Address: {ethereumAddress.address}</h2>
            <p>Balance: {ethereumAddress.balance}</p>
            <ul>
                {ethereumAddress.tokens.map(token => (
                    <li key={token}>{token}</li>
                ))}
            </ul>
        </div>
    );
};