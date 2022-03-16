import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {Character} from '../app/types';

interface DetailInterface {
  route: {
    params: {
      item: Character;
    };
  };
}

const {width} = Dimensions.get('window');

export default ({route}: DetailInterface) => {
  const {item} = route.params;

  return (
    <ScrollView>
      <Image source={{uri: item.img}} style={styles.image} />

      <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <View style={styles.row}>
          <Text>Nickname: </Text>
          <Text>{item.nickname}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text>{`Occupation: `}</Text>
          <View style={{alignItems: 'flex-end'}}>
            {item.occupation.map(
              (el: string, index: number, list: string[]) => (
                <Text key={index}>
                  {list.length !== index + 1 ? `${el}, ` : el}
                </Text>
              ),
            )}
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text>Status: </Text>
          <Text>{item.status}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text>Seasons: </Text>
          <Text>
            {item.appearance.map((s, i, a) =>
              a.length !== i + 1 ? `${s}, ` : s,
            )}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width * 1.5,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    borderTopWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
  },
});
