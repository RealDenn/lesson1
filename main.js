var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");
var circle = new Path2D;

circle.arc(150, 150, 150, 0, 2 * Math.PI);
context.stroke(circle);


    
   

function drawWatch() {
    context.clearRect(0,0,300,300);
    circle = new Path2D();
    circle.arc(150, 150, 150, 0, 2 * Math.PI);
    context.stroke(circle);

    var R = 300/2, d,angle,pX,pY,qX,qY;

for(d = 0; d < 60; ++d) {
    angle = (d/60) * (2*Math.PI);

    pX = Math.cos(angle)*R;
    pY = -Math.sin(angle)*R;

    qX = 0.9 * pX;
    qY = 0.9 * pY;

    pX += R; pY += R;
    qX += R; qY += R;

    context.moveTo(pX,pY);
    context.lineTo(qX,qY);
    context.stroke();

} 
var date = new Date(), hours,minutes,seconds;
seconds = date.getSeconds();
minutes = date.getMinutes();
hours = date.getHours();

var sX,sY;
lineS = new Path2D();
var  secondsAngle = (seconds / 60) * (2 * Math.PI)
secondsAngle = Math.PI / 2 - secondsAngle;

var hoursAngle = ((hours % 12) / 12) * (2 * Math.PI)
hoursAngle = Math.PI / 2 - hoursAngle;

sX = Math.cos(secondsAngle) * R * 0.85;
sY = -Math.sin(secondsAngle) * R * 0.85;
sX += R; sY += R;

var mX,mY;
lineM = new Path2D();
var minutesAngle = (minutes / 60) * (2 * Math.PI)
minutesAngle = Math.PI / 2 - minutesAngle;

mX = Math.cos(minutesAngle) * R * 0.75;
mY = -Math.sin(minutesAngle) * R * 0.75;
mX += R; mY += R;

lineS.moveTo(150,150);
lineS.lineTo(sX,sY);
context.stroke(lineS);

setTimeout(drawWatch,1000);
}
drawWatch();
