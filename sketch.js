var cube;
var cube2;
var ground;
var wall;
var players = 1;
var direction = 2;
var direction2 = 2;
var jump = -5;
var jump2 = -5
var speed = 5;
var speed2 = 5;
var jumpPower;
var speedPower;
var title;
var obby1;
var obby2;
var button1;

var level = 0;
var objective = 0;

function preload() {
    greenWalkLeft = loadImage("Green_WalkingLeft.gif");
    greenWalkRight = loadImage("Green_WalkingRight.gif");
    greenFlyLeft = loadImage("Green_FlyingLeft.gif");
    greenFlyRight = loadImage("Green_FlyingRight.gif");
    yellowWalkLeft = loadImage("Yellow_WalkingLeft.gif");
    yellowWalkRight = loadImage("Yellow_WalkingRight.gif");
    yellowFlyLeft = loadImage("Yellow_FlyingLeft.gif");
    yellowFlyRight = loadImage("Yellow_FlyingRight.gif");
    jumpBoost = loadImage("JumpBoost.gif");
    speedBoost = loadImage("SpeedBoost.gif");
    titleImg = loadImage("Title.png");
    enemyLeft = loadImage("Enemie_Left.gif");
    enemyRight = loadImage("Enemie_Right.gif");
    starImg = loadImage("Star.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    title = createSprite(windowWidth/2, 50);
    title.addImage(titleImg);
    title.scale = 3;

    cube = createSprite(windowWidth/2, windowHeight - 200,); 
    cube.scale = 2.5;
    cube.addImage(greenWalkRight);
    cube.setCollider("rectangle", 0, 0);

    cube2 = createSprite(windowWidth, windowHeight - 200, 15, 15); 
    cube2.scale = 2.5;
    cube2.addImage(yellowWalkRight);
    cube2.visible = false;

    ground = createSprite(windowWidth/2, windowHeight - 50, windowWidth, 200);
    ground.shapeColor = "lightgrey";

    wall = createSprite(windowWidth/2 - random(400, 600), windowHeight - random(200, 300), 50, 50);
    wall.shapeColor = "lightgrey";

    wall2 = createSprite(windowWidth/2 + random(400, 600), windowHeight - random(200, 300), 50, 50);
    wall2.shapeColor = "lightgrey";

    wall3 = createSprite(windowWidth/2 - random(350, 450), windowHeight - random(450, 550), 50, 50);
    wall3.shapeColor = "lightgrey";

    wall4 = createSprite(windowWidth/2 + random(350, 450), windowHeight - random(450, 550), 50, 50);
    wall4.shapeColor = "lightgrey";

    wall5 = createSprite(windowWidth/2 - random(0, 200), windowHeight - random(300, 400), 50, 50);
    wall5.shapeColor = "lightgrey";

    wall6 = createSprite(windowWidth/2 + random(0, 200), windowHeight - random(300, 400), 50, 50);
    wall6.shapeColor = "lightgrey";

    speedPower = createSprite(wall3.x, wall3.y - 50, 10, 10);
    speedPower.addImage(speedBoost);
    speedPower.scale = 2.5;

    jumpPower = createSprite(wall4.x, wall4.y - 50, 10, 10);
    jumpPower.addImage(jumpBoost);
    jumpPower.scale = 2.5;

    obby1 = createSprite(windowWidth/2, windowHeight/2, 25, 25);
    obby1.addImage(enemyRight);
    obby1.scale = 3;
    obby1.visible = false;

    obby2 = createSprite(windowWidth/2, windowHeight/2 - 150, 25, 25);
    obby2.addImage(enemyLeft);
    obby2.scale = 3;
    obby2.visible = false;

    button = createSprite(windowWidth - 100, 50, 15, 15);
    button.addImage(starImg);
    button.scale = 3;
    button.visible = false;
}

function draw() {
    background("black");
    cube.velocityY += 0.25;
    cube2.velocityY += 0.25;
    colliding();
    borders();
    movement();
    drawSprites();  
    console.log(objective)
    
    if(level === 0 && objective <= 1) {
        titleLevel1();
    }

    if(level === 0 && objective >= 2 && objective <= 5) {
        titleLevel2();
    }


}

function colliding() {
    cube.collide(ground);
    cube.collide(wall);
    cube.collide(wall2);
    cube.collide(wall3);
    cube.collide(wall4);
    cube.collide(wall5);
    cube.collide(wall6);
    cube2.collide(ground);
    cube2.collide(wall);
    cube2.collide(wall2);
    cube2.collide(wall3);
    cube2.collide(wall4);
    cube2.collide(wall5);
    cube2.collide(wall6);
}

function borders() {
    if(cube.x < 0) {
        cube.x = 0;
    }

    if(cube.x > windowWidth) {
        cube.x = windowWidth;
    }

    if(cube.y < 0) {
        cube.y = 0;
        cube.velocityY += 2;
    }

    if(cube.y > windowHeight) {
        cube.x = windowWidth / 2;
        cube.y = windowHeight - 200;
    }

    if(cube2.x < 0) {
        cube2.x = 0;
    }

    if(cube2.x > windowWidth) {
        cube2.x = windowWidth;
    }

    if(cube2.y < 0) {
        cube2.y = 0;
        cube2.velocityY += 2;
    }

    if(cube2.y > windowHeight) {
        cube2.x = windowWidth / 2;
        cube2.y = windowHeight - 200;
    }
}

function movement() {
    if(keyDown("left")) {
        cube.x -= speed;
        direction = 1;
        cube.addImage(greenWalkLeft)
        cube.setCollider("rectangle", -2.5, 0);
    }

    if(keyWentUp("left")) {
        cube.setCollider("rectangle", 0, 0);
    }

    if(keyDown("a")) {
        cube2.x -= speed2;
        direction2 = 1;
        cube2.addImage(yellowWalkLeft)
    }

    if(keyDown("right")) {
        cube.x += speed;
        direction = 2;
        cube.addImage(greenWalkRight)
        cube.setCollider("rectangle", 2.5, 0);
    }

    if(keyWentUp("right")) {
        cube.setCollider("rectangle", 0, 0);
    }

    if(keyDown("d")) {
        cube2.x += speed2;
        direction2 = 2;
        cube2.addImage(yellowWalkRight)
    }

    if(keyWentUp("q") && players === 1) {
        cube2.x = windowWidth/2
        cube2.visible = true;
        players = players + 1
    }

    if(keyDown("space") || keyDown("up")) {
        cube.velocityY = jump;
        if(direction === 1) {
            cube.addImage(greenFlyLeft)
        }
        if(direction === 2) {
            cube.addImage(greenFlyRight);
        }
    }

    if(keyWentUp("space") || keyWentUp("up")) {
        if(direction === 1) {
            cube.addImage(greenWalkLeft)
        }
        if(direction === 2) {
            cube.addImage(greenWalkRight);
        }
    }

    if(keyDown("down")) {
        cube.velocityY = 20;
    }

    if(keyDown("w")) {
        cube2.velocityY = jump2;
        if(direction2 === 1) {
            cube2.addImage(yellowFlyLeft)
        }
        if(direction2 === 2) {
            cube2.addImage(yellowFlyRight)
        }
    }

    if(keyWentUp("w")) {
        if(direction2 === 1) {
            cube2.addImage(yellowWalkLeft)
        }
        if(direction2 === 2) {
            cube2.addImage(yellowWalkRight);
        }
    }

    if(keyDown("s")) {
        cube2.velocityY = 20;
    }

}

function titleLevel1() {
    textAlign(CENTER);
    fill("white");
    textSize(20);
    text("Try grabbing the power-ups!", windowWidth/2, windowHeight/2 - 215);
    fill("black");

    if(objective === 0) {
        text("Move with arrows and jump with the spacebar!", windowWidth/2, windowHeight - 50);
    }
    if(objective === 1) {
        text("If you wanna play with a friend, press Q to join in and move with WASD", windowWidth/2, windowHeight - 50);
    }

    if(cube.isTouching(speedPower)) {
        speed = speed + 5;
        objective += 1;
        speedPower.remove();
    }

    if(cube.isTouching(jumpPower)) {
        jump = jump - 2.5;
        objective += 1;
        jumpPower.remove();
    }

    if(cube2.isTouching(speedPower)) {
        speed2 = speed2 + 5;
        objective += 1;
        speedPower.remove();
    }

    if(cube2.isTouching(jumpPower)) {
        jump2 = jump2 - 2.5;
        objective += 1;
        jumpPower.remove();
    }
}

function titleLevel2() {
    title.visible = false;
    if(objective === 2) {
        cube.x = windowWidth/2;
        cube.y = windowHeight - 200;
        cube2.x = windowWidth/2 - 20;
        cube2.y = windowHeight - 200;
        objective += 1;
    }
    obby1.visible = true;
    obby1.shapeColor = "red";

    obby2.visible = true;
    obby2.shapeColor = "red";

    wall.y = windowHeight/2 + 50;
    wall.x = windowWidth/2 - 50;
    wall.width = windowWidth - 100;
    wall.height = 50;
    wall2.y = windowHeight/2 - 200;
    wall2.x = windowWidth/2 + 50;
    wall2.width = windowWidth - 100;
    wall2.height = 50;
    wall3.visible = false;
    wall3.setCollider("circle", 0, 0, 0);
    wall4.visible = false;
    wall4.setCollider("circle", 0, 0, 0);
    wall5.visible = false;
    wall5.setCollider("circle", 0, 0, 0);
    wall6.visible = false;
    wall6.setCollider("circle", 0, 0, 0);

    if(obby1.y === windowHeight/2) {
        obby1.addImage(enemyRight);
        obby1.velocityX = 10;
        if(obby1.x >= windowWidth) {
            obby1.y = windowHeight/2 - 1;
        }
    }

    if(obby1.y === windowHeight/2-1) {
        obby1.addImage(enemyLeft);
        obby1.velocityX = -10;
        if(obby1.x <= 0) {
            obby1.y = windowHeight/2;
        }
    }

    if(obby2.y === windowHeight/2-150) {
        obby2.addImage(enemyLeft);
        obby2.velocityX = -10;
        if(obby2.x <= 0) {
            obby2.y = windowHeight/2 - 151;
        }
    }

    if(obby2.y === windowHeight/2-151) {
        obby2.addImage(enemyRight);
        obby2.velocityX = 10;
        if(obby2.x >= windowWidth) {
            obby2.y = windowHeight/2 - 150;
        }
    }

    if(cube.isTouching(obby1) || cube.isTouching(obby2)) {
        cube.x = windowWidth/2;
        cube.y = windowHeight - 200;
    }

    if(cube2.isTouching(obby1) || cube2.isTouching(obby2)) {
        cube2.x = windowWidth/2;
        cube2.y = windowHeight - 200;
    }

    if(objective === 3) {
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Don't touch the robots!", windowWidth/2, windowHeight - 50);
            if(cube.isTouching(button)) {
                objective += 1;
            }
            if(cube2.isTouching(button)) {
                objective += 1;
            }
    }

    button.visible = true;
    button.shapeColor = "orange";

    if(objective === 4) {
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Go back! Collect the stars to finish the levels!", windowWidth/2, windowHeight - 50);
        button.y = windowHeight - 200;
        if(cube.isTouching(button)) {
            objective += 1;
        }
        if(cube2.isTouching(button)) {
            objective += 1;
        }
    }

    if(objective === 5) {
        wall.width = 0;
        wall.x = -1000
        wall2.width = 0;
        wall2.x = -1000;
        wall3.x = -1000;
        wall4.x = -1000;
        wall5.x = -1000;
        wall6.x = -1000;
        obby1.x = -1000;
        obby1.velocityX = 0;
        obby2.x = -1000;
        obby2.velocityX = 0;
        button.x = -1000;
        textAlign(CENTER);
        textSize(20);
        fill("black");
        text("Thanks for playing the BETA version... Updates coming soon!", windowWidth/2, windowHeight - 50);
    }
    

}