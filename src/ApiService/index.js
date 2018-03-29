import Vue from 'vue';
const Qs = require('qs');

const httpRequest = {
    cancelableGet: () => {

    },
    get: (url, token, params, format = 'brackets') => {
        let axios = intercept(token);
        return axios.get(url, {
            params,
            paramsSerializer: function(params) {
                return Qs.stringify(params, {
                    arrayFormat: format
                });
            },

        })
        .then(response => Promise.resolve(response))
        .catch(error =>  Promise.reject(error));
    },
    put: (url, token, request) => {
        let axios = intercept(token);
        return axios.post(url, request)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },
    post: (url, token, request) => {
        let axios = intercept(token);
        return axios.post(url, request)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },
    patch: (url, token, request) => {
        let axios = intercept(token);
        return axios.patch(url, request)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    },
    delete: (url, token, request) => {
        let axios = intercept(token);
        return axios.delete(url, request)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
};

const intercept = (token) => {
    let axios = Vue.prototype.$http;
    if (typeof token === 'string' && token !== '') {
        axios.defaults.headers.common['Authorization']  = `Bearer ${token}`;
    }
    // Add a response interceptor
    axios.interceptors.response.use(response => {
        // Do something with response data
        return response;
    }, error => {
        console.log(error);
        // Do something with response error
        return Promise.reject(error);
    });

    /*
    axios.interceptors.request.use(config => {
        if (config.headers['Content-Type'] && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
          config.transformRequest = (data) => {
            const str = [];
            Object.keys(data).forEach(key => str.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`));
            return str.join('&');
          };
        }
        return config;
    }, error => Promise.reject(error));
    */
    return axios;
} 

export default httpRequest;
