$(function () {

  $('.getcode').on('tap', function () {
    $.ajax({
      type: "get",
      url: "/user/vCode",
      dataType: "json",
      success: function (response) {
        $('.getcode').html(response.vCode);
      }
    });
  })

  $('#register').on('tap', function () {
    var userName = $('#userName').val().trim();
    var userTel = $('#userTel').val().trim();
    var pwd = $('#pwd').val().trim();
    var againPwd = $('#againPwd').val().trim();
    var userCode = $('#userCode').val().trim();
    if (!userName) {
      mui.toast('用户名不能为空');
      return;
    }
    if (userTel.length != 11) {
      mui.toast('请填写正确的手机号');
      return;
    }
    if (pwd !== againPwd) {
      mui.toast('两次密码不一致');
      return;
    }
    $.ajax({
      type: "post",
      url: "/user/register",
      data: {
        'username': userName,
        'password': pwd,
        'mobile': userTel,
        'vCode': userCode
      },
      dataType: "json",
      success: function (result) {
        if (result.success) {
          mui.toast('注册成功');
          setTimeout(function () {

            location.href = "login.html";

          }, 2000)
        } else {
          mui.toast(result.message);
        }
      }
    });


  })


})