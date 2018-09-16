$(function () {
  var picker = new mui.PopPicker({
    layer: 3
  });
  picker.setData(cityData);
  var address;

  var editaddress = localStorage.getItem('editAddress');
  var result =  JSON.parse(editaddress)

  var id = result.id;
  
  $('#addressDetail').val(result.addressDetail);
  $('#recipients').val(result.recipients);
  $('#postcode').val(result.postCode);
  $('#address').val(result.address);

  $('#address').on('tap', function () {
    picker.show(function (select) {
      address = select[0].text + select[1].text + select[2].text;
      $('#address').val(address);
    });
  })
  $('.confirm').on('tap', function () {
    var addressDetail = $('#addressDetail').val().trim();
    var recipients = $('#recipients').val().trim();
    var postcode = $('#postcode').val().trim();

    if (!addressDetail) {
      mui.toast('请输入详细地址');
      return;
    }
    if (!recipients) {
      mui.toast('请填写收货人')
      return;
    }
    if (!postcode) {
      mui.toast('请填写邮编')
      return;
    }
    if (!address) {
      mui.toast('请选择省市区')
      return;
    }
    $.ajax({
      type: "post",
      url: " /address/updateAddress",
      data: {
        'id':id,
        'address':address,
        'addressDetail':addressDetail,
        'recipients':recipients,
        'postcode':postcode
      },
      dataType: "json",
      success: function (response) {
        if (response.success) {
          mui.toast('修改地址成功！')
          setTimeout(function(){
            location.href = 'adress.html'
          },2000)
        }
      }
    });
  });


})