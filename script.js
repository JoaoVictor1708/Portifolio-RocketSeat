function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //se html tem imagem profile dark e light=true, trocar imagem profile para imagem light
  const img = document.querySelector("#imgdev img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/AvatarPast/Img-avatar-light-mode.jpg")
    img.setAttribute("alt", "Imagem do avatar do dev no modo light")
  } else {
    img.setAttribute(
      "src",
      "./assets/AvatarPast/IMG_20231127_204834_515.png.jpg"
    )
    img.setAttribute("alt", "Imagem do avatar do dev no modo dark")
  }
}

function MyApresentation(){
  alert(
  "Olá, meu nome é João Victor, tenho 15 anos e estou a procura de retomar e aprimorar meus conhecimentos sobre programação. Ja estudei um pouco de Html, Css, JavaScript e Java"
)
}

function Myportifolio(){
  alert(
    "Veja meu portifólio acessando meu perfil na Rocketseat, GitHub ou Linkedin"
  )
}