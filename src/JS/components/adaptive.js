function adaptive () {

    if (window.innerWidth <= 576) {
        const bgMob = document.querySelectorAll("[data-bg-mob]");
        
        bgMob.forEach(item => {
            item.style = `background-image: url(${item.getAttribute("data-bg-mob")})`;
        })
    }
    
}

export default adaptive;