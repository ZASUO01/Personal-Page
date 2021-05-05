const goToHomeBtns = document.querySelectorAll('.go-to-home');
const goToAboutBtns = document.querySelectorAll('.go-to-about');
const goToSkillsBtns = document.querySelectorAll('.go-to-skills');
const goToProjectsBtns = document.querySelectorAll('.go-to-projects');
const goToContactBtns = document.querySelectorAll('.go-to-contact');
const homeToAboutBtn = document.querySelector('#home-to-about');
const homeToContactBtn = document.querySelector('#home-to-contact');
const upBtn = document.querySelector('#up-btn');

const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');
const projectsSection = document.querySelector('.projects');
const contactSection = document.querySelector('.contact');

const header = document.querySelector('.header');

const showBtnOnScroll = () => {
    if(window.pageYOffset > 700){
        upBtn.style.display = 'block';
    }else{
        upBtn.style.display = 'none';
    }
}

const changeHeaderOnScroll = () => {
    if(window.pageYOffset > 50){
        header.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
        header.style.boxShadow = '0px 5px 5px #080808';
    }else{
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
}



const scrollToEl = (element) => {
    const elPosition = element.offsetTop;
    window.scrollTo(0, elPosition);
}

window.addEventListener('scroll', () => {
    showBtnOnScroll();
    changeHeaderOnScroll();
})

upBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})

goToHomeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.scrollTo(0,0);
    });
})


goToAboutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToEl(aboutSection);
    });
});



goToSkillsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToEl(skillsSection);
    });
});

goToProjectsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToEl(projectsSection);
    });
});


goToContactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        scrollToEl(contactSection)
    });
}); 


homeToAboutBtn.addEventListener('click', () => {
    scrollToEl(aboutSection);
});

homeToContactBtn.addEventListener('click', () => {
    scrollToEl(contactSection);
});

