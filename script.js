
function bigImg(x) {
  x.style.height = "30px";
  x.style.width = "30px";
  
}

function normalImg(x) {
 
  x.style.height = "24px";
  x.style.width = "24px";
}

function toggle(){
  var blur= document.getElementById('blur');
  blur.classList.toggle('active');
  var popup=document.getElementById('popup');
  popup.classList.toggle('active');

}