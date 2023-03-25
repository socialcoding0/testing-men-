const navA = document.querySelectorAll(".nav-link");



var timeUp;
var timeBack;

for (let a of navA) {
    // console.log(a);

    if (window.innerWidth <= 1260) {



        a.addEventListener("mouseenter", function (e) {

            clearTimeout(timeBack);

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








