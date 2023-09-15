// play and pause

var vid = document.getElementById("Video");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

var img = document.getElementById("map");

// setInterval(imgdisplay, 20000);

// function imgdisplay() {
//     img.style.display = "block";
// }

function imgtoggle() {
    // img.style.display="none";
    if (img.style.display === "none") {
        img.style.display = "block";
      } else {
        img.style.display = "none";
    }
}


// Get DOM Elements
//-------------------------
// var cursor = document. querySelector('.Cursor');
// console.log('cursor:', cursor);

// Event Listener
// //-------------------------
// document.addEventListener('mousemove', function (event){
//     console.log(event.x, event.y);
//     cursor.style.left = `${event.x }px`;
//     cursor.style.top = `${event.y }px`;
//     cursor.style.width = `${event.x }px`;
//     cursor.style.height = `${event.y }px`;
// })