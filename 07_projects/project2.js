// just paste this thing on hiteshcoudharis .js file for solutions and output
//https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

const form = document.querySelector('form')

// here this gives empty value if we extrach the height weight
// cause every time you reload that script runs and we want the value
// after entering so thats why we dont fetch the value here
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if( !height || height < 0 || isNaN(height)){
    results.innerHTML = `please enter a valid height ${height}`
  } else if( !weight || weight < 0 || isNaN(weight)){
    results.innerHTML = `please enter a valid weight ${weight}`
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi<18.6){
      results.innerHTML = `<span>BMI: ${bmi}</span>
      <p>you are under weight</p>`
    }else if(bmi>=18.6 && bmi <= 24.9){
      results.innerHTML = `<span>BMI: ${bmi}</span>
      <p>you are Normal weight</p>`
    } else {
      results.innerHTML = `<span>BMI: ${bmi}</span>
      <p>you are over weight</p>`
    }
  }
})