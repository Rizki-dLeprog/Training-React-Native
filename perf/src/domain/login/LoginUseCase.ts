import { LoginRepositoryInterface } from './LoginRepositoryInterface';

export class LoginUseCase {
  private loginRepository: LoginRepositoryInterface;

  constructor(loginRepository: LoginRepositoryInterface) {
    this.loginRepository = loginRepository;
  }

  async execute(email: string, password: string): Promise<void> {
    return this.loginRepository.login(email, password);
  }
}
