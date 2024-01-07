import { ethers, JsonRpcProvider } from "ethers";
import { Token } from '../../models/EthereumAddress';
import EthereumRepository from '../../repositories/ethereum/EthereumRepository';
import config from "../../config.json";
import SendRequest from "./send/SendRequest";
import { NetworkService } from "../../network/NetworkService";

export class EthereumRepositoryImpl implements EthereumRepository {
    private provider: JsonRpcProvider;
    private networkService: NetworkService = new NetworkService();
  
    constructor() {
        this.provider = new JsonRpcProvider(config.rpcUrl);
    }
  
    async getBalance(address: string): Promise<number> {
        const balance = await this.provider.getBalance(address);
        return parseFloat(ethers.formatEther(balance));
    }
  
    async getTokens(address: string): Promise<Token[]> {
      // Implement logic to get list of tokens
      return []; // Placeholder
    }

    async send(address: string, amount: string): Promise<void> {
        let request: SendRequest = {amount: amount, address: address}
        const result = await this.networkService.post('/api/operations/send', request)
        return result.json();
    }
}

export default EthereumRepositoryImpl;