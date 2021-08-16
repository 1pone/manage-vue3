/**
 * axios二次封装
 */
import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import router from './../router'
const TOKEN_INVALID = "用户信息认证失败，请重新登录"
const NETWORK_ERROR = "网络请求异常，请稍后再试"

// axios实例对象，添加全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000

})

// 请求拦截
service.interceptors.request.use(req => {
    // TODO 添加 Token 请求头
    const headers = req.headers
    if (!headers.Authorization) headers.Authorization = 'wp'
    return req
})

// 响应拦截
service.interceptors.response.use(res => {
    const { code, data, msg } = res.data
    if (code === 200) return data // 成功码
    else if (code === 40001) { // 用户认证失败码
        ElMessage.error(msg || TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(NETWORK_ERROR)
        return Promise.reject(NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function requset(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data // 将data赋值为get请求的params
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi // 识别是否启用mockApi
    }
    return service(options)
}

// 赋予request函数请求方法属性，允许通过点request调用不同请求方法，增加请求方法灵活性
['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    requset[item] = (url, data, options) => {
        return requset({
            method: item,
            data,
            url,
            ...options
        })
    }
})

export default requset;
