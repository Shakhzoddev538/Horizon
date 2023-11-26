let user = document.querySelector('.user_profile')
let open = document.querySelector('.right_icons-hamburger')
let close = document.querySelector('.cansel')


open.onclick = () => {
    user.style.display = "block"
}
close.onclick = () => {
    user.style.display = "none"
}

