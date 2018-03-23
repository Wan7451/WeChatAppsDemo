
const KEY_UER_ID = "UERID";
const KEY_TOKEN = "TOKEN";
var  DEBUG = require("../config.js").isDebug;

/**
 * 获取请求需要的Header
 */
function getHttpHeader() {
  var userId = wx.getStorageSync(KEY_UER_ID);
  var token = wx.getStorageSync(KEY_TOKEN);

  return {
    'userId': userId,
    'token': token,
    'content-type': 'application/x-www-form-urlencoded'
  };
}

/**
 * 缓存header中的数据
 */
function saveHttpHeader(userId, token) {
  wx.setStorageSync(KEY_UER_ID, userId);
  wx.setStorageSync(KEY_TOKEN, token);
}

/**
 * 发起请求
 * 
 * req.url    请求地址
 * req.data   请求参数
 * req.success  服务返回的确数据，data中的数据
 */
function request(req) {
  if (DEBUG){
    console.log("======>url:" + req.url);
    console.log("======>params:" + Obj2String(req.data));
    console.log("======>header:" + Obj2String(getHttpHeader()));
  }
  wx.showLoading({
    title: '',
  });
  wx.request({
    url: req.url,
    data: req.data,
    header: getHttpHeader(),
    method: "POST",
    success: function (res) {
      if (DEBUG) {
        console.log("======>result:" + Obj2String(res.data));
        console.log("======>result:" + Obj2String(res.data.data));
      }
      var data = getResultData(res);
      if (data) {
        req.success(data);
      }
      wx.hideLoading();
    },
    fail: function ({ errMsg }) {
      if (DEBUG) {
        console.log("======>error:" + Obj2String(errMsg));
      }
      handleFail(errMsg);
      wx.hideLoading();
    }

  })
}


function Obj2String(obj){
  var description = "";
  for (var i in obj) {
    description += i + " = " + obj[i] + "\t";
  }
  return description;
}
 



/**
 * 处理 wxRequest 失败
 * 
 * 多为微信、网络等问题
 */
function handleFail(res) {
  if (!res) {
    return;
  }

  wx.showToast({
    title: res.data,
    icon: "none"
  });
}

/**
 * 处理 wxRequest 成功后返回的数据
 * 
 * 返回 服务其中 data 的数据
 */
function getResultData(res) {
  //网络错误
  if (res.statusCode != 200) {
    showErrorToast(res.errMsg);
    return;
  }
  //服务器返回 null
  var data = res.data;
  if (!data) {
    showErrorToast();
    return;
  }
  //服务器返回数据处理
  if (data.retCode == 0) {
    //返回的正确数据
    return data.data;
  } else if (data.msg) {
    //返回的错误信息
    showErrorToast(data.msg);
  } else {
    //处理错误
    showErrorToast();
  }
}

/**
 * 错误提示
 */
function showErrorToast(msg) {
  wx.showToast({
    title: msg ? msg : "服务器异常",
    icon: "none",
    duration: 2000
  });
}




module.exports = {
  saveHttpHeader, request
}