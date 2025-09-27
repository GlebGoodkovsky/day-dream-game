import kaplay, { Color } from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay();

k.loadRoot("./"); // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/bean.png");

k.add([k.pos(120, 80), k.sprite("bean")]);

k.onClick(() => k.addKaboom(k.mousePos()));

//add something to the screen
add([sprite("bean"), pos(80, 40), scale(3), rotate(30), color(0, 0, 255)]);

const player = add([
    sprite("bean"),
    pos(80, 40),
    area(),
    body(),
])