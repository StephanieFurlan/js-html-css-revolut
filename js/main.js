$(document).ready(function() {
   console.log("ho");

   $(".nav-right__el").mouseenter(function(){

      $(this).find(".dropdown").show();
   });

   $(".nav-right__el").mouseleave(function(){

      $(this).find(".dropdown").hide();
   });
});
