
document.querySelector('#merica').addEventListener('click', convert)

function convert() {
   let temp = document.querySelector('#tempInput').value
   
      temp = temp * 9 / 5 + 32
      console.log(temp)
      document.querySelector('#answer').innerText = `${temp} F`
   
}
