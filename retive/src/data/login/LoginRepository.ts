
export class LoginRepository {
    // Fungsi mock untuk autentikasi
    async login(email: string, password: string) {
      // Logika autentikasi (ganti dengan API nyata jika diperlukan)
      if (email === 'test@example.com' && password === 'password') {
        return { success: true, message: 'Login successful!' };
      } else {
        throw new Error('Invalid email or password');
      }
    }
  }
  