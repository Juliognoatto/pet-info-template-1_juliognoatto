import { renderAllPosts } from "./render.js";
import { criapost } from "./requests.js";
const token = localStorage.getItem("@petinfo:token");

function showUserMenu() {
  const userAction = document.querySelector(".user__image");
  const menu = document.querySelector(".user__logout");

  userAction.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
  });
}



function main() {
  // Adiciona os eventos de click ao menu flutuante de logout
  showUserMenu();
  // Renderiza todos os posts no feed (render.js)
  renderAllPosts()
  console.log(token)
}
main();


//sair da conta
function sairDaConta() {
  localStorage.clear();
  window.location.href = "/index.html"; 
}

const sairDaContaButton = document.getElementById("account__leave");
if (sairDaContaButton) {
  sairDaContaButton.addEventListener("click", sairDaConta);
}

// ///////////////////

// Obtém elementos do DOM
const openModalBtn = document.getElementById("user__newpost");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");


openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



const saveButton = document.getElementById("saveBtn")

saveButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");

  const title = titleInput.value;
  const content = contentInput.value;

  if (!title || !content) {
      alert("Preencha todos os campos antes de enviar.");
      return;
  }

  const data = {
      title: title,
      content: content,
  };

  criapost(data)
});


// 1. Capture o elemento "Acessar Publicação" via DOM
const accessPublication = document.querySelector('seu_seletor_aqui');
// 2. Adicione um evento ao botão, e manipule o evento para acessar a propriedade "data-id":
accessPublication.addEventListener('click', (event) => {
  // Dessa forma você consegue acessar a propriedade data-id
  const postID = event.target.dataset.id;
  console.log(postID);
})

// const btnLogin = document.getElementById('login__submit')
// const usernameH2 = document.getElementById("usernameH2");
// const userName = document.getElementById('user')
// btnLogin.addEventListener('click', () => {
//   const username = user.value;
//   usernameH2.textContent = username;
// })
