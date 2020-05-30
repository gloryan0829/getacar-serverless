import axios from 'axios';

export default (url, method = 'get', payload = {}, options) => {
    const { timeout, withCredentials, responseType } = options || {};
    return axios({
        url,
        method,
        data: method === 'post' && payload,
        params: method === 'get' && payload,
        timeout: timeout || 60000, // 60초 timeout
        withCredentials: withCredentials || true, // CORS 관련 설정
        responseType: responseType || 'json', // response Type default : JSON,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    });
};
