$(document).ready(function() {

   $("#right-menu > li").mouseenter(function(){
      $(this).find(".dropdown-content").show();
   });

   $("#right-menu > li").mouseleave(function(){
      $(this).find(".dropdown-content").hide();
   });
});
