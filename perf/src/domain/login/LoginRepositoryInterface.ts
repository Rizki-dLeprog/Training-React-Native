// src/domain/login/LoginRepositoryInterface.ts
export interface LoginRepositoryInterface {
    login(email: string, password: string): Promise<void>;
  }
  