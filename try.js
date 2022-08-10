let canvas =document.querySelector('canvas');
canvas.width=800;
canvas.height=600;
let i=0;
let x=390; let y=100;
let p=90; let q=100;
canvas.style.backgroundColor="black";
let c= canvas.getContext("2d");


function triangle(){
    //const ctx=canvas.getContext("2d");
   const ani= requestAnimationFrame(triangle);
    c.clearRect(0,0,800,600)
    
   
    //for(var i=0; i<15; i++){
        for(var j=0; j<40; j++){
            c.beginPath();
            c.moveTo(j*20,i-20);
            c.lineTo(20*(j+1),i-20);
            c.lineTo(10*(2*j+1),17.32+i-20);
            c.fillStyle="#ffb09c";
            c.fill();
    
    }
    i=i+2;

    
    
    c.beginPath();
    c.fillStyle="blue";
    c.arc(x,y,10,0,Math.PI*2,false);
    c.stroke();
    c.strokeStyle="blue"
    c.fill();
    
    y=y+1;
    
    
    
    const dy=y-(17.32+i-20);
    const distance=Math.sqrt(dy*dy);

    if (distance<=10){
        cancelAnimationFrame(ani);
        alert("Game over, Your score is: "+y)
        location.reload();
    }   
}

function tiles(){
    for(var i=0; i<8; i++){
        p=(Math.random()*751)+45;
        q=(Math.random()*(581))+40;
        h=(Math.random()*18)+33;
        // requestAnimationFrame(circle);
        // c.clearRect(0,0,800,600);
        c.beginPath();
        // c.arc(x,y,30,0,Math.PI*2,false);
        // c.strokeStyle="blue"
        // c.stroke();
        c.fillStyle="red";
        c.rect(p,q,h,3)
        c.strokeStyle="blue";                                                         
        c.stroke();
        c.fill();
    }
    }

triangle();
tiles();
