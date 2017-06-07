function Bone(x, y, width){

  var Bone =Object.create(Drawable(x, y));

  Bone.width = width || 0;
  Bone.rightWidth = width/2;
  Bone.leftWidth = width/2;

  Bone.angle=Math.PI*0.5;
  Bone.rightPoint = Point(rightWidth * Math.cos(angle), rightWidth * Math.tan(angle) * -1);
  Bone.leftPoint = Point(leftWidth * Math.cos(angle) * -1 , leftWidth * Math.tan(angle));

  Bone.draw = function (ctx, x, y){
    Point(0 + x, 0 + y).draw(ctx, x + this.x, this.y);
    rightPoint.draw(ctx, x + this.x, y + this.y);
    leftPoint.draw(ctx, x + this.x, y + this.y);
    ctx.beginPath();
    ctx.moveTo(rightPoint.x, rightPoint.y);
    ctx.lineTo(leftPoint.x, leftPoint.y);
    ctx.stroke();
  }
}
