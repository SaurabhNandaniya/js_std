// just paste this thing on hiteshcoudharis .js file for solutions and output
//https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector('body')

buttons.forEach( (button) => {
  console.log(button)
  button.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow')
    {
      body.style.backgroundColor = e.target.id
    }
    
  })
})

//written by me
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body')

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     body.style.backgroundColor = e.target.id;
//   })
// })
//newwwwwwwwwwwwwwww
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('button')) {
//     document.body.style.backgroundColor = e.target.id;
//   }
// });
