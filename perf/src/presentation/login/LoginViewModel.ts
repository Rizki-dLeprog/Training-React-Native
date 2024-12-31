import { useState } from 'react';
import { Alert } from 'react-native';
import { LoginUseCase } from '../../domain/login/LoginUseCase';
import { LoginRepository } from '../../data/login/LoginRepository';

export function useLoginViewModel() {
  const loginUseCase = new LoginUseCase(new LoginRepository());
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await loginUseCase.execute(email, password);
      Alert.alert('Login Successful!', 'Welcome to the app!', [
        { text: 'OK' }
      ]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
      Alert.alert('Login Failed', errorMessage, [{ text: 'OK' }]);
    } finally {
      setLoading(false);
    }
  };

  return { email, password, loading, error, setEmail, setPassword, handleLogin };
}
