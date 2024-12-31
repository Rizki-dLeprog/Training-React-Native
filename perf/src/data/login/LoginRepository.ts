// src/data/login/LoginRepository.ts
import { LoginRepositoryInterface } from '../../domain/login/LoginRepositoryInterface';
import { RemoteLoginService } from './RemoteLoginService';

export class LoginRepository implements LoginRepositoryInterface {
  private remoteLoginService: RemoteLoginService;

  constructor() {
    this.remoteLoginService = new RemoteLoginService();
  }

  async login(email: string, password: string): Promise<void> {
    return this.remoteLoginService.login(email, password);
  }
}
