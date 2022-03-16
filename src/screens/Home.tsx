import React, {useContext} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';
import {useQuery} from 'react-query';

import getCharacters from '../app/api/getCharacters';
import {CACHE_TIME} from '../app/const';
import {Character} from '../app/types';
import ListItem from '../components/ListItem';
import Search from '../components/Search';
import {MainState} from '../app/context';

const {width} = Dimensions.get('window');
const itemWidth = (width - 80) / 3;

export default () => {
  const {isLoading, isError} = useQuery<Character[], any>(
    'characters',
    getCharacters,
    {
      cacheTime: CACHE_TIME,
      onSuccess: (data: Character[]) => setData(data),
    },
  );
  const [data, setData] = React.useState<Character[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const {state} = useContext(MainState);

  const handleItems = React.useMemo(() => {
    let temp = data;

    if (temp.length && search.length) {
      temp = temp.filter(({name}) =>
        name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (temp.length && state.filter.length) {
      temp = temp.filter(
        ({appearance}) =>
          appearance.filter(el => state.filter.includes(el)).length,
      );
    }
    console.log(state.filter);

    return temp;
  }, [data, search, state.filter]);

  if (isLoading || isError) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={handleItems}
        keyExtractor={(item: any) => item.char_id}
        renderItem={({item}) => (
          <ListItem
            item={item}
            containerStyle={{width: itemWidth, marginLeft: 10}}
          />
        )}
        ListHeaderComponent={<Search search={search} setSearch={setSearch} />}
        ListFooterComponent={() => <View style={{height: 50}} />}
        numColumns={3}
        columnWrapperStyle={{
          marginHorizontal: 20,
        }}
      />
    </>
  );
};
