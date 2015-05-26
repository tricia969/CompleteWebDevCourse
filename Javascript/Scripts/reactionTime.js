var clickedTime; 
var createdTime; 
var reactionTime;
var totalTime = 0;
var count = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function makeShape() {
    var time = Math.random();
    time = time * 2500;
    setTimeout(function() {
        if (Math.random() >= 0.5) {
            document.getElementById("shape").style.borderRadius = "75px";
        } else {
            document.getElementById("shape").style.borderRadius = "0";
        }
        var top = Math.random();
        top = top * 150;
        var left = Math.random();
        left = left * 800;
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.display = "block";
        createdTime=Date.now();
    },time);
    count++;
}

function timeCalculate () {
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime) / 1000;
    totalTime = +totalTime + +reactionTime;
}
    
document.getElementById("shape").onclick=function() {
    if (count < 10) {
        timeCalculate();
        this.style.display = "none";
        document.getElementById("time").innerHTML = reactionTime;
        makeShape();
    } else {
        timeCalculate();
        this.style.display = "none";
        document.getElementById("final").innerHTML = " / You clicked " + count + " objects in " + totalTime.toFixed(3) + "s.";
        count = 0;
    }        
}

makeShape();