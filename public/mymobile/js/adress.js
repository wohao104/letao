$(function () {
  var result;
  $.ajax({
    type: "get",
    url: "/address/queryAddress",
    dataType: "json",
    success: function (response) {
      result = response;
      var html = template('userads', {
        'response': response
      });
      $('.mes').html(html);
    }
  });

  $('.mes').on('tap', '#del', function () {
    var id = $(this).parent().parent().data('id');
    var li = $(this).parent().parent()[0];
    mui.confirm('确定要删除吗？', function (res) {
      if (res.index) {
        $.ajax({
          type: "post",
          url: " /address/deleteAddress",
          data: {
            'id': id
          },
          dataType: "json",
          success: function (response) {
            if (response.success) {
              mui.toast('删除成功');
              setTimeout(function () {
                location.reload();
              }, 2000);
            }
          }
        });
      }else{
        mui.swipeoutClose(li);
      }
    })
  });

  $('.mes').on('tap', '#edit', function () {
    var id = $(this).parent().parent().data('id');
    for (let i = 0; i < result.length; i++) {
      if (id == result[i].id) {
        localStorage.setItem('editAddress',JSON.stringify(result[i]));
        location.href = 'editaddress.html';
      } 
    }
  })


})