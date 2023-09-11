
import { loginRequest } from "./requests.js"

const handleLogin = () => {
  const inputs = [
        document.getElementById("Email"),
        document.getElementById("Senha")
      ]
  const button = document.getElementById("login__submit")

  console.log(inputs)

  button.addEventListener('click', (event) => {
    event.preventDefault()
    const loginBody = {}

    inputs.forEach(input => {
      loginBody[input.name] = input.value
    })

    loginRequest(loginBody)
  })
}

handleLogin()

const buttonRegister = document.getElementById("register__button")
buttonRegister.addEventListener("click", () => {
  window.location.href = "/src/pages/register.html"
})