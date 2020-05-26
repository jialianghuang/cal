$( document ).ready(function() {
    $(".ops").click(function(){
       let result = $("#result").val();
        if(result.slice(-1) != "+" && result.slice(-1) != "-" && result.slice(-1) != "*"&& result.slice(-1) != "/")
        {$("#result").val($("#result").val()+$(this).html());       
    }
});
$(".dot").click(function(){
  let result = $("#result").val();
   if(result.slice(-1) != ".")
   {$("#result").val($("#result").val()+$(this).html());       
}
});
    $(".num").click(function(){
       $("#result").val($("#result").val()+$(this).html());             
     });
     $("#equals").click(function(){
     $("#result").val(eval($("#result").val()));
     });
     $(".clear").click(function(){
        $("#result").val("");             
      });
});
