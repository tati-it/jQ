jQuery(document).ready(function(){
  jQuery("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });

  jQuery(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
}); 