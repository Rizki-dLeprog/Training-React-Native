import { LoginRepository } from '../../data/login/LoginRepository';

export class LoginUseCase {
  private loginRepository: LoginRepository;

  constructor(loginRepository: LoginRepository) {
    this.loginRepository = loginRepository;
  }

  // Fungsi untuk eksekusi login
  async execute(email: string, password: string) {
    // Validasi sederhana
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    return this.loginRepository.login(email, password);
  }
}
