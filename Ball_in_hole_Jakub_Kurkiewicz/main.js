
let ball = document.querySelector("#orb");                     
let container = document.querySelector("#box");  
let hole;  
let holeY;
let holeX;
let cut_holeY;
let cut_holeX;
let posX = 20
let posY = 20;
let speedX = 0;
let speedY = 0;
let gameStart = false;
let el;


window.addEventListener('deviceorientation', changePos)

function start(){                                            
    gameStart=true;
    spawnHole();                       
    moveBall();  
    document.getElementById("start").hidden=true;
    ball.style.visibility = "visible"
}

function restart(){   
    //window.location.reload(true);        
    el = document.getElementsByClassName("holesss")
    el.remove();                   
    gameStart=true;
    posX = 20, posY = 20;
    spawnHole();                
    moveBall();                
    document.getElementById("restart").hidden=true;
}

function changePos(e){         
    speedX=e.gamma/45
    speedY=e.beta/45
}

function spawnHole(){                                
    hole = document.createElement('div');
    hole.style.left=(Math.random()*(window.innerWidth-70))+'px';
    hole.style.top=(Math.random()*(window.innerHeight-70))+'px'
    holeX = hole.style.left;
    holeY = hole.style.top;
    hole.classList.add("holesss");
    hole.style.backgroundColor="black";
    container.appendChild(hole);
}


function moveBall(){                 
    if(posX+speedX<window.innerWidth-50 && posX+speedX>0){ 
        posX+=speedX;
        ball.style.left=posX+'px';        
    }
    if(posY+speedY<window.innerHeight-50 && posY+speedY>0){
        posY+=speedY;
        ball.style.top=posY+'px';        
    }

   cut_holeY = parseInt(holeY.slice(0,-2));

   cut_holeX = parseInt(holeX.slice(0,-2));

  

   if(getDistance(cut_holeX,cut_holeY,posX,posY) <  (((hole.offsetWidth/2) + (ball.offsetWidth/2))-2)){
    document.getElementById("restart").hidden=false;
    hole.style.backgroundColor = "red";
   }
    

    if(gameStart==true){
        window.requestAnimationFrame(moveBall)
    }
    
}


function getDistance(x1,y1,x2,y2){
    let xDistance = x2-x1;
    let yDsitance = y2-y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDsitance, 2));
}


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}