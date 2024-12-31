// src/data/login/RemoteLoginService.ts
export class RemoteLoginService {
    async login(email: string, password: string): Promise<void> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'password123') {
            resolve();
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 2000); // Simulasi API call
      });
    }
  }
  