import React from "react";
import {FontAwesome,Octicons} from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Auth/Login";
import Home from "./Home";
import Profile from "./Profile";
import History from "./History";
import { useLogin } from "../Context/LoginProvider";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStacks() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),}}
      />
      <Tab.Screen name="History" component={History} 
        options={{
          headerShown:false,
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            <Octicons name="history" size={24} color={color} />
          ),}}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={26} />
          ),}}
      />
      
    </Tab.Navigator>
    
  );
}

function Screens() {
  const { userData } = useLogin();
  const { login } = userData;




  return (
    <Stack.Navigator>
      
        
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} /> 
        <Stack.Screen name="HomeStacks" component={HomeStacks} options={{ headerShown:false }} />
      
    </Stack.Navigator>
  );
}
export default Screens;
