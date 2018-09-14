$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });


  $('.leftCate').on('tap', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var id = $(this).attr('id');

    secondCate(id);
  })

  $.ajax({
    type: "get",
    url: " /category/queryTopCategory",
    dataType: "json",
    success: function (response) {
      var html = template('leftCateTpl', response);
      $('.leftCate').html(html).children().eq(0).addClass('active');
    }
  });
  var id = 1;
  secondCate(id);


  function secondCate(id) {
    $.ajax({
      type: "get",
      url: "/category/querySecondCategory",
      data: {
        id: id
      },
      dataType: "json",
      success: function (response) {
        if (response.rows) {
          var html = template('rightCateTpl', response);
          console.log(response)
          $('.rightCate').html(html);
        } else {
          $('.rightCate').html('暂无数据');
        }
      }
    });
  }

})