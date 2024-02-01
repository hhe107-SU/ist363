let canvasWidth= 800;
let canvasHeight= 800;

function setup() {
    //Create a Canvas to  on
    //800x800px
    createCanvas(canvasWidth,canvasHeight);

    //set the background color
    //0 = black, 255=white
    background(0);

}
function draw(){
    //turn off default loop
     noLoop();
     noStroke();
     
     //fill("red");
     //fill rgb
//  fill (0,255,0)
    //x,y, diameter

 //circle(200,300,100);
  //fill(255,0,0);
  //circle(310,300,100);
  //circle(420,300,100);
  //circle(530,300,100);
   

  
 
 
  let circleDiameter= 50;
  let circleGap=10;
  let totalCircles=10;
  let totalRows =10;


  let startX=(canvasWidth -(circleDiameter*totalCircles)-(circleGap*totalCircles-1))/2 ;
  let startY=(canvasHeight -(circleDiameter*totalRows)-(circleGap*totalCircles-1))/2 ;
  let circleX=startX;
  let circleY=startY

  fill (255,0,0);

  //counter, condition, increment
for(let j=0; j<10;j++) {
  for(let i=0;i<10;i++) {
        let randomDiameter=random(5,150)
        let randomRed =random(0,255);
        let randomGreen =random(0,255);
        let randomBlue =random(0,255);
        let randomAlpha=random(0,255);
        fill(randomRed,randomGreen ,randomBlue,randomAlpha);
        circle(circleX,circleY,randomDiameter);
        circleX +=(circleDiameter + circleGap);
        


  } //for loop end

  //reset Cricle X
  circleX = startX;

  // increment circle Y
  circleY +=(circleDiameter +circleGap);
} 


} 