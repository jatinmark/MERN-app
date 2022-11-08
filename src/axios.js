import axios from 'axios'

const instance = axios.create({
    baseURL : "https://stark-plains-39250.herokuapp.com" 
});

export default instance