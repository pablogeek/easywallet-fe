import  LoginRepository from "../../repositories/login/LoginRepository";
import LoginResponse from "./LoginResponse";
import LoginRequest from "./LoginRequest";

class LoginRepositoryImpl implements LoginRepository {
    async signup(username: string, password: string): Promise<void> {
        const result = await fetch('http://proxyman.debug:3333/api/signup/', { method: 'POST', headers: this.headers(), body: JSON.stringify({ message: 'Hello World!' }) } )
    }

    async login(username: string, password: string): Promise<LoginResponse> {
        let request: LoginRequest = {username: username, password: password}
        const body = JSON.stringify(request);
        const result = await fetch('http://proxyman.debug:3333/api/login/', { method: 'POST', headers: this.headers(), body: body })
        return result.json();
    }

    private headers() {
        return { accept: 'application/json', 'Content-Type': 'application/json' }
    }
}

export default LoginRepositoryImpl;