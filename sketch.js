let angle = 0;
let w ;
let ma ;
let maxD;
let maxH;
let minH;

function setup(){
  createCanvas(400,400,WEBGL);
  w = 24;
  ma = atan(1/sqrt(2));
  maxD = 100;
  minH = 50;
  maxH = 300
}

function draw(){
  background(0);
  lights();
  camera(0,0,200+(height/2)/(tan(PI/6)),0,0,0,0,1,0);
  //translate(0,50,-50);
  rotateX(-QUARTER_PI);
  rotateY(ma);



  //translate(width/2, height/2);
  rectMode(CENTER);
  //rotateX(angle*0.1);


  for(let z = 0; z < height; z += w){
    for(let x = 0; x < width; x += w){
      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d,0,maxD,-1,1);
      let a = angle+offset;
      let h = map(sin(a),-1,1,minH,maxH);

      translate(x-width/2,0,z-height/2);
      box(w-2,h,w-2);
      //rect(x-width/2+w/2,0,w-2,h);

      pop();
    }

  }
  fill(255);
  angle -= 0.1;

}
