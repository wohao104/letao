$(function () {

  mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005
	});
  
  
})
    function getKeyword(prase, key) {
      var data = prase.substr(prase.indexOf('?') + 1).split('&');
      for (let i = 0; i < data.length; i++) {
        var arr = data[i].split('=');
        if (arr[0] == key) {
          return arr[1];
        }
      }
    }