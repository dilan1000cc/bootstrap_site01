window.addEventListener('scroll', function () {
    let header = document.querySelector('.header-sticky');
    header.classList.toggle('sticky', window.scrollY > 210);
})