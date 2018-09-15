$(function(){

  $('#loginBtn').on('tap',function(){
    var username = $('#username').val().trim();
    var password = $('#password').val().trim();
    if (!username) {
      mui.toast('用户名不能为空！')
      return;
    }
    if (!password) {
      mui.toast('密码不能为空！')
      return;
    }
    $.ajax({
      type: "post",
      url: "/user/login",
      data: {
        'username':username,
        'password':password
      },
      dataType: "json",
      success: function (response) {
        if (response.success) {
          mui.toast('登陆成功')
          setTimeout(function(){
            location.href = 'user.html';
          },2000)
        }else{
          mui.toast(response.message)
        }
      }
    });


  })



})