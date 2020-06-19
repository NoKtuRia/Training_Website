let myTime;

document.getElementById('presentation').style.display = 'none';
document.getElementById('pres').style.display = 'none';
document.getElementById('header').style.display = 'none';
document.getElementById('footer').style.display = 'none';

function timeFunc() {
    myTime = setTimeout(loaderDisplay, 2000);
}

function loaderDisplay () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('header').style.display = 'flex';
    document.getElementById('footer').style.display = 'flex';
    document.getElementById('presentation').style.display = 'flex';
    document.getElementById('pres').style.display = 'table';
}