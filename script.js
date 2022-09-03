// RESPONSIVE NAVIGATION BAR
const hamburgerMenu = document.getElementById('hamburgerMenu')
const closeBtn = document.getElementById('closeBtn')
const links = document.getElementById('links')

hamburgerMenu.onclick = () => {
     hamburgerMenu.style.display = 'none'
     closeBtn.style.display = 'block'
     links.style.display = 'block'
}

closeBtn.onclick = () => {
     hamburgerMenu.style.display = 'block'
     closeBtn.style.display = 'none'
     links.style.display = 'none'
}

// CHANGING CARD BACKGROUND AND COLOR ON CLICK
// const cryptocurrency = document.querySelectorAll('.cryptocurrency')
// const rightBtn = document.querySelectorAll('.right')
// const mineBtn = document.querySelectorAll('.changebtn')
// cryptocurrency.forEach(() => {
//      rightBtn.addEventListener('click', () => {
//      })
// })