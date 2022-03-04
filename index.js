const soundcloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

// adding a listerner for the on and off button
off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('clik', () => soundTrack('on'));

// fucntion for soundtrack, transitions button from on/off
const soundTrack = (soundState) => {
    if(soundState === 'off') {
        on.style.display = 'block';
        off.style.display = 'none';
        soundcloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on') {
        on.style.display = 'none';
        off.style.display = 'block';
        soundcloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// function to play/pause and display nav bar
const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('times');
const sideNav = document.querySelector('.aside')

btnBars.addEventListener('click', () => myFunc('open'));
btnBars.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open') {
        sideNav.classList.add('show-nav')
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close') {
        sideNav.classList.remove('show-nav')
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }

}