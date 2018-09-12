$(function () {

  // 页面滚动区域
  mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005
	});

  // 轮播图区域
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
  });
})