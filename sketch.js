//variable declarations
var futuristicBg, prehistoricBg, medievalBg, hardcoreBg, commonBg, egyptBg;

var player, playerLeftImage, playerRightImage, playerAnima;

var invis_ground, invis_canvas;

var gun, gunImg, laser, laserImg;

var up, down, left, right;
var up_arr, down_arr, left_arr, right_arr;

var zombie, zomAnima, zombieGroup;
var knight1, knight2, knight1Anima, knight2Anima, knight1Group, knight2Group;
var dino, dinoAnima, dinoGroup;

var time1,
  time1Puzzle,
  time2,
  time2Puzzle,
  time3,
  time3Puzzle,
  time4,
  time4Puzzle;
var t1Img, t2Img, t3Img, t4Img;

var timeMachine, tMImage;

var form, form1;

var replay;

var light, lightImg;

var font;

var life;
var lives = 6;

var gameState = 0;

var lasermusic,
  lifeLose,
  zombieDie,
  dinosaurDie,
  knightDie,
  gameOverSound,
  jumpSound,
  partSound;

var energy_count = 0;
var part_count = 4;

var window, winTele;
var lol;

//defining function preload
function preload() {
  //load background image
  futuristicBg = loadImage("./images/futuristic.png");
  medievalBg = loadImage("./images/castle.png");
  prehistoricBg = loadImage("./images/prehistoric.png");
  hardcoreBg = loadImage("./images/hardcore.png");
  commonBg = loadImage("./images/common.jpg");
  egyptBg = loadImage("./images/egypt.png");

  win = loadImage("./images/win.png");
  winTele = loadImage("./images/winTele.png");

  //load animation of player when walking right
  playerRightImage = loadImage("./anime/player/soldier4.png");

  tMImage = loadImage("./images/time_machine.png");

  //load zombie animation
  zomAnima = loadAnimation(
    "./anime/zombie/1f.png",
    "./anime/zombie/2f.png",
    "./anime/zombie/3f.png",
    "./anime/zombie/4f.png",
    "./anime/zombie/5f.png"
  );

  //load knight 1 animation
  knight1Anima = loadAnimation(
    "./anime/knight/knight1/knight1.png",
    "./anime/knight/knight1/knight2.png",
    "./anime/knight/knight1/knight3.png",
    "./anime/knight/knight1/knight4.png",
    "./anime/knight/knight1/knight5.png",
    "./anime/knight/knight1/knight6.png",
    "./anime/knight/knight1/knight7.png",
    "./anime/knight/knight1/knight8.png",
    "./anime/knight/knight1/knight9.png",
    "./anime/knight/knight1/knight10.png",
    "./anime/knight/knight1/knight11.png",
    "./anime/knight/knight1/knight12.png",
    "./anime/knight/knight1/knight13.png"
  );

  //load knight 2 animation
  knight2Anima = loadAnimation(
    "./anime/knight/knight2/knight1.png",
    "./anime/knight/knight2/knight2.png",
    "./anime/knight/knight2/knight3.png",
    "./anime/knight/knight2/knight4.png",
    "./anime/knight/knight2/knight5.png",
    "./anime/knight/knight2/knight6.png",
    "./anime/knight/knight2/knight7.png",
    "./anime/knight/knight2/knight8.png",
    "./anime/knight/knight2/knight9.png"
  );

  //load dinosaur animation
  dinoAnima = loadAnimation(
    "./anime/dino/dino1.png",
    "./anime/dino/dino2.png",
    "./anime/dino/dino3.png",
    "./anime/dino/dino4.png",
    "./anime/dino/dino5.png",
    "./anime/dino/dino6.png",
    "./anime/dino/dino7.png",
    "./anime/dino/dino8.png",
    "./anime/dino/dino9.png",
    "./anime/dino/dino10.png",
    "./anime/dino/dino11.png",
    "./anime/dino/dino12.png",
    "./anime/dino/dino13.png",
    "./anime/dino/dino14.png",
    "./anime/dino/dino15.png",
    "./anime/dino/dino16.png",
    "./anime/dino/dino17.png",
    "./anime/dino/dino18.png"
  );

  //load gun and laser image
  gunImg = loadImage("./images/gun.png");
  laserImg = loadImage("./images/laser1.png");

  //load control help images
  up_arr = loadImage("./images/up.png");
  down_arr = loadImage("./images/down.png");
  left_arr = loadImage("./images/left.png");
  right_arr = loadImage("./images/right.png");

  //load image for various time machine parts
  t1Img = loadImage("./images/part1.png");
  t2Img = loadImage("./images/part2.png");
  t3Img = loadImage("./images/part3.png");
  t4Img = loadImage("./images/part4.png");

  //load image displayed as life icon
  lifeImg = loadImage("./images/heart.png");

  //load image displayed as energy icon
  lightImg = loadImage("./images/energy.png");

  //load font used in the entire game
  font = loadFont("./russo.ttf");

  //load music for laser shoot, life loss, zombie dead, game over, jump, part pickup, win, teleport
  lasermusic = loadSound("./sounds/laser.mp3");
  lifeLose = loadSound("./sounds/SPOILER_losealife.mp3");
  zombieDie = loadSound("./sounds/SPOILER_preview.mp3");
  dinosaurDie = loadSound("./sounds/dinosaurDie.mp3");
  gameOverSound = loadSound(
    "./sounds/SPOILER_Game_Over_2_Super_Mario_-_Sound_Effect_HD.mp3"
  );
  jumpSound = loadSound("./sounds/SPOILER_jump_2.mp3");
  partSound = loadSound("./sounds/SPOILER_pickupp.mp3");
  knightDie = loadSound("./sounds/SPOILER_preview.mp3");
}

//defining function setup
function setup() {
  //create sprite for canvas and invisible canvas (for shoot)
  var canvas = createCanvas(windowWidth, windowHeight);
  invis_canvas = createSprite(
    windowWidth / 2,
    0,
    windowWidth,
    windowHeight * 2
  );

  //create sprite for player
  player = createSprite(windowWidth / 3 - 170, windowHeight / 2 - 360, 40, 70);
  player.shapeColor = "white";

  //create sprite for invisible ground (to stop player from falling)
  invis_ground = createSprite(
    windowWidth / 2,
    windowHeight / 2 + 374,
    displayWidth,
    10
  );
  invis_ground.visible = false;

  //create sprite for gun and laser
  gun = createSprite(0, 0, 10, 10);
  laser = createSprite(gun.x + 37, gun.y - 4, 10, 10);

  //create sprite for control help
  up = createSprite(windowWidth / 19 - 37, windowHeight / 3 - 170, 10, 10);
  down = createSprite(windowWidth / 19 - 37, windowHeight / 3 - 135, 10, 10);
  left = createSprite(windowWidth / 19 - 37, windowHeight / 3 - 100, 10, 10);
  right = createSprite(windowWidth / 19 - 37, windowHeight / 3 - 65, 10, 10);

  //create sprite for for energy icon
  light = createSprite(windowWidth / 5 - 20, windowHeight / 3 - 200);
  light.addImage("energy", lightImg);

  //create sprite for life icon
  life = createSprite(windowWidth / 2 - 25, windowHeight / 3 - 50);
  life.addImage("live", lifeImg);

  //create sprites for various time machine parts
  time1 = createSprite(windowWidth + 200, windowHeight / 2 + 355, 10, 10);
  time2 = createSprite(windowWidth + 100, windowHeight / 2 + 330, 10, 10);
  time3 = createSprite(windowWidth + 300, windowHeight / 2 + 325, 10, 10);
  time4 = createSprite(windowWidth + 400, windowHeight / 2 + 355, 10, 10);

  lol = createSprite(1, 1, 1, 1);

  //create group for zombie spawnning
  zombieGroup = new Group();

  //create group for knight spawnning
  knight1Group = new Group();

  //create group for knight spawnning
  knight2Group = new Group();

  //create group for dinosaur spawnning
  dinoGroup = new Group();
}

//define function draw
function draw() {
  //background
  background(commonBg);

  //invisible canvas invisibility
  invis_canvas.visible = false;

  player.addImage(playerRightImage);

  //menu display
  if (gameState === 0) {
    form = new Start();
    form.display();
  }

  //Easy mode Gameplay
  if (gameState === 1) {
    //easy mode background
    background(futuristicBg);

    //controls
    textFont(font);
    textSize(30);
    fill("white");
    text("Controls:", windowWidth / 49, windowHeight / 3 - 225);

    //controls images
    up.addImage("lol", up_arr);
    fill("white");
    text("- Shoot", windowWidth / 19 - 10, windowHeight / 3 - 160);
    down.addImage("lmao", down_arr);
    fill("white");
    text("- Jump", windowWidth / 19 - 10, windowHeight / 3 - 125);
    left.addImage("coffin", left_arr);
    fill("white");
    text("- Move Right", windowWidth / 19 - 10, windowHeight / 3 - 90);
    right.addImage("wide_putin", right_arr);
    fill("white");
    text("- Move Left", windowWidth / 19 - 10, windowHeight / 3 - 55);

    //add gun image
    gun.addImage("duh", gunImg);

    //make player collide with invisible ground
    player.collide(invis_ground);

    if (keyDown("d")) {
      player.x = player.x + 5;
    } else if (keyDown("a")) {
      player.x = player.x - 5;
    } else if (keyDown("space") && player.y >= windowHeight / 2 + 300) {
      player.velocityY = -18;
      jumpSound.play();
    }

    if (mousePressedOver(invis_canvas) && frameCount % 45 === 0) {
      laser = createSprite(gun.x + 37, gun.y - 4, 10, 10);
      laser.addImage("bruh", laserImg);
      laser.velocityX = 8;
      lasermusic.play();
    }

    gun.x = player.x + 30;
    gun.y = player.y + 20;

    player.velocityY = player.velocityY + 0.8;

    laser.setCollider("rectangle", 19, 0, 125, 30);

    if (energy_count === 20) {
      time1.x = windowWidth / 3 + 230;
      time1.addImage("part1", t1Img);
    }
    if (player.collide(time1)) {
      time1.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time1Puzzle = createSprite(
        windowWidth / 3 + 170,
        windowHeight / 3 - 120,
        1,
        1
      );

      time1Puzzle.addImage("time1", t1Img);
      time1Puzzle.lifetime = -1;
    }

    if (energy_count === 40) {
      time2.x = windowWidth / 5 - 100;
      time2.addImage("part2", t2Img);
    }

    if (player.collide(time2)) {
      time2.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time2Puzzle = createSprite(
        windowWidth / 3 + 450,
        windowHeight / 3 - 120,
        1,
        1
      );
      time2Puzzle.addImage("time2", t2Img);
      time2Puzzle.lifetime = -1;
    }

    if (energy_count === 60) {
      time3.x = windowWidth - 100;
      time3.addImage("part3", t3Img);
    }
    if (player.collide(time3)) {
      time3.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time3Puzzle = createSprite(
        windowWidth / 3 + 305,
        windowHeight / 3 - 140,
        1,
        1
      );
      time3Puzzle.addImage("time3", t3Img);
      time3Puzzle.lifetime = -1;
    }

    if (energy_count === 80) {
      time4.x = windowWidth - 500;
      time4.addImage("part4", t4Img);
    }

    if (player.collide(time4)) {
      time4.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time4Puzzle = createSprite(
        windowWidth / 3 + 300,
        windowHeight / 3 - 220,
        1,
        1
      );
      time4Puzzle.addImage("time4", t4Img);
      time4Puzzle.lifetime = -1;
    }

    if (laser.isTouching(zombieGroup)) {
      laser.visible = false;
      zombie.visible = false;
      zombie.lifetime = 0;
      zombieDie.play();
    }

    if (laser.collide(zombieGroup)) {
      energy_count = energy_count + 5;
      zombieGroup.destroyEach();
    }

    createZombie();

    textSize(30);
    text(lives, windowWidth / 2, windowHeight / 3 - 40);

    textSize(50);
    text(energy_count, light.x + 18, light.y + 12);

    textSize(30);
    text(
      "Parts Missing : " + part_count,
      windowWidth - 370,
      windowHeight / 3 - 196
    );

    drawSprites();

    if (part_count === 0 && frameCount % 150 === 0) {
      gameState = 3;
    }

    if (zombieGroup.collide(player)) {
      zombieGroup.lifetime = 0;
      zombieGroup.destroyEach();
      lives = lives - 1;
      lifeLose.play();
    }
    
    if (lives === 0) {
      gameState = 2;
    }
  }

  if (gameState === 3) {
    background(win);
    textSize(50);
    stroke('white');
    strokeWeight(3);
    fill('black');
    textStyle('bold');
    text("Press 'F5' to Return to Main Menu", windowWidth /2 - 350, windowHeight / 2);
  }

  if (gameState === 4) {
    background(medievalBg);

    invis_ground.y = windowHeight / 2 + 375;

    time1.y = windowHeight / 2 + 353;
    time2.y = windowHeight / 2 + 325;
    time3.y = windowHeight / 2 + 320;
    time4.y = windowHeight / 2 + 357;

    textFont(font);
    textSize(30);
    fill("white");
    stroke('black');
    strokeWeight(5);
    text("Controls:", windowWidth / 49, windowHeight / 3 - 225);

    gun.addImage("duh", gunImg);

    up.addImage("lol", up_arr);
    fill("white");
    text("- Shoot", windowWidth / 19 - 10, windowHeight / 3 - 160);
    down.addImage("lmao", down_arr);
    fill("white");
    text("- Jump", windowWidth / 19 - 10, windowHeight / 3 - 125);
    left.addImage("coffin", left_arr);
    fill("white");
    text("- Move Right", windowWidth / 19 - 10, windowHeight / 3 - 90);
    right.addImage("wide_putin", right_arr);
    fill("white");
    text("- Move Left", windowWidth / 19 - 10, windowHeight / 3 - 55);

    player.collide(invis_ground);

    if (keyDown("d")) {
      player.x = player.x + 6;
    } else if (keyDown("a")) {
      player.x = player.x - 6;
    } else if (keyDown("space") && player.y >= windowHeight / 2 + 235) {
      player.velocityY = -21;
      jumpSound.play();
    }

    if (mousePressedOver(invis_canvas) && frameCount % 45 === 0) {
      laser = createSprite(gun.x + 37, gun.y - 4, 10, 10);
      laser.addImage("bruh", laserImg);
      laser.velocityX = 8;
      lasermusic.play();
    }

    gun.x = player.x + 30;
    gun.y = player.y + 20;

    player.velocityY = player.velocityY + 0.8;

    laser.setCollider("rectangle", 19, 0, 125, 30);

    if (energy_count === 30) {
      time1.x = windowWidth / 3 + 230;
      time1.addImage("part1", t1Img);
    }
    if (player.collide(time1)) {
      time1.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time1Puzzle = createSprite(
        windowWidth / 3 + 170,
        windowHeight / 3 - 120,
        1,
        1
      );

      time1Puzzle.addImage("time1", t1Img);
      time1Puzzle.lifetime = -1;
    }

    if (energy_count === 60) {
      time2.x = windowWidth / 5 - 100;
      time2.addImage("part2", t2Img);
    }

    if (player.collide(time2)) {
      time2.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time2Puzzle = createSprite(
        windowWidth / 3 + 450,
        windowHeight / 3 - 120,
        1,
        1
      );
      time2Puzzle.addImage("time2", t2Img);
      time2Puzzle.lifetime = -1;
    }

    if (energy_count === 90) {
      time3.x = windowWidth - 100;
      time3.addImage("part3", t3Img);
    }
    if (player.collide(time3)) {
      time3.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time3Puzzle = createSprite(
        windowWidth / 3 + 305,
        windowHeight / 3 - 140,
        1,
        1
      );
      time3Puzzle.addImage("time3", t3Img);
      time3Puzzle.lifetime = -1;
    }

    if (energy_count === 120) {
      time4.x = windowWidth - 500;
      time4.addImage("part4", t4Img);
    }

    if (player.collide(time4)) {
      time4.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time4Puzzle = createSprite(
        windowWidth / 3 + 300,
        windowHeight / 3 - 220,
        1,
        1
      );
      time4Puzzle.addImage("time4", t4Img);
      time4Puzzle.lifetime = -1;
    }

    if (laser.isTouching(knight1Group)) {
      laser.visible = false;
      knight1.visible = false;
      knight1.lifetime = 0;
      knightDie.play();
    }

    if (laser.isTouching(knight2Group)) {
      laser.visible = false;
      knight2.visible = false;
      knight2.lifetime = 0;
      knightDie.play();
    }

    if (laser.collide(knight1Group)) {
      energy_count = energy_count + 5;
    }

    if (laser.collide(knight2Group)) {
      energy_count = energy_count + 5;
    }

    var rand = Math.round(random(1, 2));

    switch (rand) {
      case 1:
        createKnight1();
        break;

      case 2:
        createKnight2();
        break;

      default:
        break;
    }

    textSize(30);
    text(lives, windowWidth / 2, windowHeight / 3 - 40);

    textSize(50);
    text(energy_count, light.x + 18, light.y + 12);

    textSize(30);
    text(
      "Parts Missing : " + part_count,
      windowWidth - 370,
      windowHeight / 3 - 196
    );

    drawSprites();

    if (part_count === 0) {
      gameState = 5;
    }

    if (knight1Group.collide(player)) {
      knight1Group.lifetime = 0;
      knight1Group.destroyEach();
      lives = lives - 2;
      lifeLose.play();
    }

    if (knight2Group.collide(player)) {
      knight2Group.lifetime = 0;
      knight2Group.destroyEach();
      lives = lives - 2;
      lifeLose.play();
    }

    if (lives === 0) {
      gameState = 2;
    }
  }

  if (gameState === 5) {
      background(win);
      textSize(50);
      stroke('white');
      strokeWeight(3);
      fill('black');
      textStyle('bold');
      text("Press 'F5' to Return to Main Menu", windowWidth /2 - 350, windowHeight / 2);
  }

  if (gameState === 6) {
    background(prehistoricBg);

    invis_ground.y = windowHeight / 2 + 306;

    time1.y = windowHeight / 2 + 283;
    time2.y = windowHeight / 2 + 255;
    time3.y = windowHeight / 2 + 250;
    time4.y = windowHeight / 2 + 287;

    textFont(font);
    textSize(30);
    fill("black");
    text("Controls:", windowWidth / 49, windowHeight / 3 - 225);

    gun.addImage("duh", gunImg);

    up.addImage("lol", up_arr);
    fill("black");
    text("- Shoot", windowWidth / 19 - 10, windowHeight / 3 - 160);
    down.addImage("lmao", down_arr);
    fill("black");
    text("- Jump", windowWidth / 19 - 10, windowHeight / 3 - 125);
    left.addImage("coffin", left_arr);
    fill("black");
    text("- Move Right", windowWidth / 19 - 10, windowHeight / 3 - 90);
    right.addImage("wide_putin", right_arr);
    fill("black");
    text("- Move Left", windowWidth / 19 - 10, windowHeight / 3 - 55);

    player.collide(invis_ground);

    if (keyDown("d")) {
      player.x = player.x + 7;
    } else if (keyDown("a")) {
      player.x = player.x - 7;
    } else if (keyDown("space") && player.y >= windowHeight / 2 + 236) {
      player.velocityY = -20.5;
      jumpSound.play();
    }

    if (mousePressedOver(invis_canvas) && frameCount % 45 === 0) {
      laser = createSprite(gun.x + 37, gun.y - 4, 10, 10);
      laser.addImage("bruh", laserImg);
      laser.velocityX = 8;
      lasermusic.play();
    }

    gun.x = player.x + 30;
    gun.y = player.y + 20;

    player.velocityY = player.velocityY + 0.8;

    laser.setCollider("rectangle", 19, 0, 125, 30);

    if (energy_count === 40) {
      time1.x = windowWidth / 3 + 230;
      time1.addImage("part1", t1Img);
    }
    if (player.collide(time1)) {
      time1.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time1Puzzle = createSprite(
        windowWidth / 3 + 170,
        windowHeight / 3 - 120,
        1,
        1
      );

      time1Puzzle.addImage("time1", t1Img);
      time1Puzzle.lifetime = -1;
    }

    if (energy_count === 80) {
      time2.x = windowWidth / 5 - 100;
      time2.addImage("part2", t2Img);
    }

    if (player.collide(time2)) {
      time2.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time2Puzzle = createSprite(
        windowWidth / 3 + 450,
        windowHeight / 3 - 120,
        1,
        1
      );
      time2Puzzle.addImage("time2", t2Img);
      time2Puzzle.lifetime = -1;
    }

    if (energy_count === 120) {
      time3.x = windowWidth - 100;
      time3.addImage("part3", t3Img);
    }
    if (player.collide(time3)) {
      time3.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time3Puzzle = createSprite(
        windowWidth / 3 + 305,
        windowHeight / 3 - 140,
        1,
        1
      );
      time3Puzzle.addImage("time3", t3Img);
      time3Puzzle.lifetime = -1;
    }

    if (energy_count === 160) {
      time4.x = windowWidth - 500;
      time4.addImage("part4", t4Img);
    }

    if (player.collide(time4)) {
      time4.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time4Puzzle = createSprite(
        windowWidth / 3 + 300,
        windowHeight / 3 - 220,
        1,
        1
      );
      time4Puzzle.addImage("time4", t4Img);
      time4Puzzle.lifetime = -1;
    }

    if (laser.isTouching(dinoGroup)) {
      laser.visible = false;
      dino.visible = false;
      dino.lifetime = 0;
      dinosaurDie.play();
    }

    if (laser.collide(dinoGroup)) {
      energy_count = energy_count + 5;
    }

    createDino();

    textSize(30);
    text(lives, windowWidth / 2, windowHeight / 3 - 40);

    textSize(50);
    text(energy_count, light.x + 18, light.y + 12);

    textSize(30);
    text(
      "Parts Missing : " + part_count,
      windowWidth - 370,
      windowHeight / 3 - 196
    );

    drawSprites();

    if (part_count === 0 && frameCount % 150 === 0) {
      gameState = 7;
    }

    if (dinoGroup.collide(player)) {
      dinoGroup.lifetime = 0;
      dinoGroup.destroyEach();
      lives = lives - 3;
      lifeLose.play();
    }

    if (lives === 0) {
      gameState = 2;
    }
  }

  if (gameState === 7) {
      background(win);
      textSize(50);
      stroke('white');
      strokeWeight(3);
      fill('black');
      textStyle('bold');
      text("Press 'F5' to Return to Main Menu", windowWidth /2 - 350, windowHeight / 2);
  }

  if (gameState === 8) {
    background(hardcoreBg);

    invis_ground.y = windowHeight / 2 + 255;

    lives = 1;

    time1.y = windowHeight / 2 + 233;
    time2.y = windowHeight / 2 + 205;
    time3.y = windowHeight / 2 + 200;
    time4.y = windowHeight / 2 + 237;

    textFont(font);
    textSize(30);
    fill("white");
    text("Controls:", windowWidth / 49, windowHeight / 3 - 225);

    gun.addImage("duh", gunImg);

    up.addImage("lol", up_arr);
    fill("white");
    text("- Shoot", windowWidth / 19 - 10, windowHeight / 3 - 160);
    down.addImage("lmao", down_arr);
    fill("white");
    text("- Jump", windowWidth / 19 - 10, windowHeight / 3 - 125);
    left.addImage("coffin", left_arr);
    fill("white");
    text("- Move Right", windowWidth / 19 - 10, windowHeight / 3 - 90);
    right.addImage("wide_putin", right_arr);
    fill("white");
    text("- Move Left", windowWidth / 19 - 10, windowHeight / 3 - 55);

    player.collide(invis_ground);

    if (keyDown("d")) {
      player.x = player.x + 7;
    } else if (keyDown("a")) {
      player.x = player.x - 7;
    } else if (keyDown("space") && player.y >= windowHeight / 2 + 185) {
      player.velocityY = -20;
      jumpSound.play();
    }

    if (mousePressedOver(invis_canvas) && frameCount % 45 === 0) {
      laser = createSprite(gun.x + 37, gun.y - 4, 10, 10);
      laser.addImage("bruh", laserImg);
      laser.velocityX = 8;
      lasermusic.play();
    }

    gun.x = player.x + 30;
    gun.y = player.y + 20;

    player.velocityY = player.velocityY + 0.8;

    laser.setCollider("rectangle", 19, 0, 125, 30);

    if (energy_count === 50) {
      time1.x = windowWidth / 3 + 230;
      time1.addImage("part1", t1Img);
    }
    if (player.collide(time1)) {
      time1.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time1Puzzle = createSprite(
        windowWidth / 3 + 170,
        windowHeight / 3 - 120,
        1,
        1
      );

      time1Puzzle.addImage("time1", t1Img);
      time1Puzzle.lifetime = -1;
    }

    if (energy_count === 100) {
      time2.x = windowWidth / 5 - 100;
      time2.addImage("part2", t2Img);
    }

    if (player.collide(time2)) {
      time2.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time2Puzzle = createSprite(
        windowWidth / 3 + 450,
        windowHeight / 3 - 120,
        1,
        1
      );
      time2Puzzle.addImage("time2", t2Img);
      time2Puzzle.lifetime = -1;
    }

    if (energy_count === 150) {
      time3.x = windowWidth - 100;
      time3.addImage("part3", t3Img);
    }
    if (player.collide(time3)) {
      time3.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time3Puzzle = createSprite(
        windowWidth / 3 + 305,
        windowHeight / 3 - 140,
        1,
        1
      );
      time3Puzzle.addImage("time3", t3Img);
      time3Puzzle.lifetime = -1;
    }

    if (energy_count === 200) {
      time4.x = windowWidth - 500;
      time4.addImage("part4", t4Img);
    }

    if (player.collide(time4)) {
      time4.lifetime = 0;
      part_count = part_count - 1;
      partSound.play();
      time4Puzzle = createSprite(
        windowWidth / 3 + 300,
        windowHeight / 3 - 220,
        1,
        1
      );
      time4Puzzle.addImage("time4", t4Img);
      time4Puzzle.lifetime = -1;
    }

    if (laser.isTouching(zombieGroup)) {
      laser.visible = false;
      zombie.visible = false;
      zombie.lifetime = 0;
      zombieDie.play();
    }

    if (laser.isTouching(knight1Group)) {
      laser.visible = false;
      knight1.visible = false;
      knight1.lifetime = 0;
      knightDie.play();
    }

    if (laser.isTouching(knight2Group)) {
      laser.visible = false;
      knight2.visible = false;
      knight2.lifetime = 0;
      knightDie.play();
    }

    if (laser.isTouching(dinoGroup)) {
      laser.visible = false;
      dino.visible = false;
      dino.lifetime = 0;
      dinosaurDie.play();
    }

    if (laser.collide(zombieGroup)) {
      energy_count = energy_count + 5;
    }

    if (laser.collide(knight1Group)) {
      energy_count = energy_count + 5;
    }

    if (laser.collide(knight2Group)) {
      energy_count = energy_count + 5;
    }

    if (laser.collide(dinoGroup)) {
      energy_count = energy_count + 5;
    }

    var rand1 = Math.round(random(1, 4));
    switch (rand1) {
      case 1:
        createZombie();
        break;

      case 2:
        createKnight1();
        break;

      case 3:
        createKnight2();
        break;

      case 4:
        createDino();
        break;

      default:
        break;
    }

    textSize(30);
    text(lives, windowWidth / 2, windowHeight / 3 - 40);

    textSize(50);
    text(energy_count, light.x + 18, light.y + 12);

    textSize(30);
    text(
      "Parts Missing : " + part_count,
      windowWidth - 370,
      windowHeight / 3 - 196
    );

    drawSprites();

    if (part_count === 0 && frameCount % 150 === 0) {
      gameState = 9;
    }

    if (zombieGroup.collide(player)) {
      zombieGroup.lifetime = 0;
      zombieGroup.destroyEach();
      lives = lives - 1;
      lifeLose.play();
    }

    if (knight1Group.collide(player)) {
      knight1Group.lifetime = 0;
      knight1Group.destroyEach();
      lives = lives - 1;
      lifeLose.play();
    }

    if (knight2Group.collide(player)) {
      knight2Group.lifetime = 0;
      knight2Group.destroyEach();
      lives = lives - 1;
      lifeLose.play();
    }

    if (dinoGroup.collide(player)) {
      dinoGroup.lifetime = 0;
      dinoGroup.destroyEach();
      lives = lives - 1;
      lifeLose.play();
    }

    if (lives === 0) {
      gameState = 2;
    }
  }

  if (gameState === 9) {
      background(win);
      textSize(50);
      stroke('white');
      strokeWeight(3);
      fill('black');
      textStyle('bold');
      text("Press 'F5' to Return to Main Menu", windowWidth /2 - 350, windowHeight / 2);
  }

  if (gameState === 2) {
    background(commonBg);

    player.destroy();
    player.visible = false;
    gun.destroy();
    gun.visible = false;
    laser.destroy();
    laser.visible = false;
    zombieGroup.destroyEach();
    zombieGroup.visible = false;

    jumpSound.stop();
    lasermusic.stop();
    lifeLose.stop();
    zombieDie.stop();
    partSound.stop();

    fill("white");
    textFont(font);
    textSize(60);
    text("GAME OVER", windowWidth / 2 - 180, windowHeight / 2 - 100);

    textSize(45);
    text("Score: " + energy_count, windowWidth / 2 - 90, windowHeight / 2 - 40);

    textSize(35);
    text(
      "Press 'F5' to return to Main Menu",
      windowWidth / 2 - 270,
      windowHeight / 2 + 50
    );
  }
  player.setCollider("rectangle", -15, 10, 55, 105);
}

//define function createZombie
function createZombie() {
  if (frameCount % 70 === 0) {
    zombie = createSprite(
      windowWidth / 2 + 100,
      windowHeight / 2 - 360,
      10,
      100
    );
    zombie.addAnimation("anima", zomAnima);
    zombie.x = Math.round(random(windowWidth / 2 + 370, windowWidth));
    zombie.y = Math.round(windowHeight / 2 + 309);
    zombie.velocityX = -6;
    zombie.setCollider("rectangle", 0, 0, 75, 130);
    zombieGroup.add(zombie);

    if (gameState === 8) {
      zombie.y = windowHeight / 2 + 190;
    }
  }
}

//define function createKnight1
function createKnight1() {
  if (frameCount % 70 === 0) {
    knight1 = createSprite(
      windowWidth / 2 + 100,
      windowHeight / 2 - 260,
      10,
      100
    );

    knight1.addAnimation("knight1", knight1Anima);

    knight1.x = Math.round(random(windowWidth / 2 + 370, windowWidth));
    knight1.y = Math.round(windowHeight / 2 + 222);
    knight1.velocityX = -6;
    knight1.setCollider("rectangle", 0, 0, 185, 150);
    knight1Group.add(knight1);

    if (gameState === 8) {
      knight1.y = windowHeight / 2 + 180;
    }

    if (gameState === 4) {
      knight1.y = windowHeight / 2 + 292;
    }
  }
}

//define function createKnight2
function createKnight2() {
  if (frameCount % 70 === 0) {
    knight2 = createSprite(
      windowWidth / 2 + 100,
      windowHeight / 2 - 260,
      10,
      100
    );

    knight2.addAnimation("knight2", knight2Anima);

    knight2.x = Math.round(random(windowWidth / 2 + 370, windowWidth));
    knight2.y = Math.round(windowHeight / 2 + 207);
    knight2.velocityX = -7;
    knight2.setCollider("rectangle", 0, 20, 115, 150);
    knight2Group.add(knight2);

    if (gameState === 8) {
      knight2.y = windowHeight / 2 + 160;
    }

    if (gameState === 4) {
      knight2.y = windowHeight / 2 + 277;
    }
  }
}

//define function createDino
function createDino() {
  if (frameCount % 70 === 0) {
    dino = createSprite(windowWidth / 2 + 100, windowHeight / 2 - 360, 10, 100);
    dino.addAnimation("dino", dinoAnima);
    dino.x = Math.round(random(windowWidth / 2 + 370, windowWidth));
    dino.y = Math.round(windowHeight / 2 + 249);
    dino.velocityX = -5;
    dino.setCollider("rectangle", 0, 0, 270, 100);
    dinoGroup.add(dino);

    if (gameState === 8) {
      dino.y = windowHeight / 2 + 200;
    }
  }
}