export interface LoginRepositoryInterface {
    login(email: string, password: string): Promise<void>;
  }
  
