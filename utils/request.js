import axios from "axios";
import qs from "qs";
import { Toast } from "vant"; //可根据实际项目引用，第三方库（若api报错，则弹窗提示信息）

const successCode = 1; //接口成功响应状态码，具体以项目为准

// 创建axios实例
const service = axios.create({
  baseURL: "https://api-group-4-asjk823njsdk-asdjkm32edmk.uiy4.com", // api的base_url，以实际项目为准
  timeout: 5000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // if (store.getters.token) {
    //     config.headers['token'] = getToken() // 让每个请求携带token--['token']为自定义key 请根据实际情况自行修改
    // }

    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== successCode) {
      // Toast.fail(res.msg);
      Toast(res.msg);
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Toast.fail(error.message);
    return Promise.reject(error);
  }
);

export default service;

/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {account:"sdafds",
pwd:"123" }) {
  console.log(data,'9999')
  return new Promise((resolve, reject) => {
    service.post(url, qs.stringify(data)).then(
      (response) => {
        // console.log(response.data.code)
        resolve(response);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
