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

onKeyPress("space", () => {
    Boolean.jump();
});

add([
    rect(width(), 48), //makes a rectangle the width of the screen and 48 pixels tall
    pos(0, height() - 48), //positions the rectangle at the bottom of the screen
    outline(4), //adds an outline to the rectangle
    area(), //gives the rectangle an area so it can be collided with
    body({ isStatic: true }), //makes the rectangle not move when something collides with it
    color(127, 200, 255),

]);

setGravity(1600);

onKeyPress("space", () => {
    if (bean.isGrounded()) {
        bean.jump();
    }
});

add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"), //defines the origin point of position in this case the bottom left
    color(255, 180, 255),
    move(LEFT, 240), //moves it forward the left infinitely at 240 pixels per second
]);

// add tree
add([
    rect(48, 64),
    area(),
    outline(4),
    pos(width(), height() - 48),
    anchor("botleft"),
    color(255, 180, 255),
    move(screenLeft, 240),
    "tree", //add a tag here
]);

//a way for us to check for collision between bean and anhy object with tag "tree"
bean.onCollide("tree", () => {
    addKaboom(bean.pos);
    shake();
})
