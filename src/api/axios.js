import axios from 'axios';

import { BE_APP_URL } from '../constents/app-constents';


export default axios.create({
  baseURL: BE_APP_URL
})