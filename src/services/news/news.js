import {api} from '../api';
import {API_KEY} from '@env';

export const getNews = async (source, page) => {
  console.log('source id', source);
  return api
    .get(`top-headlines/?sources=${source}&apiKey=${API_KEY}&page=${page}`)
    .then(async data => {
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};
