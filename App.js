import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

import BAHome from './components/BAHome';
import BAND from './components/BAND';
import BAKontakt from './components/BAKontakt';

const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
          Poppins_900Black,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
    initialRouteName="BAHome"
  screenOptions={{
    tabBarActiveTintColor: 'rgb(175, 4, 4)',
    tabBarInactiveTintColor: 'black',
    tabBarShowLabel: true,
    tabBarStyle: {
      borderTopWidth: 0.5,
      borderTopColor: 'rgb(175, 4, 4)', // Red border line for the tab bar
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjusted to a semi-transparent background if needed
      height: 60, // Adjust height for tab bar size
      paddingTop: 10, // Add padding top to position items higher
      paddingBottom: 10, // Adjust padding bottom to make space for items
      marginBottom: 30, // Positive margin to move the tab bar higher
    },
    tabBarLabelStyle: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    tabBarIcon: () => null, // No icons
  }}
>
        <Tab.Screen
    name="Home"
    component={BAHome}
    options={{ tabBarLabel: 'HOME', headerShown: false }} 
  />
        <Tab.Screen name="BMI" component={BAND} options={{ tabBarLabel: 'BMI', headerShown: false }} />
        <Tab.Screen name="Kontakt" component={BAKontakt} options={{ tabBarLabel: 'INFO', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
