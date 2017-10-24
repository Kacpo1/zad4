function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate (250,250);
  rotate(270);
   hr = hour();
   mn = minute();
   sc = second();
   
   
   
   strokeWeight(8);
   stroke(255,100,0);
 clockHandSc = map(sc,0,60,0,360);
   arc(0,0,300,300,0,clockHandSc,PIE);
  stroke(255,100,0);
   clockHandMn = map(mn,0,60,0,360);
   arc(0,0,260,260,0,clockHandMn);
   stroke(255,100,0);
   noFill();
   clockHandHr = map(hr%12,0,12,0,360);
   arc(0,0,220,220,0,clockHandHr);
   
    push();
    rotate(clockHandSc);
   stroke(255);
   ellipse(0,0,140,10)
   pop();
   
    push();
    rotate(clockHandMn);
   stroke(255);
   ellipse(0,0,120,10)
   pop();
   
   push();
    rotate(clockHandHr);
   stroke(255);
   ellipse(0,0,70,10)
   pop();
   stroke(0);
   point(0,0);
  
}