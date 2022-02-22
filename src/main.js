let closeBtn = document.querySelector('.close-btn')
let introButton = document.querySelector('.intro__button')
let modal = document.querySelector('.modal')
introButton.onclick = function () {
modal.classList.toggle('visible') 

}
closeBtn.onclick = function () {
modal.classList.toggle('visible')
}


