function Circle(x, y, r){

  var circle = Object.create(drawable(x, y));

  circle.draw = funciton(ctx, x, y){
    Point(0 + x, 0 + y).draw(ctx, x + this.x, y + this.y);
    ctx.beginPath();
    ctx.arc(this.x + x , this.y + y, r, 0, 2*Math.PI);
    ctx.stroke();
  }

}
