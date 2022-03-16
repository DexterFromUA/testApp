import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';

export const Navigator = (): React.ReactElement => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);
