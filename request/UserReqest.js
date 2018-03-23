

var url = require("../config.js").url;
var httpUtils = require("../util/HttpUtils.js");


function getUserInfo(){
  httpUtils.request({
    url: url.getUserInfo,
    data: {},
    success: function (data) {
      console.log(data);
      
    }
  }
  );
}




/**
 * 发起登录
 */
function login() {
  wx.login({
    success: function (res) {
      if (res.code) {
        console.log(res);
        var code = res.code;
       
        wx.getUserInfo({
          success: function (res) {
            var userInfo = res.userInfo
            var nickName = userInfo.nickName
            var avatarUrl = userInfo.avatarUrl
            var gender = userInfo.gender //性别 0：未知、1：男、2：女
            var province = userInfo.province
            var city = userInfo.city
            var country = userInfo.country
         

            loginRequest({
              code: code,
              nickName: nickName,
              avatar: avatarUrl,
              gender: gender,
              city: city,
              province: province
            });
         }
        })
      }
    },
    fail: function (res) {

    }
  })
}



function loginRequest(data) {
  httpUtils.request({
    url: url.loginUrl,
    data: data,
    success: function (data) {
      console.log(data);
      httpUtils.saveHttpHeader(data.userId, data.token);
    }
  }
  );
}

module.exports = {
  login, getUserInfo
}