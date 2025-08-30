

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["22abfcaf-1fdb-4c4f-bb1f-193dda530cda","dc2fb588-3a43-4b9d-bb26-8df4855040e8"],"propsByKey":{"22abfcaf-1fdb-4c4f-bb1f-193dda530cda":{"name":"beachball_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"7l9Hwiy_ER4ZdZRxIUHC7uQbA65.B5Yy","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/22abfcaf-1fdb-4c4f-bb1f-193dda530cda.png"},"dc2fb588-3a43-4b9d-bb26-8df4855040e8":{"name":"wall","sourceUrl":null,"frameSize":{"x":100,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"JcEj7YcKJQFTzxScoAATb28bhhB9fgek","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":19},"rootRelativePath":"assets/dc2fb588-3a43-4b9d-bb26-8df4855040e8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

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
  text("SCORE:", 25, 25);
  textFont("Arial");
  textAlign(CENTER, TOP);
  textSize(16);
  stroke("red");
  text(src, 75, 15);
  textFont("Arial");
  textSize(16);
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

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
