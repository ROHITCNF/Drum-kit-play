var number_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < number_buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    make_sound(buttonInnerHTML);//sound hoga
    buttonAnimation(buttonInnerHTML);//light jalega
  } );
}

//document means all the web page
//if keyboard is pressed
document.addEventListener("keydown",function(event){
  make_sound(event.key);//sound hoga
  buttonAnimation(event.key);//light hoga
});

function make_sound(key){
  switch (key) {
    case "w":
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
  break;
case "a":
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  break;
case "s":
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
  break;
case "d":
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  break;
case "j":
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
  break;
case "k":
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  break;
case "l":
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  break;
default:
  alert(key);
  }
}

//ab humko light jalana hai button pe if pressed
function buttonAnimation(key){
  //now touch the class of the button
var active_key=  document.querySelector("."+key);
  active_key.classList.add("pressed");
  //now the problem is the light is keep getting on
  //so we hav to switch it off manually
  //after some required time
  setTimeout(function(){
    active_key.classList.remove("pressed");
  },100);
    //in mili second
}
