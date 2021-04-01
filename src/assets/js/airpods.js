$(document).ready(function () {

    $('.color-choose input').on('click', function () {
       var headphonesColor = $(this).attr('data-image');
 
       $('.active').removeClass('active');
       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
       $(this).addClass('active');
    });
 
 });
 function my1() {
    var x = 25050 / 3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my2() {
    var x = 25050 / 6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my3() {
    var x = 25050 / 9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my4() {
    var x = 25050 / 12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }