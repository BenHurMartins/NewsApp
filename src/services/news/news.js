import {api} from '../api';
import {API_KEY} from '@env';

let newsCache = {};

export const getNews = async (source, page) => {
  if (newsCache[`${source}${page}`]) return newsCache[`${source}${page}`];

  return api
    .get(
      `everything/?sources=${source}&apiKey=${API_KEY}&pageSize=20&sortBy=popularity&page=${page}`,
    )
    .then(async data => {
      newsCache[`${source}${page}`] = data;
      return data;
    })
    .catch(err => {
      console.log(err);
    });
};
