var pertanyaan
var soalhtml = ""
$( document ).ready(function() {
  $.getJSON("database.json", function(data){
    pertanyaan = Object.entries(data)
    for(pert of pertanyaan){
      soalan = pert[1];
      soalhtml += `<div class="card">
      <h3>`
      soalhtml += soalan.soal.replace(/\\n/g, "<br>")
      soalhtml +=`</h3>`
      soalhtml +=`<div class="alert `
      if(soalan.benar == "A"){
        soalhtml += `alert-success`
      }else{
        soalhtml += `alert-danger`
      }
      soalhtml += `" role="alert">`
      soalhtml += soalan.a
      soalhtml += `</div>`
      soalhtml +=`<div class="alert `
      if(soalan.benar == "B"){
        soalhtml += `alert-success`
      }else{
        soalhtml += `alert-danger`
      }
      soalhtml += `" role="alert">`
      soalhtml += soalan.b
      soalhtml += `</div>`
      soalhtml +=`<div class="alert `
      if(soalan.benar == "C"){
        soalhtml += `alert-success`
      }else{
        soalhtml += `alert-danger`
      }
      soalhtml += `" role="alert">`
      soalhtml += soalan.c
      soalhtml += `</div>`
      soalhtml +=`<div class="alert `
      if(soalan.benar == "D"){
        soalhtml += `alert-success`
      }else{
        soalhtml += `alert-danger`
      }
      soalhtml += `" role="alert">`
      soalhtml += soalan.d
      soalhtml += `</div>`
      if(soalan.e!='' && soalan.e!=' '){
        soalhtml +=`<div class="alert `
      if(soalan.benar == "E"){
        soalhtml += `alert-success`
      }else{
        soalhtml += `alert-danger`
      }
      soalhtml += `" role="alert">`
      soalhtml += soalan.e
      soalhtml += `</div>`
      }
      soalhtml += `</div>`
    }
    $(".card-container").html(soalhtml);
  });
});
$("#search").on("keyup", function() {
   var searchValue = $(this).val().trim().toLowerCase();
   $(".card").each(function(index) {
       $row = $(this);
       var rowText = $row.find("h3").text().trim().toLowerCase();
       if (rowText.indexOf(searchValue) > -1) {
         $row.show();
       } else {
         $row.hide();
       }
   });
});

