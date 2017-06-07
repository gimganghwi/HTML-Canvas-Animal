function Drawable(x, y, draw){

  var drawable = {};

  drawable.x = x || 0;
  drawable.y = y || 0;
  drawable.draw = draw || function(ctx, x, y){};

  return drawable;
}
