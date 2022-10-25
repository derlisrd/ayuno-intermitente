//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Screens from "./src/Screens";
import AppProvider from "./src/Context/AppContext";
import LoginProvider from "./src/Context/LoginProvider";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AppProvider>
      <LoginProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
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
