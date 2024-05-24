let cor;
let posicaoy



function setup() {
  createCanvas(400, 400);
 background("black");
 cor=color(random(0,255),random(0,255),random(0255));
  posicaox=200;
  posicaoy=200;
           }
 
function draw() {
  
  fill(cor)
 circle(posicaox,posicaoy,60);


 if(mousex<posicaox){
   posicaox--;
   }
  if(mousex>posicaox){
    posicaox++;
   if(mousey<posicaoy) {
     posicaoy--;
   }
   if (mousey>posicaoy){
     posicaoy++;
   }
   
}
