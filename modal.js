let modal_bg = document.querySelector('.modal_bg')
let btn = document.querySelectorAll('.profile_img')
let head = document.querySelectorAll('.hidden')

btn.onclick = () => {
    modal_bg.style.display = "flex"
    head.style.display = "none"
}
