$(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
});


// window.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll(".questions__button").forEach(function(el) {
//         el.addEventListener("click", function(event) {
//             document.querySelector(".questions__descr").classList.toggle("alert")
//         }) выпадение списка
//     })
// })

// window.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll(".questions__button").forEach(function(el) {
//         el.addEventListener("click", function(event) {
//             event.target.classList.toggle("questions__transform")
//         }) пворот кнопки
//     })
// })

// Табы
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".tabs-nav__btn").forEach(function(tabsBtn) {
        tabsBtn.addEventListener("click", function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll(".tabs-item").forEach(function(tabContent) {
                tabContent.classList.remove("tabs-item--active")
            })
            document.querySelector(`[data-target= ${path} ]`).classList.add("tabs-item--active")
        })
    })
})


// Бургер появление 
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__burger").addEventListener("click", function() {
        document.querySelector(".header__burger__menu").classList.toggle("header__burger__active")
    })
})

// Бургер исчезновение
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__burger__X__button").addEventListener("click", function() {
        document.querySelector(".header__burger__menu").classList.remove("header__burger__active")
    })
})

// Поиск появлени
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__button").addEventListener("click", function() {
        document.querySelector(".header__scan").classList.add("header__scan__open")
    })
})

// Поиск исчезновение
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__scan__closed__svg").addEventListener("click", function() {
        document.querySelector(".header__scan").classList.remove("header__scan__open")
    })
})