// *** DOM ELEMENTS ***
const hourHand = document.querySelector(".clock--hours");
const minuteHand = document.querySelector(".clock--minutes");
const secondHand = document.querySelector(".clock--seconds");


function moveClock() {
    let actualTime = new Date;
    let hour = actualTime.getHours() % 12 || 12;
    let minute = actualTime.getMinutes();
    let second = actualTime.getSeconds();

    function minutesToDegree(minute) {
        return (minute * 6);
    }

    function secondsToDegree(second) {
        return (second * 6);
    }

    function hoursToDegree(hour) {
        return (hour * 30);
    }

    hourHand.style.transform = `rotate(${hoursToDegree(hour)+90}deg)`;
    minuteHand.style.transform = `rotate(${minutesToDegree(minute)+90}deg)`;
    secondHand.style.transform = `rotate(${secondsToDegree(second)+90}deg)`;
}

setInterval(() => {
    moveClock()
}, 1000);