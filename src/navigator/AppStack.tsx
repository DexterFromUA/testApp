import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Pressable} from 'react-native';

import Detail from '../screens/Detail';
import Home from '../screens/Home';
import Filter from '../screens/Filter';
import {NavigationProps} from '../app/types';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const navigator = useNavigation<NavigationProps<'Filter'>>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Breaking Bad',
          headerRight: () => (
            <Pressable onPress={() => navigator.navigate('Filter')}>
              <Text>Filter</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route?.params?.item?.name || 'Character',
        })}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
