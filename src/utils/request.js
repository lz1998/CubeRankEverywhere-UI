import axios from 'axios'
import store from '@/store'

const service = axios.create({
    baseURL:process.env.BASE_URL
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    return data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service
