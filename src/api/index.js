import axios from 'axios';

export default {
    ajaxMainfestJson(data) {
        return axios({
            method: 'get',
            url: './manifest.json',
            params: data
        });
    }
};