let hr  = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const btn = document.getElementById("btn");

let hours   = 24;
let minuts  = 59;
let seconds = 59;
let setintervalstop;

hr.innerText = hours;
min.innerText = minuts;
sec.innerText = seconds; 


function hrtiming(){
 hours--;
  hr.innerText = hours;
  console.log(hours);
  minuts = 59;

  mintiming();

  if(hours == 0){
   hr.innerText =  hours   = 24;
   min.innerText = minuts  = 59;
   sec.innerText = seconds = 59;
  }
}

function mintiming() {
    min.innerText = minuts--;
    if(minuts < 0){
        hrtiming();
    }
    
    seconds = 59;
    
    sectiming();
}


function sectiming(){
  
     setintervalstop = setInterval(()=>{
         sec.innerText = seconds--;
         
        if(seconds < 0){
            clearInterval(setintervalstop);
            mintiming();
        };
    },1000);
   
    
};