function myFunction3() {
    var x = 99562/3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function myFunction6() {
    var x = 99562/6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function myFunction9() {
    var x = 99562/9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function myFunction12() {
    var x = 99562/12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 
 $(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
