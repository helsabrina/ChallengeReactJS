import axios from 'axios';


const api = axios.create({
    baseURL: `https://www.reddit.com/r/react.json`,
});

export default api;

