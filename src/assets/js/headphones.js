$(document).ready(function () {

    $('.color-choose input').on('click', function () {
       var headphonesColor = $(this).attr('data-image');
 
       $('.active').removeClass('active');
       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
       $(this).addClass('active');
    });
 
 });
 function my13() {
    var x = 12150 / 3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my14() {
    var x = 12150 / 6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my15() {
    var x = 12150 / 9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my16() {
    var x = 12150 / 12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }