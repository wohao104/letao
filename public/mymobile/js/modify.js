$(function(){

  $('.getcode').on('tap',function(){
    $.ajax({
      type: "get",
      url: "/user/vCodeForUpdatePassword",
      dataType: "json",
      success: function (response) {
        $('.getcode').html(response.vCode)
      }
    });
  })

  $('#modify').on('tap',function(){
    var oldPassword = $('#oldPassword').val().trim();
    var newPassword = $('#newPassword').val().trim();
    var againPassword = $('#againPassword').val().trim();
    var vCode = $('#userCode').val().trim();
    if (!oldPassword) {
      mui.toast('请输入原密码');
      return;
    }
    if (newPassword !== againPassword) {
      mui.toast('两次输入密码不一致');
      return;
    }
    $.ajax({
      type: "post",
      url: "/user/updatePassword",
      data: {
        'oldPassword':oldPassword,
        'newPassword':newPassword,
        'vCode':vCode
      },
      dataType: "json",
      success: function (response) {
        if (response.success) {
          mui.toast('修改密码成功');
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