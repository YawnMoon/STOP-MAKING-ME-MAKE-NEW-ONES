// // App lol
// ⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠣⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠈⠲⠆⢦⣾⣿⢻⣷⣦⣴⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⣶⡶
// ⠀⠀⠀⠈⢾⡿⣿⣿⣷⣏⣹⣏⡿⡿⢷⣶⣎⣹⣉⣈⣿⣷⣾⡿⣿⣏⠷⠀
// ⠀⠀⠀⠀⠈⢿⣷⣻⡾⣽⣯⢿⣽⡷⣿⣻⢯⣟⣯⣷⣟⣾⣽⡻⠗⠁⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠓⠛⠿⣾⣻⣷⣻⣯⣟⣿⠽⠻⠾⠽⠚⠁⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠤⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
import * as React from "react";
import { View, Text, TouchableOpacity, Button, Pressable } from "react-native";
import { NavigationContainer, useNavigation, useNavigationContainerRef, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ASSAHome from "./app/screens/ASSAHome";
import SearchScreen from "./app/screens/SearchScreen";
import SwmsScreen from "./app/screens/SwmsScreen";
import OnlineCheckAndForms from "./app/screens/OnlineCheckAndForms";
import ProfileScreen from "./app/screens/ProfileScreen";
import CheckAndForms from "./app/screens/OnlineCheckAndForms";

import colors from "./app/config/colors";

import Ionicon from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//penis
function Borgir ({}) {
  return(
  <Drawer.Navigator
    screenOptions={{ drawerInactiveBackgroundColor:  colors.drawer, 
      drawerInactiveTintColor: colors.bg, 
      drawerActiveBackgroundColor: colors.bg, 
      drawerActiveTintColor:  colors.drawer,
    drawerStyle: {
      backgroundColor: colors.drawer
    },
  }}
  >
    <Drawer.Screen name="Home" component={ASSAHome} options={{headerShown: false}}  />
    <Drawer.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
    <Drawer.Screen name="SWMS" component={SwmsScreen} options={{headerShown: false}}/>
    <Drawer.Screen name= "Online Checklists and Forms" component={OnlineCheckAndForms} options={{headerShown: false}} />
    <Drawer.Screen name= "Checklists and Forms" component={CheckAndForms} options={{headerShown: false}} />
    {/* <Drawer.Screen name="Live Chat" */}
  </Drawer.Navigator>
  );
}

function navigate(name, params) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

  // main app with navigation
  const App = ({ navigation }) =>  {
    const navigationRef = useNavigationContainerRef();
  return (
    // Function 
    <NavigationContainer ref={navigationRef}> 
      
      {/* Parent component */}
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{  headerStyle: {
        backgroundColor: colors.darkgreen,
      },
      // headerBackVisible: false,
      headerBackTitleVisible: false,
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',

      }, 
    }}>
        {/* Child component */}
        <Stack.Screen
          name="Main"
          component={WelcomeScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="ASSA"
          component={Borgir}
          options={{
            headerLeft: () => (
              <Pressable
              android_ripple={{
                color: '#666666',
                foreground: true,
                borderless: true,
              }}
              onPress={() => {navigationRef.dispatch(DrawerActions.toggleDrawer());}}>
              <Ionicon
                style={{paddingLeft: 10, color: "white"}}
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={35}
              />
            </Pressable>
            ),
          
            headerRight: () => (
              <Pressable
              android_ripple={{
                color: '#ffffff',
                foreground: true,
                borderless: true,
              }}
              onPress={() => alert('This is profile')} >
              <Ionicon 
                style={{paddingLeft: 10, color: "white"}}
                name='person-circle-sharp'
                size={35}
              
              />
            </Pressable>
            )
          }}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} />
       
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerBackVisible: true,}}
        />
        <Stack.Screen
          name="SWMS"
          component={SwmsScreen}
          options={{
            headerBackVisible: true,
            headerLeft: () => (
              <Pressable
              android_ripple={{
                color: '#666666',
                foreground: true,
                borderless: true,
              }}
              onPress={() => {navigationRef.dispatch(DrawerActions.toggleDrawer())}}>
              <Ionicon
                style={{paddingLeft: 10, color: "white"}}
                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                size={35}
              />
            </Pressable>
            ),
          
            headerRight: () => (
              <Pressable
              android_ripple={{
                color: '#ffffff',
                foreground: true,
                borderless: true,
              }}
              onPress={() => alert('This is profile')} >
              <Ionicon 
                style={{paddingLeft: 10, color: "white"}}
                name='person-circle-sharp'
                size={35}
              
              />
            </Pressable>
            )
          }}
          
        />
      </Stack.Navigator>

    
    </NavigationContainer>
  );
}

export default App;
