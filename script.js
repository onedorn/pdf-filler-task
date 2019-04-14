//Увас есть набор входных данных в обьекте по типу:

var params = {
    lines: [
        {
            background: '#007',
            updateTime: 1000,
            
            elements: [{
                background: '#007',
                width: 25
            },
            {    
                background: '#007',
                width: 50
            },
            {
                background: '#007',
                width: 25
            }
                      
            ]
                       
        }
    ]
}

//Ширина и высота экрана

var width = screen.width;
var height = screen.height;
console.log('Height ' + height);
console.log('Width ' + width);

//Устанавливает базовые свойства и генератор цвета (таймер) к первому контейнеру

var first = document.getElementById('first');
first.style.height = '250px';
first.style.background = '#007';
var colors = ['orange', 'blue', 'green'];
var counter = 0;

function changeColor(){
    
    if (counter >= colors.length){
        counter = 0;
    }
    
    first.style.background = colors[counter];
    counter++;
    
}

var timer = setInterval(changeColor, 1000);

first.onclick = function(){
    clearInterval(timer);
}

//Устанавливает базовые свойства и генератор цвета (таймер) ко второму контейнеру

var second = document.getElementById('second');
second.style.height = '250px';
second.style.background = '#007';
var secondColors = ['pink', 'grey', 'yellow'];

function secondChange (){
    
    if (counter >= colors.length){
        counter = 0;
    }
    
    second.style.background = secondColors[counter];
    counter++;
    
}

var secondTimer= setInterval(secondChange, 1250);

second.onclick = function(){
    clearInterval(secondTimer);
}

//Устанавливает базовые свойства и генератор цвета (таймер) к третьему контейнеру

var third = document.getElementById('third');
third.style.height = '250px';
third.style.background = '#007';
var thirdColors = ['white', 'purple', 'coral'];

function thirdChange (){
    
    if (counter >= colors.length){
        counter = 0;
    }
    
    third.style.background = thirdColors[counter];
    counter++;
    
}

var thirdTimer= setInterval(thirdChange, 1500);

third.onclick = function(){
    clearInterval(thirdTimer);
}

