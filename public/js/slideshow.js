var slideIndex = 1

function plusSlide(caller, slides) {
    showSlide(caller, slideIndex += slides)
}

function showSlide(caller, slide) {
    let slides = document.getElementById(caller).getElementsByClassName('slides')
    if (slide > slides.length) slideIndex = 1
    if (slide < 1) slideIndex = slides.length
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
}