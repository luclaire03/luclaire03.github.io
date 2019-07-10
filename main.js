alert("welcome to my page!");

function showText(text){
  document.getElementbyId("text").style.display="block";
  document.getElementbyId("text").innerHTML=text;
}

function hide(){
  document.getElementbyId("text").style.display="none";
}

function bigImg(x){
  x.style.height="64px";
  x.style.width="64px";
}

function normalImg(x){
  x.style.height="32px";
  x.style.width="32px";
}
