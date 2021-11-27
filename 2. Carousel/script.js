let newIndex = 0
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]") // Returns its ancestor with given selectors
            .querySelector("[data-slides]")
        const slidesLength = slides.children.length
        const activeSlide = slides.querySelector("[data-active]")
        newIndex = (newIndex + offset) % slidesLength
        newIndex = (newIndex < 0) ? (slidesLength + newIndex) : newIndex
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})