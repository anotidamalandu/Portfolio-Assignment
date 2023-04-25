const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

gsap.to(".first", 2, {delay: .6, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 2, {delay: .8, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 2, {delay: .9, top: "-100%", ease: Expo.easeInOut});