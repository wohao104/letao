$(function () {

  mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005
  });
  
  mui('body').on('tap','a',function(){
    mui.openWindow({url:this.href});
  })
  
  
})
    function getKeyword(prase, key) {
      var data = prase.substr(prase.indexOf('?') + 1).split('&');
      for (var i = 0; i < data.length; i++) {
        var arr = data[i].split('=');
        if (arr[0] == key) {
          return arr[1];
        }
      }
    }