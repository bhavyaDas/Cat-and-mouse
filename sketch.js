
//////////////////////////////////////Code Started///////////////////////////////////////

//Created variables cat_still,cat_moving,cat_stop
var cat_still,cat_moving,cat_stop

//Created variables mouse_still,mouse_talking,mouse_stop
var mouse_still,mouse_talking,mouse_stop

//Created a variable gardenImg
var gardenImg

//Created variables cat,mouse
var cat ,mouse

//Created a vriable mouseSound
var mouseSound

/////////////////////////////////Preload Function started/////////////////////////////////

//Images and Sound Storage
function preload() {

 //Loaded an image inside gardenImg that is "garden.png"
 gardenImg=loadImage("garden.png")

 //Loaded an animation inside cat_still that is "cat1.png"
 cat_still=loadAnimation("cat1.png")  

 //Loaded an animation inside cat_moving that is "cat2.png","cat3.png"
 cat_moving=loadAnimation("cat2.png","cat3.png")

 //Loaded an image inside cat_stop that is "cat4.png"
 cat_stop=loadImage("cat4.png")

 //Loaded an animation inside mouse_still that is "mouse1.png"
 mouse_still=loadAnimation("mouse1.png")

 //Loaded an animation inside mouse_talking that is "mouse2.png","mouse3.png"
 mouse_talking=loadAnimation("mouse2.png","mouse3.png")

 //Loaded an image inside mouse_stop that is "mouse4.png"
 mouse_stop=loadImage("mouse4.png")

 //Loaded a sound inside mouseSound that is "mouse-squeaking-noise.mp3"
 mouseSound=loadSound("mouse-squeaking-noise.mp3")

}

/////////////////////////////Preload Function Ended/////////////////////////////////////


/////////////////////////////Setup Function started////////////////////////////////////

//Pre-defined function
function setup(){

 //Created a canvas with width and height set according to window
 createCanvas(windowWidth,windowHeight)
  
 //Created a sprite cat with (x,y,w,h) coordinates
 cat=createSprite(width-140,height-140,20,20)

 //Added an animation inside cat that is cat_still
 cat.addAnimation("cat_still",cat_still)

 //Resize the animation under cat using scale property
 cat.scale=0.2

 //Created a sprite mouse with (x,y,w,h) coordinates
 mouse=createSprite(width-1340,height-140,20,20)

 //Added an animation inside mouse that is mouse_still
 mouse.addAnimation("mouse_stillPosition",mouse_still)

 //Resize the animation under mouse using scale property
 mouse.scale=0.15
  
}

/////////////////////////////////Setup Function ended//////////////////////////////////


////////////////////////////////Draw  Function Started/////////////////////////////////

//Pre-defined function (repeats the commands)
function draw() {

 //Set the image of canvas as gardenImg
 background(gardenImg);
 
 /*Put a condition if cat.x is subtracted from mouse.x and
 their value is less than cat's width subtracted from mouse's width divided by 2 */
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){

  //Set the velocityX of cat as 0
  cat.velocityX=0

  //Added an animation to cat that is cat_stop
  cat.addAnimation("cat_stop",cat_stop)

  //Change animation of cat to cat_stop
  cat.changeAnimation("cat_stop",cat_stop)

  //Set the cat's X-position
  cat.x=width-1230

  //Added an animation to mouse that is mouse_stop
  mouse.addAnimation("mouse_stop",mouse_stop)

  //Change animation of mouse to mouse_stop
  mouse.changeAnimation("mouse_stop",mouse_stop)

  //Stopped the sound that is mouseSound when the condition is true
  mouseSound.stop()

 }

 //Put a customizable function that is keyPressed()
 keyPressed()

 //Added a function to draw the sprites 
 drawSprites();

}

////////////////////////////////////Draw Function ended/////////////////////////////////////

///////////////////////////////////Key Pressed Function Started////////////////////////////

//Customizable function-key Pressed() 
function keyPressed(){

 //Put a condition if "LEFT_ARROW" key is pressed
 if(keyDown("LEFT_ARROW")){

  //Added an animation to cat that is cat_moving
  cat.addAnimation("cat_moving",cat_moving)

  //Changed the animation of the cat to cat_moving
  cat.changeAnimation("cat_moving",cat_moving)

  //Set the velocityX of cat as -2
  cat.velocityX=-2

  //Added an animation to mouse that is mouse_talking
  mouse.addAnimation("mouse_moving",mouse_talking)

  //Changed the abimation of mouse to mouse_talking
  mouse.changeAnimation("mouse_moving",mouse_talking)

  //Played a sound in loop that is mouseSound whenever the condition becomes true
  mouseSound.loop()

 }

}
/////////////////////////////////////key Pressed Function ended////////////////////////////////////

///////////////////////////////////////////////Code Ended////////////////////////////////////////////////////
