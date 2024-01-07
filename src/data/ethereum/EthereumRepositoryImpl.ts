import { ethers, JsonRpcProvider } from "ethers";
import { Token } from '../../models/EthereumAddress';
import EthereumRepository from '../../repositories/ethereum/EthereumRepository';
import config from "../../config.json";
import SendRequest from "./send/SendRequest";

export class EthereumRepositoryImpl implements EthereumRepository {
    private provider: JsonRpcProvider;
  
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
        const body = JSON.stringify(request);
        console.log('headers ', this.headers());
        const result = await fetch('http://proxyman.debug:3333/api/operations/send', { method: 'POST', headers: this.headers(), body: body })
        return result.json();
    }

    private headers() {
        const jwtToken = localStorage.getItem('-easywallet-authToken');
        return { accept: 'application/json', 'Content-Type': 'application/json', 'Authorization': jwtToken! }
    }
}

export default EthereumRepositoryImpl;