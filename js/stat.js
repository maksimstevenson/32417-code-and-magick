window.renderStatistics = function(ctx,names,times){
    var HISTOGRAM_HEIGHT = 150;
    var COLUMN_WIDTH = 40;
    var GAP = 50;
    // function for creating a cloud
    var renderCloud = function (ctx,x,y,height,width,color){
        ctx.fillStyle = color;
        ctx.fillRect(x,y,width,height);
 } 
  // function for text
    var renderText = function (str,x,y){
        ctx.fillStyle = '#17191b';
        ctx.font = '16px PT Mono';
        ctx.textBaseLine = 'hanging';
        ctx.fillText(str,x,y);
    }
 // function to find max time
   var findTime = function(times){
       var maxTime = 0;
       for(i = 0;i < times.length; i++){
          if(times[i] > maxTime){
             maxTime = times[i];
         }
       }
       return maxTime;
   }

    renderCloud(ctx,110,20,270,420,'rgba(0,0,0,0.7)');
    renderCloud(ctx,100,10,270,420,'#fff');
    renderText('Ура вы победили!',240,40);
    renderText('Список результатов:',240,60);

    //message
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#121314';
}
