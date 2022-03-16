import React from 'react';
import {
  Pressable,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Character, NavigationProps} from '../../app/types';

interface ListItemInterface {
  item: Character;
  containerStyle?: any;
}

const SIZE = 60;

export default ({item, containerStyle}: ListItemInterface) => {
  const {name, img} = item;
  const navigator = useNavigation<NavigationProps<'Detail'>>();

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={() => navigator.navigate('Detail', {item: item})}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: img}}
          style={{
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE,
          }}
          onLoadEnd={() => setIsLoading(false)}
        />
        {isLoading && <ActivityIndicator />}
      </View>

      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageContainer: {
    height: SIZE,
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 5,
  },
});
