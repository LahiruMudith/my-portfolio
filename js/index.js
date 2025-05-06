//based on an Example by @curran
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 3000;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){

    if(animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}

function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for(i = 0; i < numStars; i++){
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.'+Math.floor(Math.random() * 1000) + 1
        };
        stars.push(star);
    }
}

function moveStars(){
    for(i = 0; i < numStars; i++){
        star = stars[i];
        star.z--;

        if(star.z <= 0){
            star.z = canvas.width;
        }
    }
}

function drawStars(){
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }
    if(warp==0)
    {c.fillStyle = "black";
        c.fillRect(0,0, canvas.width, canvas.height);}
    c.fillStyle = "rgba(209, 255, 255, "+radius+")";
    for(i = 0; i < numStars; i++){
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
        //c.fill();
    }
}
//
// document.getElementById('warp').addEventListener("click",function(e){
//     window.warp = window.warp==1 ? 0 : 1;
//     window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
//     executeFrame();
// });

executeFrame();

var swiper = new Swiper(".blog-slider", {
    loop: false,
    slidesPerView: "1",
    speed: 500,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
    },
    mousewheel: {
        invert: false,
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        0: {
            effect: "slide",
            centeredSlides: false,
        },
        768: {
            slidesPerView: "2",
            centeredSlides: true,
        },
        1200: {
            slidesPerView: "3",
            centeredSlides: true,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
    },

});
