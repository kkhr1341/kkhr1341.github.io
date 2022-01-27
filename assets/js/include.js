function header(){
  $.ajax({
      url: "/header.html",
      cache: false,
      success: function(html){
        $('body').prepend(html);
      }
  });
}function footer(){
  $.ajax({
      url: "/footer.html",
      cache: false,
      success: function(html){
        $('body').append(html);
      }
  });
}