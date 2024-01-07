import  LoginRepository from "../../repositories/login/LoginRepository";
import LoginResponse from "./LoginResponse";
import LoginRequest from "./LoginRequest";

class LoginRepositoryImpl implements LoginRepository {
    private HOST = 'https://easywallet-erc4337.onrender.com'

    async signup(username: string, password: string): Promise<void> {
        let request: LoginRequest = {username: username, password: password};
        const body = JSON.stringify(request);
        const result = await fetch(this.HOST + '/api/login/signup/', { method: 'POST', headers: this.headers(), body: body })
    }

    async login(username: string, password: string): Promise<LoginResponse> {
        let request: LoginRequest = {username: username, password: password}
        const body = JSON.stringify(request);
        const result = await fetch(this.HOST + '/api/login/', { method: 'POST', headers: this.headers(), body: body })
        return result.json();
    }

    private headers() {
        return { accept: 'application/json', 'Content-Type': 'application/json' }
    }
}

export default LoginRepositoryImpl;