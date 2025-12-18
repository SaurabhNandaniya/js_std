// just paste this thing on hiteshcoudharis .js file for solutions and output
//https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

const color = '0123456789ABCDEF';
const randomColor = function () {
  let genColor = '#'
  for(i = 0; i < 6; i++){
    genColor += color[Math.floor(Math.random() * 16)]
  }
  return genColor;
}


let intervalId
const startChangeColor = function (){
  if(!intervalId){
    intervalId = setInterval(changeColor,700)
  }
  function changeColor(){
    document.body.style.backgroundColor = randomColor()
  }
}
const stopChangeColor = function (){
  clearInterval(intervalId)
  intervalId = null
}

document.getElementById('start').addEventListener('click',startChangeColor)
document.getElementById('stop').addEventListener('click', stopChangeColor)

