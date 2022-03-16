import React from 'react';
import {TextInput, Dimensions, StyleSheet} from 'react-native';

interface SearchInterface {
  search: string;
  setSearch: (text: string) => void;
}

const {width} = Dimensions.get('window');

export default ({search, setSearch}: SearchInterface) => {
  return (
    <TextInput
      onChangeText={text => setSearch(text)}
      value={search}
      placeholder="Type name..."
      placeholderTextColor="gray"
      style={styles.container}
      autoFocus={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: width - 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    color: 'black',
  },
});
