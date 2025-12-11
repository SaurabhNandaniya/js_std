// just paste this thing on hiteshcoudharis .js file for solutions and output



const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)