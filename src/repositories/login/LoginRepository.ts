
import LoginResponse from '../../data/login/LoginResponse'

interface LoginRepository {
    login(username: string, password: string): Promise<LoginResponse>
    signup(username: string, password: string): Promise<void>
}

export default LoginRepository;