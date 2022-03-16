/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {MainState, State} from './src/app/context';
import {QueryProvider} from './src/app/QueryProvider';
import {Navigator} from './src/navigator';

const initState = {filter: []};

const App = () => {
  const [state, setState] = React.useState<State>(initState);

  return (
    <QueryProvider>
      <MainState.Provider value={{state, setState}}>
        <Navigator />
      </MainState.Provider>
    </QueryProvider>
  );
};

export default App;
