// JavaScript: Novice to Ninja, 2nd Edition
// Chapter Nine


// old method of animating in JavaScript
// const squareElement = document.getElementById('square');
// let angle = 0;

// setInterval(() => {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000 / 60); // frame speed of 60 frames per second

//newer method of animating
// const squareElement = document.getElementById('square');
// let angle = 0;

// function rotate() {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
//     window.requestAnimationFrame(rotate);
// }
// const id = requestAnimationFrame(rotate);
// the frame rate us optimized for the device in use
