var minutehand = document.querySelector('#minutes');
var secondsHand = document.querySelector('#seconds');
var hourhand = document.querySelector('#hour');


var time = function (){

    setInterval(()=>{
        var getTime = new Date();
        var getMinute = getTime.getMinutes();
        var getSecond = getTime.getSeconds();
        var getHour = getTime.getHours();

        // console.log(getSecond)
        // console.log(getMinute)

        secondsHand.style.transform = 'rotate(' + (6 * getSecond + 180) + 'deg)';
        minutehand.style.transform = 'rotate(' + (6 * getMinute + 180 + (0.1 * getSecond)) + 'deg)';
        hourhand.style.transform = 'rotate(' + (30 * getHour + 180 + (0.5 * getMinute)) + 'deg)';
    }, 1000)
}

time()


