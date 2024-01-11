let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick=()=>{
    navbar.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}


gsap.from('.logo',{opacity:0, duration: 1, delay:2, y:10})
gsap.from('.navbar',{opacity:0, duration: 1, delay:2.1, y:30, stagger:0.2})

gsap.from('.title',{opacity:0, duration: 1, delay:1.6, y:30})
gsap.from('.description',{opacity:0, duration: 1, delay:2.1, y:130})
gsap.from('.btn',{opacity:0, duration: 1, delay:2.1, y:30})
gsap.from('.images',{opacity:0, duration: 1, delay:2.6, y:30})


const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky",window.scrollY)
})

let section=document.querySelectorAll('section')
let navlink=document.querySelectorAll('header ul li a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header ul li a[href*='+id+']').classList.add('active')
            })
        }
    })
}