import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID sJLBtJZLKNjaDVb5e94UGJ7q7LTtiN7gcGnO5zHaC00'
    }

});