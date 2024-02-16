import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import adaptive from "./components/adaptive";

document.addEventListener("DOMContentLoaded", () => {
    const menuTabs = document.querySelector(".menu__list");
    const menuTabsItem = document.querySelectorAll(".menu__list-item--tab");
    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu");
    const menuSub = document.querySelector(".menu__sub");
    const menuBtn = document.querySelector(".burger");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        document.querySelector("html").classList.toggle("lock");
    })

    let maxMenuTabHeight = 0;

    header.nextElementSibling.style.paddingTop = header.clientHeight + "px";

    if (window.innerWidth >= 768) {
        menuTabsItem.forEach(el => {
            const subMenu = el.querySelector("ul");

            if (maxMenuTabHeight <= subMenu.clientHeight) {
                maxMenuTabHeight = subMenu.clientHeight;
            }
    
            el.addEventListener("mouseenter", () => {
                menuTabsItem.forEach(item => {
                    item.classList.remove("active")
                })
                menuSub.querySelectorAll("ul").forEach(item => {
                    item.classList.remove("active");
                })
                el.classList.add("active");
                subMenu.classList.add("active");
            });
            menuSub.append(subMenu);
        });
    } else {
        menuTabsItem.forEach(el => {
            const subMenu = el.querySelector("ul");

            el.classList.remove("active");
            subMenu.classList.remove("active");

            el.addEventListener("click", () => {
                el.classList.toggle("active");
                subMenu.classList.toggle("active");
            })
        });
    }

    const speakersSlider = new Swiper(".speakers__slider-container", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: document.querySelector(".speakers__slider-arrow--next"),
            prevEl: document.querySelector(".speakers__slider-arrow--prev")
        },
        breakpoints: {
            993: {
                slidesPerView: 3
            },

            768: {
                slidesPerView: 2,
            }
            
        }
    })


    adaptive();

    menu.style.paddingTop = header.clientHeight + "px";
})

