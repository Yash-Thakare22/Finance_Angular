$(document).ready(function () {

    $('.color-choose input').on('click', function () {
       var headphonesColor = $(this).attr('data-image');
 
       $('.active').removeClass('active');
       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
       $(this).addClass('active');
    });
 
 });
 function my29() {
    var x = 30149 / 3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my30() {
    var x = 30149 / 6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my31() {
    var x = 30149 / 9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my31() {
    var x = 30149 / 12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }