
let ramadanDate = new Date("February 28, 2025 00:00:00").getTime();

let countDown = setInterval(function() {

    let now = new Date().getTime();
    let timeLeft = ramadanDate - now;

    if (timeLeft > 0) {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes; 
        document.getElementById("seconds").innerHTML = seconds;
    } else {
        clearInterval(countDown);
        let container = document.getElementById("container");
        container.innerHTML = "";
        container.style.backgroundImage = "url(./images/image2.webp)";
    }
});
