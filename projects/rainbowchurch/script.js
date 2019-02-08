(function($){
  $(window).on("load",function(){
    $("#content-5").mCustomScrollbar({
      axis:"x",
      theme:"dark-thin",
      scrollbarPosition: "inside",
      autoExpandScrollbar:false,
      advanced:{autoExpandHorizontalScroll:true}
    });
  });
})(jQuery);



// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}
