window.addEventListener('scroll', () => {
    let scroll = document.querySelector('header')
    scroll.classList.toggle('scrollOn', window.scrollY > 0)
})