import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';

import {ROUTES} from './routes';
import {BanksLoad, BanksDetailsLoad} from '../pages';

const Stack = createStackNavigator();

const BanksNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          key={ROUTES.BANKS}
          name={ROUTES.BANKS}
          component={BanksLoad}
        />
        <Stack.Screen
          key={ROUTES.BANKS_DETAILS}
          name={ROUTES.BANKS_DETAILS}
          component={BanksDetailsLoad}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {BanksNavigator};
