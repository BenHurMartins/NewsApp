import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Mixins} from '../styles';
import {getNews} from '../services/news/news';
import {useSelector} from 'react-redux';
import {} from '../reducers/actionsTypes';

const FlatListNews = () => {
  const {sourceId, page} = useSelector(state => state.NewsReducer);
  const [news, setNews] = useState([]);
  const renderItem = ({item}) => <Text>{item.title}</Text>;

  useEffect(async () => {
    console.log('sourceId', sourceId);
    await getNews(sourceId, page).then(response => {
      console.log('News', news);
      setNews(response.data.articles);
    });
  }, [sourceId]);

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      // onEndReached={getMoreResults}
      onEndReachedThreshold={0.7}
    />
  );
};

export default FlatListNews;

const styles = StyleSheet.create({
  flatListContainer: {
    width: Mixins.DEVICE_WIDTH,
    alignItems: 'center',
  },
});
