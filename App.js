import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './src/Context/AppContext';
import LoginProvider from './src/Context/LoginProvider';
import Login from './src/Screens/Auth/Login';

export default function App() {
  return (
    <AppProvider>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
