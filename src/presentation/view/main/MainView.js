import './MainView.css';
import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { EthereumAddressInfo } from '../../../components/EthereumAddressInfo';
import { SendView } from '../../../components/SendView';
import { EthereumRepositoryImpl } from '../../../data/ethereum/EthereumRepositoryImpl';
import MainButton from "../../../components/MainButton"

function MainView() {
    let { address } = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isLoading, setIsLoading] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const ethereumRepository = new EthereumRepositoryImpl();

    const handleSendMoney = async (address, amount) => {
        setIsLoading(true);
        console.log('Sending amount:', amount);
        setOpen(false);
        await ethereumRepository.send(address, amount);
        setIsLoading(false);
    };

    if (isLoading) {
        return <div>Sending...</div>;
    }

    return (
        <div className="main-container">
        <EthereumAddressInfo address={address} />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <SendView onSend={handleSendMoney} />
            </Box>
        </Modal>
        <MainButton variant="contained" color="primary" onClick={handleOpen}>
        Send
        </MainButton>
        </div>
    
    );
}

export default MainView;