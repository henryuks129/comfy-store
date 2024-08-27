const pattern = {
  email: /^([a-z\d.-]+)@([a-z\d]{2,8})\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
  password: /^[\w-@\.]{8,}$/,
}


const inputs = document.querySelectorAll("input")
const userInput = document.querySelector(".user-form")

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
           validate(input)
  })
})

function validate(input){
  if(pattern[input.name].test(input.value)){
    input.className = "valid"
  }else{
    input.className = "invalid"
  }
}