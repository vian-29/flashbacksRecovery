class Start {
  constructor() {
    this.buttonOP = select("#butt");
    this.buttonOP1 = select("#butt1");
    this.buttonOP2 = select("#butt2");
    this.buttonOP3 = select("#butt3");
  }

  hide() {
    this.buttonOP.hide();
    this.buttonOP1.hide();
    this.buttonOP2.hide();
    this.buttonOP3.hide();
  }

  display() {
    this.buttonOP.position(windowWidth / 2 - 270, windowHeight / 2 - 20);
    this.buttonOP1.position(windowWidth / 2 + 30, windowHeight / 2 - 20);
    this.buttonOP2.position(windowWidth / 2 - 270, windowHeight / 2 + 130);
    this.buttonOP3.position(windowWidth / 2 + 30, windowHeight / 2 + 130);

    this.buttonOP.mousePressed(() => {
      gameState = 1;
      this.buttonOP.hide();
      this.buttonOP1.hide();
      this.buttonOP2.hide();
      this.buttonOP3.hide();
    });

    this.buttonOP1.mousePressed(() => {
      gameState = 4;
      this.buttonOP.hide();
      this.buttonOP1.hide();
      this.buttonOP2.hide();
      this.buttonOP3.hide();
    });

    this.buttonOP2.mousePressed(() => {
      gameState = 6;
      this.buttonOP.hide();
      this.buttonOP1.hide();
      this.buttonOP2.hide();
      this.buttonOP3.hide();
    });

    this.buttonOP3.mousePressed(() => {
      gameState = 8;
      this.buttonOP.hide();
      this.buttonOP1.hide();
      this.buttonOP2.hide();
      this.buttonOP3.hide();
    });

    fill("#eeeeee");
    textSize(60);
    textFont(font);
    text("FLASHBACKS", windowWidth / 2 - 205, windowHeight / 4 - 140);
    textSize(40);
    text("Choose Your Era", windowWidth / 2 - 185, windowHeight / 2 - 100);
    textSize(40);
    text("Overview:", windowWidth / 4 - 450, windowHeight / 2 - 300);
    textSize(18);
    text(
      "You are a person that has the ability to time travel.",
      windowWidth / 4 - 450,
      windowHeight / 2 - 250
    );
    text(
      "But on your way, your time machine broke,",
      windowWidth / 4 - 450,
      windowHeight / 2 - 220
    );
    text(
      "and you are unable to return.",
      windowWidth / 4 - 450,
      windowHeight / 2 - 190
    );
    textSize(40);
    text("Goal:", windowWidth / 3 + 770, windowHeight / 2 - 300);
    textSize(18);
    text(
      "You have to collect all the time machine parts in",
      windowWidth / 3 + 770,
      windowHeight / 2 - 250
    );
    text(
      "order to return back to the present day. But beware,",
      windowWidth / 3 + 770,
      windowHeight / 2 - 220
    );
    text(
      "there are enemies in your way to stop you.",
      windowWidth / 3 + 770,
      windowHeight / 2 - 190
    );
    textSize(35);
    text("Beginner Mode:", windowWidth / 4 - 450, windowHeight / 2 - 70);
    textSize(18);
    text("> You get 6 lives", windowWidth / 4 - 450, windowHeight / 2 - 20);
    text(
      "> Enemies are Zombies who deal 1 heart damage",
      windowWidth / 4 - 450,
      windowHeight / 2 + 10
    );
    text(
      "> Parts spawn every 20 points",
      windowWidth / 4 - 450,
      windowHeight / 2 + 40
    );
    textSize(35);
    text("Intermediate Mode:", windowWidth / 4 - 450, windowHeight / 2 + 160);
    textSize(18);
    text("> You get 6 lives", windowWidth / 4 - 450, windowHeight / 2 + 210);
    text(
      "> Enemies are Knights who deal 2 hearts damage",
      windowWidth / 4 - 450,
      windowHeight / 2 + 240
    );
    text(
      "> Parts spawn every 30 points",
      windowWidth / 4 - 450,
      windowHeight / 2 + 270
    );
    textSize(35);
    text("Professional Mode:", windowWidth / 3 + 770, windowHeight / 2 - 70);
    textSize(18);
    text("> You get 6 lives", windowWidth / 3 + 770, windowHeight / 2 - 20);
    text(
      "> Enemies are Dinosaurs who deal 3 hearts damage",
      windowWidth / 3 + 770,
      windowHeight / 2 + 10
    );
    text(
      "> Parts spawn every 40 points",
      windowWidth / 3 + 770,
      windowHeight / 2 + 40
    );
    textSize(35);
    text("Hardcore Mode:", windowWidth / 3 + 770, windowHeight / 2 + 160);
    textSize(18);
    text(
      "> You get only 1 life",
      windowWidth / 3 + 770,
      windowHeight / 2 + 210
    );
    text(
      "> Enemies like Zombies, Knights and Dinosaurs",
      windowWidth / 3 + 770,
      windowHeight / 2 + 240
    );

    text("   spawn randomly", windowWidth / 3 + 770, windowHeight / 2 + 270);
    text(
      "> Parts spawn every 50 points",
      windowWidth / 3 + 770,
      windowHeight / 2 + 300
    );

    textSize(22);
    text("Note: > To shoot, you have to hold down the left mouse button instead of just pressing it once, ", windowWidth / 2 - 570, windowHeight / 2 + 370 );
    text("             as it is a laser which needs the gun to generate power.", windowWidth / 2 - 570, windowHeight / 2 + 400);
    text("          > Some of the enemies are invincible so you have to jump over them as you can't kill them.", windowWidth / 2 - 570, windowHeight / 2 + 450);

  }
}