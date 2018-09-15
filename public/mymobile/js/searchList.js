var page = 1;
var pageSize = 3;
var price = 1;
var html = '';
var that;
var keyword;
$(function () {

  keyword = getKeyword(location.href, 'key')

  mui.init({
    pullRefresh: {
      container: '#refresh',
      up: {
        height: 50,
        auto: true,
        contentrefresh: "正在加载...",
        contentnomore: '没有更多数据了',
        callback: getProduct
      }
    }
  });

  $('#price').on('tap',function(){
    price = (price == 1)?2:1;
    page = 1;
    html = '';
    getProduct();
    mui('#refresh').pullRefresh().refresh(true);
  })


})

function getProduct(){
  if(!that){
    that = this;
  }
  $.ajax({
    type: "get",
    url: "/product/queryProduct",
    data: {
      'page':page++,
      'pageSize':pageSize,
      'price':price,
      'proName':keyword
    },
    dataType: "json",
    success: function (response) {
      html += template('proList', response);
      $('.proBox').html(html);
      console.log(response)
      that.endPullupToRefresh(response.data.length == 0);
    }
  })
}