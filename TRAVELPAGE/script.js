
let sidebar = document.querySelector(".sidebar")
let navbar = document.querySelector(".navbar")

var swiper = new Swiper(".mySwiper", {
    slidesPerView : 'auto',
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween:2,
          speed:2500,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 0, // Slower transition
        disableOnInteraction: false, // Keeps autoplay running even after interaction
    },
    speed: 3500, // Slower transition speed for smoother effect
    effect: "slide", // Keeps it smooth
    grabCursor: true, // Makes it feel more interactive
});




// FUNCTION FOR LOGIN


function showSlidebar(){
    console.log("clicked");
    
    if(sidebar.style.display === "none" || sidebar.style.display === ""){
        sidebar.style.display = "block"; 
        navbar.style.display = "none"
        
    }
   
}

function hideSlidebar() {
    console.log("button is clicked");
    console.log(sidebar)
    console.log(sidebar.style);
    
    if(sidebar.style.display === "block" || sidebar.style.display === "" )
    {
        sidebar.style.display = "none"
         navbar.style.display = ""
    }
}



function goToLogin() {
    console.log("btn is clicked");
    
    window.location.href = "SIGNUP&LOGIN/signup.html";
}

function goToform2(){
    console.log("Hello");
    
    window.location.href="form2.html";
}

function goToTrips(){
    window.location.href="TRIPS/optionmenu.html";
}