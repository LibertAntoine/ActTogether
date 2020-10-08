/*
 * @name ACTogether installation
 * @description Maquette de l'installation interactive ACTogether
 */


const panHeight = 420;
const panWidth = 220;


let rover;
let texColonnes;
let texSol;
let texPlafond; 
let texBackground; 
let texAfficheFin;
let texPlaque;

let vidAnt1;
let vidAnt2;
let vidAnt3;
let vidAnt4;
let vidAnt5;

let vidFlo1;
let vidFlo2;
let vidFlo3;
let vidFlo4;
let vidFlo5;

let active = false;
let fin = false;

let song;

const plaquePosition = [
    [970, 25], // 1
    [740, 825], // 2
    [20, 1120], // 3
    [-700, 830], // 4
    [-1000, 10], // 5
    [-625, -670], // 6
    [20, -900], // 7
    [670, -630] // 8
]

let plaqueActivation = [false, false, false, false, false, false, false, false];
let panVid;

let panTex;


let panState = [0, 0, 0, 0, 0, 0, 0, 0];


function preload() {
    /* MODEL */
 modelColonnes = loadModel('assets/Models/modelColonnes.obj');
 modelBackground = loadModel('assets/Models/modelBackground.obj');
    
    /* Textures d'environnement */
 texColonnes = loadImage('assets/Textures/texColonnes.jpg');
 texPlafond = loadImage('assets/Textures/texPlafond.jpg');
 texSol = loadImage('assets/Textures/texSol.jpg');  
 texBackground = loadImage('assets/Textures/texBackground.jpg'); 
 texPlaque = loadImage('assets/Textures/texPlaque.png');
    
    
    /* Panneaux latéraux */
 texPanLat1  = loadImage('assets/Textures/panneaux/Lateraux/1.jpg');
 texPanLat2  = loadImage('assets/Textures/panneaux/Lateraux/2.jpg');
 texPanLat3  = loadImage('assets/Textures/panneaux/Lateraux/3.jpg');
 texPanLat4  = loadImage('assets/Textures/panneaux/Lateraux/4.jpg');
 texPanLat5  = loadImage('assets/Textures/panneaux/Lateraux/5.jpg');
 texPanLat6  = loadImage('assets/Textures/panneaux/Lateraux/6.jpg');
 texPanLat7  = loadImage('assets/Textures/panneaux/Lateraux/7.jpg');
 texPanLat8  = loadImage('assets/Textures/panneaux/Lateraux/8.jpg');
 texPanLat9  = loadImage('assets/Textures/panneaux/Lateraux/9.jpg');
 texPanLat10 = loadImage('assets/Textures/panneaux/Lateraux/10.jpg');
 texPanLat11 = loadImage('assets/Textures/panneaux/Lateraux/11.jpg');
 texPanLat12 = loadImage('assets/Textures/panneaux/Lateraux/12.jpg');
 texPanLat13 = loadImage('assets/Textures/panneaux/Lateraux/13.jpg');
 texPanLat14 = loadImage('assets/Textures/panneaux/Lateraux/14.jpg');
 texPanLat15 = loadImage('assets/Textures/panneaux/Lateraux/15.jpg');
 texPanLat16 = loadImage('assets/Textures/panneaux/Lateraux/16.jpg');
    
    /* Panneaux extérieur */
 texPanExt1 = loadImage('assets/Textures/panneaux/Exterieur/1.jpg');
 texPanExt2 = loadImage('assets/Textures/panneaux/Exterieur/2.jpg');
 texPanExt3 = loadImage('assets/Textures/panneaux/Exterieur/3.jpg');
 texPanExt4 = loadImage('assets/Textures/panneaux/Exterieur/4.jpg');
 texPanExt5 = loadImage('assets/Textures/panneaux/Exterieur/5.jpg');
 texPanExt6 = loadImage('assets/Textures/panneaux/Exterieur/6.jpg');
 texPanExt7 = loadImage('assets/Textures/panneaux/Exterieur/7.jpg');
 texPanExt8 = loadImage('assets/Textures/panneaux/Exterieur/8.jpg');
    
    /* Panneaux intérieur */
 vidAnt1 = createVideo(['assets/Videos/Ant1.mp4']);
 vidAnt2 = createVideo(['assets/Videos/Ant2.mp4']);
 vidAnt3 = createVideo(['assets/Videos/Ant3.mp4']);
 vidAnt4 = createVideo(['assets/Videos/Ant4.mp4']);
 vidAnt5 = createVideo(['assets/Videos/Ant5.mp4']);

 vidFlo1 = createVideo(['assets/Videos/Flo1.mp4']);
 vidFlo2 = createVideo(['assets/Videos/Flo2.mp4']);
 vidFlo3 = createVideo(['assets/Videos/Flo3.mp4']);
 vidFlo4 = createVideo(['assets/Videos/Flo4.mp4']);
 vidFlo5 = createVideo(['assets/Videos/Flo5.mp4']);
    
 texAfficheFin = loadImage('assets/Textures/afficheFin.jpg');
    
 song = loadSound('assets/son/metro.mp3'); 
    
    
}

function setup() {
    
panVid = [
    [vidAnt1, vidAnt2, vidAnt3, vidAnt4, vidAnt5, texAfficheFin],
    [vidFlo1, vidFlo2, vidFlo3, vidFlo4, vidFlo5, texAfficheFin]
];   
   
    
panTex = [
    [panVid[0], texPanLat15, texPanLat3 , texPanExt1], // 1
    [panVid[1], texPanLat13 , texPanLat5 , texPanExt2], // 2
    [panVid[0], texPanLat4, texPanLat1 , texPanExt3], // 3
    [panVid[1], texPanLat16 , texPanLat14 , texPanExt4], // 4
    [panVid[0], texPanLat9, texPanLat6 , texPanExt5], // 5
    [panVid[1], texPanLat12, texPanLat2, texPanExt6], // 6
    [panVid[0], texPanLat10, texPanLat7, texPanExt7], // 7
    [panVid[1], texPanLat11 , texPanLat8 , texPanExt8]  // 8
];
    
  createCanvas(windowWidth, windowHeight, WEBGL); 
  strokeWeight(0);
    
    
  initCamera();
    
  let first = int(random(0, 8));
  panState[first] = 1;        


    vidAnt1.hide(); 
    vidAnt2.hide(); 
    vidAnt3.hide();
    vidAnt4.hide(); 
    vidAnt5.hide();
    
    vidFlo1.hide(); 
    vidFlo2.hide(); 
    vidFlo3.hide(); 
    vidFlo4.hide(); 
    vidFlo5.hide(); 
}


function play() {
    if(keyIsDown(80)) {
    vidAnt1.play(); 
    vidAnt2.play(); 
    vidAnt3.play(); 
    vidAnt4.play(); 
    vidAnt5.play(); 
    
    vidFlo1.play(); 
    vidFlo2.play(); 
    vidFlo3.play(); 
    vidFlo4.play(); 
    vidFlo5.play();
        if(!active) {
            active = true;
            setInterval(checkVid, 5900); //every second
            song.loop();
        }  
    } 
    
}



function initCamera() {
  rover = new RoverCam(this);
  rover.speed = 5;            
  rover.sensitivity = 1; 
}


function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); 
    lightFalloff(0, 0, 0);
    lig(1500, -350, 1500);
    lig(-1500, -350, -1500);
    lig(-1500, -350, 1500);
    lig(1500, -350, -1500);

   
    
  play();
  drawMetroEnv();
  drawAllBoxPan(); 
  checkPlaqueActivation();
  if(keyIsDown(70)) {fin = true};

}


function drawMetroEnv() {
    push(); // Draw Colonnes
    scale(100);
    translate(0, 3, 0);
    rotate(PI); 
    texture(texColonnes);
    model(modelColonnes);
    pop();
    
    push(); // Draw Sol
    translate(0, 200, 0);
    rotate(PI / 2, createVector(1, 0, 0)); 
    texture(texSol);
    plane(10000, 10000);
    pop();
    
    
    push(); // Draw Plafond
    translate(0, -360, 0);
    rotate(PI / 2, createVector(1, 0, 0)); 
    lig(0, -1000, 0);
    lig(0, -1000, 0);
    lig(0, -1000, 0);
    texture(texPlafond);
    plane(10000, 10000);
    pop();
    
    push(); // Draw Background
      lig(11000, 0, 11000);
  lig(-11000, 0, 11000); 
  lig(11000, 0, -11000);
  lig(-11000, 0, -11000);
 scale(150, 700, 150);
    texture(texBackground);
    model(modelBackground);
    pop();
    
}


function lig(x, y, z) {
    pointLight(250, 250, 250, x, y, z);
}


function drawAllBoxPan() {
    // Dans 
    drawBoxPan(0, createVector(1190, 0, 25), createVector(0, 1, 0), 0); // 1
    drawBoxPan(1, createVector(895, 0, 980), createVector(0, 1, 0), -PI /4); // 2
    drawBoxPan(2, createVector(20, 0, 1340), createVector(0, 1, 0), -PI /2); // 3
    drawBoxPan(3, createVector(-863, 0, 983), createVector(0, 1, 0), 5*PI /4); // 4
    drawBoxPan(4, createVector(-1220, 0, 10), createVector(0, 1, 0), PI); // 5
    drawBoxPan(5, createVector(-785, 0, -825), createVector(0, 1, 0), -5*PI /4); // 6
    drawBoxPan(6, createVector(20, 0, -1120), createVector(0, 1, 0), PI /2); // 7
    drawBoxPan(7, createVector(820, 0, -780), createVector(0, 1, 0), PI/4); // 8

}

function drawBoxPan(i, vecTrans, vecRotate, angle) {
    push(); // Draw one pan
    translate(vecTrans.x, vecTrans.y, vecTrans.z);
    rotate(angle, vecRotate); 
    drawPan(panTex[i][0][panState[i]], createVector(-panWidth /2, -10, 0), createVector(0, 1, 0), 3*PI /2); // Intérieur
    drawPan(panTex[i][1], createVector(0, -10, panWidth /2), createVector(0, 1, 0), 0); // Latéral droit
    drawPan(panTex[i][2], createVector(0, -10, -panWidth /2), createVector(0, 1, 0), PI); // Latéral gauche
    drawPan(panTex[i][3], createVector(panWidth /2, -10, 0), createVector(0, 1, 0), PI /2); // Extérieur
    drawPlaque(createVector(-panWidth, 199, 0), createVector(0, 1, 0), 3*PI /2); 
    pop();
}

function drawPan(texturePan, vecTrans, vecRotate, angle) {
    push(); // Draw one pan
    translate(vecTrans.x, vecTrans.y, vecTrans.z);
    rotate(angle, vecRotate); 
    texture(texturePan);
    plane(panWidth, panHeight);
    pop();
}

function drawPlaque(vecTrans, vecRotate, angle) {
    push(); // Draw one plaque
    translate(vecTrans.x, vecTrans.y, vecTrans.z);
    rotate(angle, vecRotate); 
    rotate(PI / 2, createVector(1, 0, 0)); 
    texture(texPlaque);
    plane(220, 220);
    pop();
}


function drawPoint(vecTrans) {
    push(); // Draw one plaque
    translate(vecTrans.x, vecTrans.y, vecTrans.z);
    sphere(40);
    pop();
}


function checkPlaqueActivation() {
    for(i = 0; i < 8; i++) {
      if(rover.position.x < plaquePosition[i][0] + 110 
        && rover.position.x > plaquePosition[i][0] - 110
        && rover.position.z < plaquePosition[i][1] + 110
        && rover.position.z > plaquePosition[i][1] - 110) {
            plaqueActivation[i] = true;
            //console.log("zone " + i);
        }
    }
}

function checkVid() {
    console.log("top");
    for(i = 0; i < 8; i++) {
      if(panState[i] == 1) panState[i]++;
      if(panState[i] == 3) panState[i] = 0;
      if(panState[i] == 4) panState[i] = 5;
      if(fin && panState[i] != 5) panState[i] = 4;
    }
    
    
    vidAnt1.stop(); 
    vidAnt2.stop(); 
    vidAnt3.stop();  
    vidAnt4.stop(); 
    vidAnt5.stop();  
    
    vidFlo1.stop(); 
    vidFlo2.stop();  
    vidFlo3.stop(); 
    vidFlo4.stop(); 
    vidFlo5.stop(); 
    
    vidAnt1.play(); 
    vidAnt2.play(); 
    vidAnt3.play(); 
    vidAnt4.play(); 
    vidAnt5.play(); 
    
    vidFlo1.play(); 
    vidFlo2.play(); 
    vidFlo3.play(); 
    vidFlo4.play(); 
    vidFlo5.play();
    
    
    for(i = 0; i < 8; i++) {
        if(panState[i] == 2 && plaqueActivation[i]) {
            panState[i] = 3;
            console.log("change");
            let choice;
            do{choice = int(random(0, 8))}
            while(panState[choice] != 0 || plaqueActivation[choice] != false);
            panState[choice] = 1;  
        } 
    }
    plaqueActivation = [false, false, false, false, false, false, false, false];
}



/*
 * 
 * The p5.RoverCam library - First-Person 3D CameraControl for p5.js and WEBGL.
 *
 *   Copyright © 2020 by p5.RoverCam authors
 *
 *   Source: https://github.com/freshfork/p5.RoverCam
 *
 *   MIT License: https://opensource.org/licenses/MIT
 * 
 * 
 * explanatory note:
 * 
 * p5.RoverCam is a derivative of the QueasyCam Library by Josh Castle,
 * ported to JavaScript for p5.js from github.com/jrc03c/queasycam
 * 
 */

// First-person camera control
// Mouse:
//       left/right : pan
//       up/down : tilt
//       click : move forward

// Keys: a/d : left/right
//       w/s : forward/backward
//       e/q : up/down

// First, define a callback system
// a location to store the class instances
var __RoverCam_cbq = [];

// let p5 know that we want a callback at the end of the draw loop.
// we iteratively call each item in the queue with its own context
p5.prototype.registerMethod('post', ()=>{for(let i of __RoverCam_cbq)i.draw.call(i)});

class RoverCam {
  constructor(){
    this.speed = 3.0;
    this.sensitivity = 2.0;
    this.position = createVector(2600, -85, 1200);
    this.velocity = createVector(0, 0, 0);
    this.up = createVector(0, 1, 0);
    this.right = createVector(1, 0, 0);
    this.forward = createVector(0, 0, 1);
    this.pan = 3.5;
    this.tilt = 0.0;
    this.friction = 0.75;
    perspective(PI/3, width/height, 0.01, 3000.0);
    // push 'this' onto a callback queue
    __RoverCam_cbq.push(this);
  }
  draw(){
    //this.pan += map(mouseX - pmouseX, 0, width, 0, TWO_PI) * this.sensitivity;
    //this.tilt += map(mouseY - pmouseY, 0, height, 0, PI) * this.sensitivity;
    //this.tilt = this.clamp(this.tilt, -PI/2.01, PI/2.01);

    if (this.tilt == PI/2.0) this.tilt += 0.001;

    this.forward = createVector(cos(this.pan), tan(this.tilt), sin(this.pan));
    //this.forward.normalize();
    this.right = createVector(cos(this.pan - PI/2.0), 0, sin(this.pan - PI/2.0));
    if(keyIsDown(RIGHT_ARROW)) this.pan += map(5, 0, width, 0, TWO_PI) * this.sensitivity;
    if(keyIsDown(LEFT_ARROW)) this.pan += map(-5, 0, width, 0, TWO_PI) * this.sensitivity;
    if(keyIsDown(UP_ARROW)) this.velocity.add(p5.Vector.mult(this.forward, this.speed));
    if(keyIsDown(DOWN_ARROW)) this.velocity.sub(p5.Vector.mult(this.forward, this.speed));
    //if(mouseIsPressed) this.velocity.add(p5.Vector.mult(this.forward, this.speed));

    this.velocity.mult(this.friction);
    this.position.add(this.velocity);
    let center = p5.Vector.add(this.position, this.forward);
    camera(this.position.x, this.position.y, this.position.z, center.x, center.y, center.z, this.up.x, this.up.y, this.up.z);
  }

  clamp(aNumber, aMin, aMax) {
    return (aNumber > aMax ? aMax
        : aNumber < aMin ? aMin
            : aNumber);
  }
}


