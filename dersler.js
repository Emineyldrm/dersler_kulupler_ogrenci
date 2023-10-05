$(document).ready(function () {
  $("#ekle").click(function () {
    $("#exampleModal").modal("show");
    /*Ders Ekle butonuna tıklandığında id=exampleModal olan modal açılacak */
  });
  $("#a0").click(function () {
    var guncel = row.children(".gizli");
    if (guncel.is(":visible")) {
      guncel.hide();
    } else {
      $(".gizli").hide();
      guncel.show();
    }
  });

  /*
 .change metodu bir dinleyici yöntem 
  */
  $("input[type='checkbox']").change(function () {
    /*
  Sayfadaki tüm checkbox ları seçer durumları değiştiğinde bir dinleyici ekler. Yani herhangi bir checkbox öğesinin 
  durumu değiştiğinde çaşışacak olan bir işlem tanımlar.
   */
    var checked = $("input[type='checkbox']:checked").length;
    /*sınıfı checked olan checkboxları sayar ve sayısını değişkene atar */
    if (checked > 0) {
      $("#guncel").show();
      /*seçili checkbox varsa güncelleme yani id si guncel olan bölüm görünür */
    } else {
      $("#guncel").hide();
      /*seçili checkbox yoksa güncelleme yani id si gizli olan bölüm gizler */
    }
  });

  $("#sil").click(function () {
    var selectedRows = $(".a0 input:checked").closest("tr");
    /*
    .a0 sınıfına sahip tablo satırları içerisinde input değeri checked olan checkbox öğelerini seçer.
    .closest("tr") metodu seçilen checkbox öğelerine ait en yakın tablo satırı <tr> öğelerini bulur.
    Yani seçili checkbox öğelerinin içinde bulunduğu tablo satırlarını seçer.
    */
    selectedRows.remove(); /* Seçilen tablo satır(ların)ı siler*/
  });
});
