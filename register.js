const pattern = {
  username: /^([\w-\d.-]{8, })$/,
  email: /^([a-z\d.-]+)@([a-z\d]{2,8}+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
  password: /^[\w-@\.]{8,}$/,
}

const inputs = document.querySelectorAll("input")
const userInputs = document.querySelector(".user-form")

inputs.forEach(inputs => {
  inputs.addEventListener("keyup",(e) => {
    validate(input)
  })
})

function validate(input) {
  if (pattern[input.name].test(input.value)){
    input.className = "valid"
  }else {
    input.className = "invalid"
  }
}