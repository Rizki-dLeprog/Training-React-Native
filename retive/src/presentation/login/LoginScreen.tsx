import React from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, Alert } from 'react-native';
import { useLoginViewModel } from './LoginViewModel';

const LoginScreen = () => {
  const { email, password, loading, error, updateEmail, updatePassword, handleLogin } = useLoginViewModel();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', 
        marginTop: 200, marginBottom:20, textAlign:'center'}}>Aplikasi Trena</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={updateEmail}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={updatePassword}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
