function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //se html tem imagem profile dark e light=true, trocar imagem profile para imagem light
  const img = document.querySelector("#imgdev img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Imagem do avatar do dev no modo light")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Imagem do avatar do dev no modo dark")
  }
}
