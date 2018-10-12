// pages/addPage/addPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.debug("onLoad--监听页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.debug("onReady--监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    concole.debug("onShow--监听页面显示");
  },

  onHide: function () {
    console.debug("onHide--监听页面的隐藏");
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.debug("onUnload--监听页面的卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.debug("onPullDownRefresh--页面相关事件处理函数--监听用户下拉动作");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.debug("onReachBottom--页面触底事件的处理函数");
  },
  onShareAppMessage: function () {
    console.debug("onShareAppMessage--用户点击右上角分享");
  }
})