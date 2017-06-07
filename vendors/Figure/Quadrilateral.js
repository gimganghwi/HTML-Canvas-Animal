function Quadriateral(x, y, _0x, _0y, _1x, _1y, _2x, _2y, _3x, _3y){

  var quadriateral = Object.create(Polygon(x,y));

  quadriateral._0 = Point(_0x || 0 , _0y || 0);
  quadriateral._1 = Point(_1x || 0 , _1y || 0);
  quadriateral._2 = Point(_2x || 0 , _2y || 0);
  quadriateral._3 = Point(_3x || 0 , _3y || 0);

  quadriateral.addPathTo(quadriateral._0.x, quadriateral._0.y);
  quadriateral.addPathTo(quadriateral._1.x, quadriateral._1.y);
  quadriateral.addPathTo(quadriateral._2.x, quadriateral._2.y);
  quadriateral.addPathTo(quadriateral._3.x, quadriateral._3.y);

  return quadriateral;
}
