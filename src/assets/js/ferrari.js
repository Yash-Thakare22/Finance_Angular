$(document).ready(function () {

    $('.color-choose input').on('click', function () {
       var headphonesColor = $(this).attr('data-image');
 
       $('.active').removeClass('active');
       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
       $(this).addClass('active');
    });
 
 });
 function my9() {
    var x = 3169424 / 3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my10() {
    var x = 3169424 / 6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my11() {
    var x = 3169424 / 9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my12() {
    var x = 3169424 / 12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }