document.addEventListener('DOMContentLoaded', () => {
    const menuPopUp = document.querySelector('.menu-popup')

    const mobileMenu = document.querySelector('.menu-btn')
    mobileMenu.addEventListener('click', () => {
        menuPopUp.style.display = 'block'
    })

    const cancelBtn = document.querySelector('.cancel-btn')
    cancelBtn.addEventListener('click', () => {
        menuPopUp.style.display = 'none'
    })
})