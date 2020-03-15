document.querySelector('p').addEventListener('touchstart', myFunction);
document.querySelector('p').addEventListener('touchend', myFunction);
document.querySelector('p').addEventListener('touchmove', myFunction);

var a = document.getElementById('demo');

function myFunction(ev){
    document.getElementById('demo').innerHTML = ev.touches + ev.type;
    a.style.animation = "mymove 4s 2";
     console.log( ev.touches, ev.type );
}

a.addEventListener("animationstart", myStartFunction);
a.addEventListener("animationiteration", myRepeatFunction);
a.addEventListener("animationend", myEndFunction);

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}