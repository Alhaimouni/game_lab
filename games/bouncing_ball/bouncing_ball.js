var ball = createSprite(200, 200);
var wall = createSprite(200, 400);
ball.setAnimation("beachball_1");
wall.setAnimation("wall");
ball.scale = 0.1;
ball.velocityY = 4;
ball.velocityX = 4;
var src = 0;
function draw() {
  createEdgeSprites();
  ball.bounceOff(wall);
  ball.bounceOff(edges);
  wall.bounceOff(edges);
  ball.play();
  fill("yellow");
  background("green");
  text("SCORE:" + src, 25, 25);
  textFont("Arial");
  textSize(40);
  drawSprites();
  if (keyDown("right")) {
    wall.x = wall.x + 15;
  }
  if (keyDown("left")) {
    wall.x = wall.x - 15;
  }
  if (ball.isTouching(wall)) {
    src = src + 1;
  }
}
