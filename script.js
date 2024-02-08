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
