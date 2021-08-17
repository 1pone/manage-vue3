/**
 * 环境变量封装
 */
const env = import.meta.env.MODE || 'prod' // import.meta.env 获取环境变量
const EnvConfig = {
    dev: {
        baseApi: 'http://localhost:3000/api',
        mockApi: 'https://mockapi.eolinker.com/m5SDjuc53363c1b584b51effed22a811c2d9c0250bda615'
    },
    test: {
        baseApi: '/',
        mockApi: ''
    },
    prod: {
        baseApi: '/',
        mockApi: ''
    }
}
export default {
    env,
    mock: true, //mock总开关
    ...EnvConfig[env], // 动态传递环境变量，解构封装
    namespace: 'manage', // localStorage命名空间
}