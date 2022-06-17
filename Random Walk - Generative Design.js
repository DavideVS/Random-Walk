/*-------------------------------------------------------------------

                      Creative Computing


                          Random Walk

Ispirato da:
Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
Generative Gestaltung  
-------------------------------------------------------------------*/

//Variabili globali
let radius = 1; //raggio del cerchio
let step = 1; // lunghezza del passo
let dir; // direzione
let posX, posY; //posizione corrente

//Codifico con delle costanti valori numerici che corrispondono alle 8 possibili direzioni
const N=0; //costante intera direzione NORD
const NE=1; //costante intera direzione NORD-EST
const E=2; //costante intera direzione EST
const SE= 3; //costante intera direzione SUD-EST
const S=4; //costante intera direzione SUD
const SO=5; //costante intera direzione SUD-OVEST
const O=6; //costante intera direzione OVEST
const NO=7; //costante intera direzione NORD-OVEST


function setup() {
  createCanvas(800, 600); //risoluzione canvas
  posX=width/2; //posizione iniziale x 
  posY=height/2; //posizione iniziale y
  noStroke(); //tratto disabilitato
fill(0, 40); //rimepimento nero con trasparenza 40
  background(255); //sfondo bianco
}

function draw() {
  
  //numero di passi in base a mouseX
  for(let i=0; i<100; i++)
  {
  
  dir= int(random(0,8)); //direzione casuale. Attenzione la funzione random(a,b) restituisce valori nell'intervallo [a,b)
  // Si noti il "cast" dal valore float (con la virgola) restituito dalla funzione random a valori interi per mezzo della funzione int()
  
  
  
  //Aggiornamento della posizione in base alle direzione scelta
  
  switch (dir){
    case N: //direzione Nord
      posY-=step; //passo in direzione Nord
      break;
    case NE: //direzionen Nord-Est
      posY-=step;
      posX+=step;
      break;
    case E: //direzione Est
      posX+=step;
      break;
    case SE:
      posX+=step;
      posY+=step;
      break;
    case S:
      posY+=step;
      break;
    case SO:
      posY+=step;
      posX-=step;
      break;
    case O:
      posX-=step;
      break;
    case NO:
      posY-=step;
      posX-=step;
      break;
  }//end switch
  
  //Controllo limiti dello schermo
      //comportamento circolare (uscendo da un lato, il disegno riprende da quello opposto)
      if(posX>width) posX=0;
      if(posX<0) posX=width;
      if (posY>height) posY=0;
      if (posY<0) posY=height;  
    
    
  ellipse(posX,posY,radius, radius); //disegno walker
  } //end for
}// end draw()