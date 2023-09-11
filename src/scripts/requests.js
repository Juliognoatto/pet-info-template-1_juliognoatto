
const baseUrl = "http://localhost:3333";
const token = localStorage.getItem("@petinfo:token");

const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// Informações de usuário logado
export async function getCurrentUserInfo() {
  const request = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders,
  });
  const user = await request.json();

  return user;
}

// Listagem de posts
export async function getAllPosts() {
  const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ0MjgzNjAsImV4cCI6MTcyNTk2NDM2MCwic3ViIjoiOGMyYjRhMzQtNjM1ZS00NjQzLWE2YmQtMWMxYTkxY2QzM2E1In0.PX2lVe1_WGuo6-VGcigVlKgVPOeIYeDSoFYjYyjIZok"
  const request = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${newToken}`,
    }    
  })
  const posts = await request.json();
  return posts
  // .then(async (response) => {
  //   if(response.ok){
  //     const posts = await request.json();
  //     return posts
  //   } else {
  //     console.log('erro')
  //   }
  // })
  
}


// Desenvolva as funcionalidades de requisições aqui


export async function loginRequest(loginBody) {
  const loginToken =  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(loginBody)
  })
  .then(async (res) => {
    const resConvert = await res.json()

    if(res.ok) {
      localStorage.setItem('@petinfo:token', JSON.stringify(resConvert.token))
      window.location.href = '/src/pages/feed.html'
      console.log(resConvert)
      return resConvert  
    } else {
      throw new Error(resConvert.message)
    }
  })
  .catch(err => alert(err.message))

  return loginToken
}

// //////////////

export async function userCadastro(dadosDoCadastro) {
// export const userCadastro = async (dadosDoCadastro) => {
  const cadastroToken = await fetch(`${baseUrl}/users/create`, {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(dadosDoCadastro)
  })
  .then(async (res) => {
    const resConvert = await res.json()

    if(res.ok) {
      localStorage.setItem('@petinfo:token', JSON.stringify(resConvert.token))
      alert('usuario cadastrado com sucesso')
    }else{
      throw new Error(resConvert.message)
    }
  })
  .catch(err => alert(err.message))

  return cadastroToken
}

////////////////////////
export async function criapost(data) { 
  const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ0MjgzNjAsImV4cCI6MTcyNTk2NDM2MCwic3ViIjoiOGMyYjRhMzQtNjM1ZS00NjQzLWE2YmQtMWMxYTkxY2QzM2E1In0.PX2lVe1_WGuo6-VGcigVlKgVPOeIYeDSoFYjYyjIZok"
  const postToken = await fetch(`http://localhost:3333/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newToken}`
      },
      body: JSON.stringify(data),
  })
  .then(async(res) => {
    if (res.ok) {
        alert("Post enviado com sucesso!");
        title.value = "";
        content.value = "";
    } else {
        alert("Erro ao enviar o post. Verifique a sua API.");
    }
  })
  return postToken

}