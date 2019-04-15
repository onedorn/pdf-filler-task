//BASIC DOCUMENT STYLES

document.body.style.margin = '0';
document.body.style.height = '100%';
document.body.style.width = '100%';
document.body.style.color = '#fff';
document.body.style.textAlign = 'center';
document.body.style.textTransform = 'uppercase';

//CREATING AND ADDING NEW ELEMENTS TO DOCUMENT

var first = document.createElement('div');
first.className = 'first';
first.innerHTML = 'Click on me';
document.body.insertBefore(first, document.body.firstElementChild);
first.style.height = '250px';
first.style.background = '#007';

var second = document.createElement('div');
second.className = 'second';
second.innerHTML = 'Click on me';
document.body.insertBefore(second, document.body.lastElementChild);
second.style.height = '250px';
second.style.background = '#007';
second.style.margin = '5px 0';

var third = document.createElement('div');
third.className = 'third';
third.innerHTML = 'Click on me';
document.body.insertBefore(third, document.body.lastElementChild);
third.style.height = '250px';
third.style.background = '#007';

//WIDTH & HEIGHT OF CURRENT SCREEN

var width = screen.width;
var height = screen.height;

console.log('Actual width of this screen ' + screen.width + 'px');
console.log('Actual height of this screen ' + screen.height + 'px');
console.log('Height of each line is ' + height / 3 + 'px');

//SETTING GENERATOR OF COLOR AND TIMER FOR FIRST CONTAINER

var colorFirst = ['orange', 'purple', 'green'];
var counterFirst = 0;

function changeFirstColor(){
    
    if(counterFirst >= colorFirst.length){
       counterFirst = 0;
    }
    
    first.style.background = colorFirst[counterFirst];
    counterFirst++;
    
}
var timerFirst = setInterval(changeFirstColor, 1000);

first.onclick = function(){
    clearInterval(timerFirst);
    first.innerHTML = 'Timer has been stopped';

}

//SETTING GENERATOR OF COLOR AND TIMER FOR SECOND CONTAINER

var colorSecond = ['orange', 'purple', 'green'];
var counterSecond = 0;

function changeSecondColor(){
    
    if(counterSecond >= colorSecond.length){
       counterSecond = 0;
    }
    
    second.style.background = colorSecond[counterSecond];
    counterSecond++;
    
}
var timerSecond = setInterval(changeSecondColor, 1000);

second.onclick = function(){
    clearInterval(timerSecond);
    second.innerHTML = 'Timer has been stopped';
}

//SETTING GENERATOR OF COLOR AND TIMER FOR THIRD CONTAINER

var colorThird = ['orange', 'purple', 'green'];
var counterThird = 0;

function changeThirdColor(){
    
    if(counterThird >= colorThird.length){
       counterThird = 0;
    }
    
    third.style.background = colorThird[counterSecond];
    counterThird++;
    
}
var timerThird = setInterval(changeThirdColor, 999);

third.onclick = function(){
    clearInterval(timerThird);
    third.innerHTML = 'Timer has been stopped';
}
