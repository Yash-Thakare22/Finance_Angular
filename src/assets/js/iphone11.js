$(document).ready(function () {

    $('.color-choose input').on('click', function () {
       var headphonesColor = $(this).attr('data-image');
 
       $('.active').removeClass('active');
       $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
       $(this).addClass('active');
    });
 
 });
 function my17() {
    var x = 1099150 / 3;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my18() {
    var x = 1099150 / 6;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my19() {
    var x = 1099150 / 9;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }
 function my20() {
    var x = 1099150 / 12;
    var n = x.toFixed(2);
    document.getElementById("demo").innerHTML = n;
 }