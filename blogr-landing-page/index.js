const hamburger = document.querySelector('.hamburger')
const closeItem = document.querySelector('.close')
const menuIcon = document.querySelector('.menu-icon')
const menus = document.querySelector('.menus')


menuIcon.addEventListener('click', () => {
    if (menus.classList.contains('active')) {
        menus.classList.remove('active')
    } else {
        menus.classList.add('active')
    }

    if (closeItem.classList.contains('inactive-icon')) {
        closeItem.classList.remove('inactive-icon')
        hamburger.classList.add('inactive-icon')
    } else if (hamburger.classList.contains('inactive-icon')) {
        hamburger.classList.remove('inactive-icon')
        closeItem.classList.add('inactive-icon')
    }
})