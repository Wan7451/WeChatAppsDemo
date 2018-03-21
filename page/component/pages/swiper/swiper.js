// page/component/pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521620206198&di=c58d5728f107093d3421abdd49a1f0d2&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff9198618367adab45913c15e87d4b31c8601e4e8.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521620675551&di=08e20d2b0ea2e61d8cbd9ce487684922&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8326cffc1e178a82f7ebe2b9fa03738da877e8d0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521620206196&di=4f2716560d6742bd225414767dd2c75e&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa1ec08fa513d26976ad3ce4059fbb2fb4316d8af.jpg'
    ],
    indicatorDots:true,
    duration:500,
    interval:2000,
    autoplay:true,
    vertical:false,
    circular:true
  },

  changeIndicatorDots: function(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    });
  },


  autoplay: function(e){
    this.setData({
      autoplay: !this.data.autoplay
    });
  },

  vertical: function(e){
      this.setData({
        vertical: !this.data.vertical
      });
  },

  durationChange: function(e){
      this.setData({
        duration:e.detail.value
      });
  },

  circular: function(e){
      this.setData({
        circular : !this.data.circular
      });
  },

  intervalChange: function(e){
    this.setData({
      interval:e.detail.value
    });
  },

  pageChanged: function(e){
    console.log(e.detail.current);
    //0  1`  2
    console.log(e.detail.source);
    //autoplay  touch 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})