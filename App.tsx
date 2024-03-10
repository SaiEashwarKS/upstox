import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {DashboardHomeScreen} from './src/dashboard/screens/dashboardHomeScreen/DashboardHomeScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} />
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#721479'},
          }}>
          <Stack.Screen
            name="Dashboard"
            component={DashboardHomeScreen}
            options={{
              title: 'Upstox Holding',
            }}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
