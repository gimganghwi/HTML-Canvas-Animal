function Polygon(x, y){

  var polygon = Object.create(drawable(x, y));

  polygon.headPoint = null;
  polygon.lastPoint = null;
  polygon.scanPoint = null;

  polygon.numPoint=0;

  polygon.draw = function(ctx, x, y){
    var drawPoint = headPoint;

    ctx.deginPath();
    drawPoint.draw(ctx, x + this.x, y + this.y);
    ctx.moveTo(drawPoint.x, drawPoint.y);
    while ( typeof ( drawPoint = drawPoint.nextPoint ) != undefined ){
      drawPoint.draw(ctx, x + this.x, y + this.y);
      ctx.lineTo(drawPoint.x, drawPoint.y);
    }
    ctx.stroke();
  };

  polygon.addPathTo = function(x, y){
    if (targetPoint) {
      targetPoint.nextPoint = Point(x, y);
      lastPoint = lastPoint.nextPoint;
    } else {
      headPoint = Point(x, y);
      lastPoint = headPoint;
    }
    numPoint++;
  }

  polygon.resetScan = function(){
    scanPoint = headPoint;
  }

  polygon.nextScan = function(){
    var next = scanPoint;
    scanPoint = scanPoint.nextPoint;
    return next;
  }

  return polygon;
}
