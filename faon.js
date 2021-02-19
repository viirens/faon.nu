let font;
let divwidth;
let divheight;

function preload() {
    font = loadFont("Menlo.ttf");
    }

function setup() {   
    divwidth = document.getElementById('canvasWrapper').offsetWidth;
    divheight = document.getElementById('canvasWrapper').offsetHeight;
    c = createCanvas(divwidth,divheight);
    c.parent('canvasWrapper');
    textFont(font);
    textSize(50);
    textAlign(CENTER, CENTER);  
    domel = createElement('box');
    domel.id('box');
    title = createElement('h1', "faon.nu");
    title.id('title');
    // title = document.getElementById('title');

}

function draw() {
  
    
   
    // fit min & max rect height
    var recheight = height/2;
    if (recheight < 270) {
        recheight = 270;
    }
    else if (recheight > 360) {
        recheight = 360;
    }

    domel.position((windowWidth - recheight)/2, (height - recheight)/2.38);
    title.position(windowWidth/2 - 120, ((height - recheight)/2.38) - 42 );
    
    fill(0, 0, 255, 30);
    noStroke();
 
    // domel.mouseOver(lemon); 
 
  
}

function windowResized() {
    divwidth = document.getElementById('canvasWrapper').offsetWidth;
    divheight = document.getElementById('canvasWrapper').offsetHeight;
    resizeCanvas(divwidth,divheight);
}



// function lemon() {
    
//     var elem = document.getElementById("title");
//     var pos = ((height - recheight)/2.38) - 42 ;
//     var x = true;
//     var limit = 0;
//     var stat = pos-20;

//     function frame() {

//       if (pos >= limit) {
//           x = false;
//       }
//       if (pos <= stat) {
//           x = true;
//       }
//       if (x == false) {
//             pos -= .25;
//             console.log(pos)
//             console.log(pos-10);
//             elem.style.top = pos + "px";
//       }
//       else if (x == true) {
//             title.position((windowWidth/2) - 120, stat);
//       }
//       requestAnimationFrame(frame);
//     }
//   frame();
//   }