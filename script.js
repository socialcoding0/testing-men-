const navA = document.querySelectorAll(".nav-link");
var timeUp;


// menu event effect 
window.addEventListener("DOMContentLoaded", function () {
    for (let a of navA) {
        // f5 atmadan sayfa boyutunu göstermediği için f5 atman gerekiyor.

        if (window.innerWidth <= 1260) {

            a.addEventListener("mouseenter", function (e) {
                var timeBack;

                if (timeBack != undefined) {
                    clearTimeout(timeBack);

                }



                timeUp = setTimeout(() => {

                    let span = e.target.children[1];
                    // console.log(e.target.children[1]);

                    span.classList.add("span-up");
                    span.classList.remove("span-back");

                }, 1000);

            });

            a.addEventListener("mouseleave", function (e) {

                clearTimeout(timeUp);

                timeBack = setTimeout(() => {
                    let span = e.target.children[1];
                    // console.log(e.target.children[1]);
                    if (span.classList.contains("span-up")) {
                        span.classList.add("span-back");
                        span.classList.remove("span-up");
                    }

                }, 100);

            });

        }
    }
});




// profile slider 

const profileContainer = document.querySelector("#profile-container");
const profileSliderLeftBtn = document.querySelector("#profile-slider-left-control");
const profileSliderRightBtn = document.querySelector("#profile-slider-right-control");







profileContainer.addEventListener("scroll", function () {
    let scrollMaxLeftValue = profileContainer.scrollWidth - profileContainer.clientWidth;
    let scrollLeft = Math.ceil(profileContainer.scrollLeft);
    // console.log(scrollMaxLeftValue);
    // console.log(scrollLeft);
    ppSliderLeftControl(scrollLeft);
    ppSliderRightControl(scrollLeft, scrollMaxLeftValue);

});

profileSliderRightBtn.addEventListener("click", function () {
    profileContainer.scrollLeft += 317;
});

profileSliderLeftBtn.addEventListener("click", function () {
    profileContainer.scrollLeft -= 317;
});


function ppSliderLeftControl(scrollLeft) {
    if (scrollLeft == 0) {
        profileSliderLeftBtn.style.display = "none";

    }
    else {
        profileSliderLeftBtn.style.display = "block";
    }
}

function ppSliderRightControl(scrollLeft, scrollMaxLeftValue) {
    if (scrollLeft == scrollMaxLeftValue) {
        profileSliderRightBtn.style.display = "none";
    }
    else {
        profileSliderRightBtn.style.display = "block";
    }
}










// post video



const postVideo = document.querySelector(".post-short-video");
const playBtn = document.querySelector(".post-videos-play-btn");

playBtn.addEventListener("click", function (e) {

    e.preventDefault();
    let postVideo = e.target.parentElement.children[2];
    let playBtnIcon = e.target.children[0];

    console.log(postVideo.currentTime);
    if (postVideo.paused) {
        postVideo.play();
        playBtnIcon.classList.add("post-videos-play-btn-active");
        playBtnIcon.classList.remove("post-videos-play-btn-disabled");
    }
    else {
        postVideo.pause();
        playBtnIcon.classList.add("post-videos-play-btn-disabled");
        playBtnIcon.classList.remove("post-videos-play-btn-active");
    }
});

let speaker = playBtn.parentElement.children[1].children[1];

speaker.addEventListener("click", function (e) {

    // console.log(e.target);
    let postVideo = e.target.parentElement.parentElement.children[2];
    if (postVideo.muted) {
        postVideo.muted = false;
        speaker.className = "fa-solid fa-volume-high speaker";
    } else {
        postVideo.muted = true;
        speaker.className = "fa-solid fa-volume-xmark speaker";
    }

    // console.log(postVideo);
});

postVideo.pause();

// post like 




const postLikeBtns = document.querySelectorAll(".post-like");


for (let postlikebtn of postLikeBtns) {
    postlikebtn.addEventListener("click", function (e) {

        let likeNumber = e.target.parentElement.nextElementSibling.children[0];
        let number = parseInt(likeNumber.textContent.substring(0, 4));


        if (postlikebtn.className != "fa-solid fa-heart post-liked") {
            postlikebtn.className = "fa-solid fa-heart post-liked";
            number = number + 1;
            likeNumber.textContent = ` ${number} beğenme`;



        }
        else {

            postlikebtn.className = "fa-regular fa-heart post-like";
            number = number - 1;
            likeNumber.textContent = ` ${number} beğenme`;
        }
    });
}

