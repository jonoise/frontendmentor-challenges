const ham = document.querySelector('.fa-bars')
const ex = document.querySelector('.fa-times')
const iconDiv = document.querySelector('.menu-icon')
const navItems = document.querySelector('.nav-items')

iconDiv.addEventListener('click', () => {
    if (ham.classList.contains('inactive-icon')) {
        ham.classList.remove('inactive-icon')
        ex.classList.add('inactive-icon')
        navItems.classList.remove('active')
    } else {
        ham.classList.add('inactive-icon')
        ex.classList.remove('inactive-icon')
        navItems.classList.add('active')
    }
})