$(document).ready(function() {
    $('.nav-link').on('click', function() {
    $(this).parents().siblings().children().removeClass('current');
    $(this).addClass('current');
  });
});



/*
$(document).ready(function() {
    if ($(".login").hasClass("void")) {
        $(".login").toggleClass("void");
        $(".user").addClass("void"); 
    } else {
        $(".login").addClass("void");
        $(".user").removeClass("void");
    } 
});

*/

/*
function userBarDisplayMode() {
   
   var x = document.getElementByClassName("login");
   var y = document.getElementByClassName("user");
   if (x.style.display === "none") {
      y.style.display === "inline-block";
    } else {
      y.style.display === "none"; 
    } 
}

userBarDisplayMode();

*/
    
