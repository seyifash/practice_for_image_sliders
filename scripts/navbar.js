const bar = document.querySelector('.menu');
const bar2 = document.querySelector('.close');
const navBar = document.querySelector('.header-carrier');
const header = document.querySelector('.header-container');

if (bar) {
    bar.addEventListener('click', () => {
        bar.classList.add('menud');
        bar2.classList.add('closed');
        header.classList.add('active1');
        navBar.classList.add('active');
    }
    )
}
if(bar2) {
    bar2.addEventListener('click', () => {
        bar2.classList.remove('closed');
        bar.classList.remove('menud');
        header.classList.remove('active1');
        navBar.classList.remove('active');
    })
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active4');
        }
        else {
            reveals[i].classList.remove('active4');
        }
    }
}