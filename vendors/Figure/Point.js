function Point(x, y){

  var point = Object.create(drawable(x,y));

  point.draw = function(ctx, x, y){
    ctx.beginPath();
    ctx.arc(this.x + x , this.y + y, 5, 0, 2*Math.PI);
    ctx.fill();
  }

  return point;
};
