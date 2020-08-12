var minutehand = document.querySelector('#minutes');
var secondsHand = document.querySelector('#seconds');
var hourhand = document.querySelector('#hour');
var hourInput = document.querySelector('.hourinput');
var minuteInput = document.querySelector('.minuteinput');
var btn = document.querySelector('.alarmbtn');
var alarmAudio = document.querySelector('audio');
var currentDate = document.querySelector('.date');
var timedMinute = document.querySelector('.minuteTime')
var timedHour = document.querySelector('.hourTime');
var timerBtn = document.querySelector('.timerbtn');
var clockToggler = document.querySelector('.clocktoggler');
var alarmToggler = document.querySelector('.alarmtoggler');
var timerToggler = document.querySelector('.timertoggler');
var dateDiv = document.querySelector('.datediv');
var AlarmDiv = document.querySelector('.alarm');
var timerDiv = document.querySelector('.timer');
var alarmModal = document.querySelector('.alarmmodal');
var timerModal = document.querySelector('.timermodal')
var addAlarm = document.querySelector('.addalarm')
var addTimer = document.querySelector('.addtimer')
var alarmUI = document.querySelector('.alarmspan')

var userDate = function(){

var getTime = new Date();
        
var month, Year, currentMonth;
month = getTime.getMonth();
Year = getTime.getFullYear();
day = getTime.getDay();
dateNum = getTime. getDate();

var Days = [
  'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

var months = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December',
];

day = Days[day]
currentMonth = months[month];
currentDate.textContent = day + ', ' + currentMonth + ' ' + dateNum +', ' + Year + '.';
//   console.log(currentMonth + ', ' + Year)
}

userDate();

var time = function (){
    var alarmMinute;
    var alarmHour;
    var getHour;
    var getSecond;
    var getMinute;
    var AlarmOn = false;
    

    btn.addEventListener('click',()=>{
        var html = '<div class="alarmspan">$alarmHour:$alarmMinute<span class="delete close" type="button">&times;</span></div>';
        html = html.replace('$alarmHour', hourInput.value)
        newhtml = html.replace('$alarmMinute', minuteInput.value)
        AlarmDiv.insertAdjacentHTML('beforeend',newhtml)
    })
   

    setInterval(()=>{

        if(AlarmOn){
        addAlarm.style.display = 'none';
    }else{
        addAlarm.style.display = 'block';
    }
        var getTime = new Date();
        
    // Clock
    getMinute = getTime.getMinutes();
        getSecond = getTime.getSeconds();
        getHour = getTime.getHours();

        // console.log(getHour)
        // console.log(getMinute)

        secondsHand.style.transform = 'rotate(' + (6 * getSecond + 180) + 'deg)';
        minutehand.style.transform = 'rotate(' + (6 * getMinute + 180 + (0.1 * getSecond)) + 'deg)';
        hourhand.style.transform = 'rotate(' + (30 * getHour + 180 + (0.5 * getMinute)) + 'deg)';

        var Alarm = function(e){
            e.preventDefault()
            alarmHour = parseInt(hourInput.value);
            alarmMinute = parseInt(minuteInput.value);
            console.log(alarmHour, alarmMinute, getHour, getMinute)
            alarmModal.classList.remove('animate')
            AlarmOn = true;
        }
        btn.addEventListener('click',Alarm)
        if(alarmHour === getHour & alarmMinute === getMinute){
            alarmAudio.play();
            alarmAudio.loop = true;
            console.log('same')
            
        }
        if(alarmMinute + 1 === getMinute){
            alarmAudio.pause()
            AlarmOn = false;
        }
        
    }, 1000)

    // console.log(alarmUI.parentNode)
    
}

time()


//Timer
var countDwn = function(){
    var timerOn = false;
    timerBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        timerModal.classList.toggle('animate')
        
        var countHour = parseInt(timedHour.value);
        var countMinute = parseInt(timedMinute.value);
            countMinute = countMinute + (countHour * 60)
        var countSeconds = countMinute * 60;
        
        
        // if((countHour !== isNaN) & (countMinute !== isNaN) & (countMinute !== '') & (countMinute !== ''))
            setInterval(()=>{
                if(timerOn){
                    addTimer.style.display = 'none';
                }else{
                    addTimer.style.display = 'block';
                }
                timerOn = true;
                var minuteLeft = Math.floor(countSeconds / 60);
                var minuteDisplay = Math.floor(minuteLeft % 60)
                var hourLeft = Math.floor(minuteLeft / 60)
                   minuteDisplay < 10 ? minuteDisplay = '0' + minuteDisplay: minuteDisplay;
            
                    var secondsLeft = countSeconds % 60;
                    secondsLeft < 10 ? secondsLeft = '0' + secondsLeft: secondsLeft;
    
                    hourLeft < 10 ? hourLeft = '0' + hourLeft: hourLeft;
                
                    countSeconds--;
                    if(countSeconds < 0){
                        countSeconds = 0;
                        timerOn = false;
                    }
                
                    var timer = hourLeft + ':' + minuteDisplay + ':' + secondsLeft
                    console.log(timer);
                
                    document.querySelector('.timerspan').textContent = timer;
                   
            }, 1000)
        // }
            
    })
}
countDwn();



    
clockToggler.addEventListener('click',()=>{
    dateDiv.style.display = 'block';
    AlarmDiv.style.display = 'none';
    timerDiv.style.display = 'none';
})

alarmToggler.addEventListener('click',()=>{
    AlarmDiv.style.display = 'block';
    dateDiv.style.display = 'none';
    timerDiv.style.display = 'none';
})

timerToggler.addEventListener('click',()=>{
    timerDiv.style.display = 'block';
    dateDiv.style.display = 'none';
    AlarmDiv.style.display = 'none';
})



addAlarm.addEventListener('click',()=>{
    alarmModal.classList.toggle('animate')
})
addTimer.addEventListener('click',()=>{
    timerModal.classList.toggle('animate')
});

