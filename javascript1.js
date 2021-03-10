let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = 0;

function countUp(){
    msec += 1;
    if(msec > 9){
        msec = 0;
        sec += 1;
    }
    
    if(sec >59){
        sec = 0;
        min += 1;
    }
    
    if(min >59){
        min = 0;
        hour +=1;
    }
    
    $(".time").html(hour + ":" + min + ":" + sec + ":" + msec);
}


$(function(){
   $("#start").click(function(){
     if(timer === 0){
      timer = setInterval("countUp()" , 100);
     }
   });

   $("#stop").click(function(){
      clearInterval(timer); 
      timer = 0;
   });

  $("#reset").click(function() {
      msec = 0;
      sec = 0;
      min = 0;
      hour = 0;
      clearInterval(timer); 
      $(".time").html(hour + ":" + min + ":" + sec + ":" + msec);
      timer = 0;
    })
})
