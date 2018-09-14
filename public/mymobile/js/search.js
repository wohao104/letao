$(function(){

  $('#btnSearch').on('tap',function(){
    var keyword = $('#searchBox').val();
    if (!keyword.trim()) {
      alert('请输入关键字');
      return;
    }
    if (localStorage.getItem('keywords')) {
      var keywords = JSON.parse(localStorage.getItem('keywords'));
      keywords.unshift(keyword);
      localStorage.setItem('keywords',JSON.stringify(keywords));
    }else(
      localStorage.setItem('keywords',JSON.stringify([keyword]))
    )
    
    location.href = 'searchList.html?key='+keyword;
  })

  if (localStorage.getItem('keywords')) {
    var keywords = JSON.parse(localStorage.getItem('keywords'));
    var html = template('historykey',{keyword:keywords});
    $('.hisResult').html(html);
  }

  $('.historyDel').on('tap',function(){
    localStorage.removeItem('keywords');
    $('.hisResult').html('');
  })

})