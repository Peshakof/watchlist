import axios from 'axios';
const KEY = 'AIzaSyDwpjyKQ_g9y0JHYp03Jo59mlJCseRsA-s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});