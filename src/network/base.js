import axios from "axios";

// 创建 axios 实例
const service = axios.create({
    // api
    baseURL: 'http://localhost:9090',
    // 请求超时时间
    timeout: 90000
})

const get = (url, params) => {
    return service.get(url, params).then(data => data)
}


export {
    get,
    service
}
