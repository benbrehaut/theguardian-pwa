import axios from 'axios';

const apiURL = 'https://content.guardianapis.com';

const config = {
  baseURL: `${apiURL}`,
  timeout: 10000,
  crossdomain: true,
  headers: {
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  params: {
    'api-key': process.env.REACT_APP_API_KEY
  }
}

const api = axios.create(config);

export default api;