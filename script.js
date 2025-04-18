var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000, // Slower transition
        disableOnInteraction: false, // Keeps autoplay running even after interaction
    },
    speed: 1200, // Slower transition speed for smoother effect
    effect: "slide", // Keeps it smooth
    grabCursor: true, // Makes it feel more interactive
});

// Mouse movement effect
document.querySelector(".mySwiper").addEventListener("mousemove", function (event) {
    let swiperContainer = this.getBoundingClientRect();
    let mouseX = event.clientX - swiperContainer.left;

    if (mouseX > swiperContainer.width / 2) {
        swiper.slideNext(); // Move to next slide if hovered on the right side
    } else {
        swiper.slidePrev(); // Move to previous slide if hovered on the left side
    }
});


// FUNCTION FOR LOGIN

function goToLogin() {
    window.location.href = "login.html";
}


function goToSignUp() {
    window.location.href = "signup.html";
}