import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigatorRouterProps } from '@types';

const Stack = createNativeStackNavigator();

/**
 * @description
 * 生成路由
 */
export default function createNavigator(router: NavigatorRouterProps[]) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {router.map(item => {
          return <Stack.Screen name={item.name} component={item.component} key={item.name} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
