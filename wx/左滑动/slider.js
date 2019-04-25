// pages/address/manage/manage.js
var util = require('../../../utils/util.js');
// function filter(params, key) {
//   let newArray = [];
//   for (let i = 0; i < params.length;i++) {
//     const item = params[i];
//     if (item.addressId == key) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }
const app = getApp();
var that
Page({

    /**
     * 页面的初始数据
     */
    data: {
        block: [{ images: '', title: '+ 新建地址', func: 'newTap' }],
        data_block: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        that = this;
        that._loadAddressList();
    },
    touchS(e) {
        if (e.touches.length == 1) {
            this.startX = e.touches[0].clientX;
        }
    },
    touchM(e) {
        const that = this;
        const id = e.currentTarget.dataset.index;
        //单手指触发
        if (e.touches.length == 1) {
            let style = '';
            var moveX = e.touches[0].clientX;//移动的位置
            var disX = that.startX - moveX;//移动了多少像素
            disX = disX>120?120:disX;
            style = "transform: translateX(-" + disX + "rpx)";
            var data = that.data.data_block;
            data[id]['style'] = style;
            this.setData({
                data_block: data
            })
        }
    },
    touchE(e) {
        if (e.changedTouches.length == 1) {
            let style = '';
            const id = e.currentTarget.dataset.index;
            var moveX = e.changedTouches[0].clientX;//移动的位置
            var disX = that.startX - moveX;//移动了多少像素
            //大于60直接打开 小于60弹回
            if (disX>60) {
                style = "transform:translateX(-" + 120 + "rpx)"
            } else {
                style = "transform:translateX(0rpx)"
            }
            var data = that.data.data_block;
            data[id]['style'] = style;
            this.setData({
                data_block: data
            })
        }
    }
})