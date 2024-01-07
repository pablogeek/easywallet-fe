import  LoginRepository from "../../repositories/login/LoginRepository";
import LoginResponse from "./LoginResponse";
import LoginRequest from "./LoginRequest";
import { NetworkService } from "../../network/NetworkService";

class LoginRepositoryImpl implements LoginRepository {
    private networkService: NetworkService = new NetworkService();

    async signup(username: string, password: string): Promise<void> {
        let request: LoginRequest = {username: username, password: password};
        await this.networkService.post('/api/login/signup/', request)
    }

    async login(username: string, password: string): Promise<LoginResponse> {
        let request: LoginRequest = {username: username, password: password};
        const result = await this.networkService.post('/api/login/', request);
        return result.json();
    }
}

export default LoginRepositoryImpl;