
  $.ajax({
    type: "get",
    url: "/user/queryUserMessage",
    dataType: "json",
    asyne:false,
    success: function (response) {
      if (response.mobile) {
        var html = template('userinfo',response);
        $('.pic').html(html);
      }else{
        location.href = 'login.html';
      }
    }
  });
$(function(){

  $('.back').on('tap',function(){
    $.ajax({
      type: "get",
      url: "/user/logout",
      dataType: "json",
      success: function (response) {
        if (response.success) {
          mui.toast('退出成功');
          setTimeout(function(){
            location.href = 'login.html';
          },2000)
        }else{
          mui.toast(response.message);
        }
      }
    });
  })

})