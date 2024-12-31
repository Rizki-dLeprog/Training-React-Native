// App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/presentation/login/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
