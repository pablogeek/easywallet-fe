export type Token = {
    symbol: string;
    balance: number;
};
  
export class EthereumAddress {
    address: string;
    balance: number;
    tokens: Token[];
  
    constructor(address: string, balance: number, tokens: Token[]) {
      this.address = address;
      this.balance = balance;
      this.tokens = tokens;
    }
}