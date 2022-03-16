import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {MainState} from '../app/context';

const SEASONS = [1, 2, 3, 4, 5];

export default () => {
  const {state, setState} = useContext(MainState);

  const handleFilterPress = (index: number) => {
    if (state.filter.includes(index)) {
      setState({
        ...state,
        filter: state.filter.filter((el: number) => el !== index),
      });
    } else {
      setState({...state, filter: [...state.filter, index]});
    }
  };

  return (
    <View style={styles.container}>
      {SEASONS.map(season => (
        <Pressable
          key={season}
          style={styles.listItem}
          onPress={() => handleFilterPress(season)}>
          <View
            style={[
              styles.checkbox,
              state.filter.includes(season) ? styles.markedCheckbox : null,
            ]}
          />
          <Text>{season}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 10,
    marginVertical: 5,
  },
  markedCheckbox: {
    backgroundColor: 'black',
  },
});
