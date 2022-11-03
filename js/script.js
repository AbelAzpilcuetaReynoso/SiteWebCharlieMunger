const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');
const navDivHome = document.querySelector('#home');
const navDivBiography = document.querySelector('#biography');
const navDivVideo = document.querySelector('#video');
const navDivTimeline = document.querySelector('#timeline');
const navDivFamous = document.querySelector('#famous');

//When they click on Home, the menu will disappear
navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

//When they click on Home, the menu will disappear
navDivHome.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

//When they click on Biography, the menu will disappear
navDivBiography.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

//When they click on Video, the menu will disappear
navDivVideo.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

//When they click on Timeline, the menu will disappear
navDivTimeline.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

//When they click on Famous, the menu will disappear
navDivFamous.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
