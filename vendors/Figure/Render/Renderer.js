function Render(canvas, drawable, x, y){

  var ctx = canvas.getContext('2d');
  drawable.draw(ctx, x, y);

}
