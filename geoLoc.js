const long=document.getElementById('long')
const lati=document.getElementById('lati')

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(ExbLoc,Erroloc)
}else{
  console.log('Disgraça')
}
function ExbLoc(pos){
  long.innerHTML=`Longitude : ${pos.coords.longitude}`
  lati.innerHTML=`Latitude : ${pos.coords.latitude}`
  console.log(pos);
}
function Erroloc(){
  console.log('Disgraça');
}

