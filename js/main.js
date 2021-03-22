// Menu Show
const showMenu = (toggleId, navId)=>{ // function so when you click the side menu opens in the small screen
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu') 

// active and remove menu
const navLink = document.querySelectorAll('.nav__link') // function so when you click a nav link the line is only on the one you clicked
function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show') // removes the sidebar when you clickon link
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

// scrll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true
});

// scroll home
sr.reveal('.home__title',{});
//sr.reveal('.button',{delay:200})
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});