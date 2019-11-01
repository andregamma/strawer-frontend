import axios from 'axios';


export default axios.create({
  baseURL: `http://localhost:3666/api/v1/`
});
