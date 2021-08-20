import {api} from '../api';
import {API_KEY} from '@env';

let sourceCache = null;

export const getSources = async () => {
  //A simple cache to avoid unecessary call on the API
  return sourceCache == null
    ? api
        .get(`top-headlines/sources?apiKey=${API_KEY}`)
        .then(async data => {
          sourceCache = data;
          return data;
        })
        .catch(err => {
          console.log('err');
          console.log(err);
        })
    : sourceCache;
};
