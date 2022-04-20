import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secundary_button,
        tabBarLabelPosition: 'beside-icon'

    }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        
      />

      <Screen
        name="Cadastrar"
        component={Register}
      />

      <Screen
        name="Resumo"
        component={Register}
      />
    </Navigator>
  );
}