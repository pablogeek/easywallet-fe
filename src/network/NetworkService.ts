export class NetworkService {
    private HOST = 'https://easywallet-erc4337.onrender.com';

    async post(url: string, body: any): Promise<Response> {
        return await fetch(this.HOST + url, {
            method: 'POST',
            headers: this.headers(),
            body: JSON.stringify(body)
        });
    }

    private headers(): any {
        const jwtToken = localStorage.getItem('-easywallet-authToken');
        return { accept: 'application/json', 'Content-Type': 'application/json', 'Authorization': jwtToken };
    }
}