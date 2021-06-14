
//setTimeout();
//setInterval();
//requestAnimationFrame();

let myBox = document.querySelector('#myBox');
let posX = 0;
let posY = 0;

let targetX = 0;
let targetY = 0;
let g = 0.05;

function ani()
{
    myBox.style.left = posX + 'px';
    myBox.style.top = posY + 'px';

    posX += (targetX-posX)*g;
    posY += (targetY-posY)*g;

    requestAnimationFrame(ani);
    //cancelAnimationFrame('매개변수');
}


document.addEventListener('click', setPos);

function setPos(e)
{
    targetX = e.clientX; // offsetX -->요소기준. screenX --> 윈도우기준.
    targetY = e.clientY; // offsetY -->요소기준. screenY --> 윈도우기준.
    //console.log(targetX);
    //console.log(targetY);
}


ani();




















/*
let mySetTimeout;

function ani()
{
    //console.log("아아아아");
    if( posX >= 500)
    {
        clearTimeout(mySetTimeout);
        return; 
    }
    
    myBox.style.left = posX + 'px';
    posX += 5;

    mySetTimeout = setTimeout(ani, 30);
}
*/

//myBox.addEventListener('click', ani);

/*
let myInterval = setInterval(ani, 30);


function ani()
{
    myBox.style.left = posX + 'px';
    posX += 5;

    if(posX >= 500)
    {
        clearInterval(myInterval);
        return;
    }
}

*/

