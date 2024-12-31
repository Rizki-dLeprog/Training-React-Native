import { Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginUseCase } from '../../domain/login/LoginUseCase';
import { LoginRepository } from '../../data/login/LoginRepository';

// Observable untuk menangani email dan password
const emailSubject = new BehaviorSubject<string>('');
const passwordSubject = new BehaviorSubject<string>('');

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
      Alert.alert('Login Successful!', 'Welcome to the app!', [{ text: 'OK' }]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
      Alert.alert('Login Failed', errorMessage, [{ text: 'OK' }]);
    } finally {
      setLoading(false);
    }
  };

  // Subscribe untuk mendapatkan data dari email dan password observable
  useEffect(() => {
    const emailSubscription = emailSubject.subscribe(setEmail);
    const passwordSubscription = passwordSubject.subscribe(setPassword);
    return () => {
      emailSubscription.unsubscribe();
      passwordSubscription.unsubscribe();
    };
  }, []);

  // Fungsi untuk mengupdate email
  const updateEmail = (newEmail: string) => {
    emailSubject.next(newEmail);
  };

  // Fungsi untuk mengupdate password
  const updatePassword = (newPassword: string) => {
    passwordSubject.next(newPassword);
  };

  return { email, password, loading, error, updateEmail, updatePassword, handleLogin };
}
