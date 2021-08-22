import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors, Mixins} from '../styles';
import {Divider, ThumbImage, UrlTextComponent} from './';
import {dateFormatter} from '../services/utils';

const NewsItemComponent = ({news}) => {
  const handleClick = () => {
    // dispatch({type: SET_ID, payload: source.id});
    // if (orientation.portrait) navigation.navigate('News');
  };

  return (
    <>
      <View style={styles.container} onPress={handleClick}>
        <View style={styles.titleContainer}>
          <ThumbImage url={news.urlToImage} />
          <Text style={styles.title}>{news.title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{news.description}</Text>
        </View>
        <UrlTextComponent url={news.url} />
        <View style={styles.authorContainer}>
          <Text style={styles.author}>Author: {news.author}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.publishedtime}>
            Published at: {dateFormatter(news.publishedAt)}
          </Text>
        </View>
      </View>
      <Divider style={{alignSelf: 'center', width: Mixins.DEVICE_WIDTH90}} />
    </>
  );
};

export default NewsItemComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    zIndex: 10,
    padding: 10,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 10,
    flexDirection: 'row',
  },
  title: {
    textAlign: 'justify',
    width: Mixins.DEVICE_WIDTH60,
    fontSize: Mixins.FONT_SIZE_REGULAR,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  descriptionContainer: {
    width: '90%',
    marginBottom: 10,
  },
  description: {
    fontSize: Mixins.FONT_SIZE_SMALL,
    fontWeight: '200',
    textAlign: 'justify',
  },
  authorContainer: {
    width: '90%',
    marginTop: 10,
  },
  author: {
    fontSize: Mixins.FONT_SIZE_SMALL - 2,
    fontWeight: '800',
    textAlign: 'justify',
    color: Colors.PRIMARY,
  },
  publishedtime: {
    fontSize: Mixins.FONT_SIZE_SMALL - 2,
    fontWeight: '300',
  },
});
