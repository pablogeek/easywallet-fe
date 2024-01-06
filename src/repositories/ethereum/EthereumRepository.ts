import { Token } from '../../models/EthereumAddress';

interface EthereumRepository {
    getBalance(address: string): Promise<number>
    getTokens(address: string): Promise<Token[]> 
    send(address: string, amount: string): Promise<void>
}

export default EthereumRepository;