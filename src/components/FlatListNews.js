import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Mixins} from '../styles';
import {getNews} from '../services/news/news';
import {useSelector, useDispatch} from 'react-redux';
import {NewsItemComponent} from './';
import {ADD_PAGE} from '../reducers/actionsTypes';

const FlatListNews = () => {
  const dispatch = useDispatch();
  const {sourceId, page} = useSelector(state => state.NewsReducer);
  const [news, setNews] = useState([]);
  const renderItem = ({item}) => (
    <NewsItemComponent key={item.url} news={item} />
  );

  useEffect(async () => {
    console.log('sourceId', sourceId);
    await getNews(sourceId, page).then(response => {
      console.log('News', response.data.articles.length);
      setNews(response.data.articles);
    });
  }, [sourceId]);

  const getMoreNews = async () => {
    await getNews(sourceId, page + 1).then(response => {
      dispatch({type: ADD_PAGE});
      console.log('Chamou aqui');
      const newData = response.data.articles;
      console.log(newData.length);
      setNews(oldData => [...oldData, ...newData]);
    });
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      onEndReached={getMoreNews}
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
