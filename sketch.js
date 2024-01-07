//Step1: Create a ball object and get it to appear on the screen

//Step2: Make the object an array and create multiple objects that all follow the mouse

//Step3: Give the objects speeds so they leave where the mouse is

//Step4: Use shift() to shorten the object once there are more than 1000 of them

//Step5: Add aestetics

let ball=[
  ]
let n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  n=0
  noStroke()
}

function draw() {
  background(0,60);
  if(mouseX>0 && mouseY>0){
    let newBall={
      x:mouseX,
      y:mouseY,
      xSpeed:random(-3,3),
      ySpeed:random(-6,1),
      yAcc:0.1,
      r:random(155,255),
      a:255,
      s:20
    }
    ball.push(newBall)
    for(let i =0; i<n; i++){
      fill(ball[i].r,255,255,ball[i].a)
      ball[i].a-=1
      ball[i].s+=0.2
      circle(ball[i].x,ball[i].y,ball[i].s)
      ball[i].ySpeed += ball[i].yAcc
      ball[i].x+=ball[i].xSpeed
      ball[i].y+=ball[i].ySpeed
    }
    n++
  }
  
  if(ball.length>1000){
    ball.shift()
    n--
  }
}

function mousePressed(){
}