//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Screens from './src';
import AppProvider from './src/Context/AppContext';
import LoginProvider from './src/Context/LoginProvider';


export default function App() {
  return (
    <AppProvider>
      <LoginProvider>
        <Screens />
      </LoginProvider>
    </AppProvider>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
