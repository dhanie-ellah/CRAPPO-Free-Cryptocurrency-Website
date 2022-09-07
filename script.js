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
const bitcoin = document.getElementById('bitcoin')
const ethereum = document.getElementById('ethereum')
const litecoin = document.getElementById('litecoin')
const btcBtn = document.getElementById('btc-btn')
const ethBtn = document.getElementById('eth-btn')
const lteBtn = document.getElementById('lte-btn')
const mineBtc = document.getElementById('mine-btc')
const mineEth = document.getElementById('mine-eth')
const mineLte = document.getElementById('mine-lte')

bitcoin.onclick = () => {
     // BITCOIN CARD 
     bitcoin.style.backgroundColor = 'var(--secondary)'
     bitcoin.style.color = 'white'
     btcBtn.style.display = 'none'
     mineBtc.style.display = 'block'
     // ETHEREUM CARD 
     ethereum.style.backgroundColor = 'transparent'
     ethereum.style.color = 'black'
     ethBtn.style.display = 'block'
     mineEth.style.display = 'none'
     // LITECOIN CARD 
     litecoin.style.backgroundColor = 'transparent'
     litecoin.style.color = 'black'
     lteBtn.style.display = 'block'
     mineLte.style.display = 'none'
}
ethereum.onclick = () => {
     // BITCOIN CARD 
     bitcoin.style.backgroundColor = 'transparent'
     bitcoin.style.color = 'black'
     btcBtn.style.display = 'block'
     mineBtc.style.display = 'none'
     // ETHEREUM CARD 
     ethereum.style.backgroundColor = 'var(--secondary)'
     ethereum.style.color = 'white'
     ethBtn.style.display = 'none'
     mineEth.style.display = 'block'
     // LITECOIN CARD 
     litecoin.style.backgroundColor = 'transparent'
     litecoin.style.color = 'black'
     lteBtn.style.display = 'block'
     mineLte.style.display = 'none'
}
litecoin.onclick = () => {
// BITCOIN CARD 
     bitcoin.style.backgroundColor = 'transparent'
     bitcoin.style.color = 'black'
     btcBtn.style.display = 'block'
     mineBtc.style.display = 'none'
     // ETHEREUM CARD 
     ethereum.style.backgroundColor = 'transparent'
     ethereum.style.color = 'black'
     ethBtn.style.display = 'block'
     mineEth.style.display = 'none'
     // LITECOIN CARD 
     litecoin.style.backgroundColor = 'var(--secondary)'
     litecoin.style.color = 'white'
     lteBtn.style.display = 'none'
     mineLte.style.display = 'block'
}