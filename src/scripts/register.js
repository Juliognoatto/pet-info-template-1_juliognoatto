// Desenvolva as funcionalidades de cadastro aqui

const redirectBtn = document.getElementById("redirect__button")
redirectBtn.addEventListener("click", () => {
  window.location.href = "/index.html"
})


import { userCadastro } from "./requests.js"

const cadastroSubmit = () => {

  const inputs = [
    document.getElementById("user"),
    document.getElementById("Email"),
    document.getElementById("picture"),
    document.getElementById("Senha")
  ]

  console.log(inputs)

  const buttonCadastro = document.getElementById("register__submit")

  buttonCadastro.addEventListener("click", (event) => {
    event.preventDefault()
    const cadastroBody = {}

    inputs.forEach(input => {
      cadastroBody[input.name] = input.value
    });
    userCadastro(cadastroBody)
  })
}
cadastroSubmit()
