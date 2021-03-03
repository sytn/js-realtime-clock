// select the elements from index.html
const secondhand = document.querySelector('.second-hand')
const minuteHand =  document.querySelector('.min-hand')
const hourHand =  document.querySelector('.hour-hand')

function setDate(){
    const now = new Date()
    const second = now.getSeconds() // current seconds
    const minute =  now.getMinutes() // current minutes
    const hour =  now.getHours() // current hours

    const secondDegress = ((second/60)*360)+90 // convert second to degrees
    const mindegere = ((minute/60)*360)+90 // convert minutes to degrees
    const hourdegree  = ((hour/12)*360)+90 // convert hours to degrees
    secondhand.style.transform = `rotate(${secondDegress}deg)` //apply the seconds
    minuteHand.style.transform = `rotate(${mindegere}deg)` // apply the minutes
    hourHand.style.transform = `rotate(${hourdegree}deg)` // apply the hours
    // console.log(second);
    // console.log(minute);
    console.log(hour);

}
setInterval(setDate,1000); 