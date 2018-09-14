var proData = {};
var page = 1;
var pageSize = 3;
proData.page = page;
proData.pageSize = pageSize;
$(function() {

  var keyword = getKeyword(location.href,'key')
  proData.proName = keyword;

  $.ajax({
    type: "get",
    url: "/product/queryProduct",
    data: proData,
    dataType: "json",
    success: function (response) {
      var html = template('proList',response);      
      $('.proBox').html(html);
    }
  });

})