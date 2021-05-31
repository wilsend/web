
window.onload = setTime;

function setTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds + ampm; 
  var t = setTimeout(setTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

function navRespon() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function modify(){
	var date = document.lastModified;
	document.getElementById("mod").innerHTML = date;
}
