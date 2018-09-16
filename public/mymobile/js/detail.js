$(function () {

  var url = location.href;
  var id = getKeyword(url, 'id');
  var size = 0;
  var num = 1;
  var maxNum = 1;
  $.ajax({
    type: "get",
    url: "/product/queryProductDetail",
    data: {
      'id': id
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
      var html = template('product', response)
      maxNum = response.num;
      $('.my-content').html(html);
    }
  });

  $('.my-content').on('tap', '.detail-size span', function () {
    $(this).addClass('active').siblings('span').removeClass('active');
    size = $(this).html();   
  })

  $('.my-content').on('tap','.reduce',function(){
    num = $('.num').val();
    num--;
    if (num< 1) {
      num = 1;
    }
    $('.num').val(num);    
  })
  
  $('.my-content').on('tap','.plus',function(){
    num = $('.num').val();
    num++;
    if (num > maxNum) {
      num = maxNum
    }
    $('.num').val(num); 
  })

  $('.my-content').on('tap','#addCart',function(){
    if (!size) {
      mui.toast('请选择尺码')
      return;
    }    
    $.ajax({
      type: "post",
      url: "/cart/addCart",
      data: {
        'productId':id,
        'num':num,
        'size':size
      },
      dataType: "json",
      success: function (response) {
        if (response.success) {
          mui.toast('添加购物车成功');
        }else(
          mui.toast(response.message)
        )
      }
    });
  })

})