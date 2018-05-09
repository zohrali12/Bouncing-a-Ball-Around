

var leftPos = 10;
var topPose = innerHeight/2-25;
ball.style.left = leftPos + 'px'; 
ball.style.top = topPose + 'px';  

var interval1;
var interval2;
var interval3;
var interval4;
var interval5;

// linear eqation y=mx+b;
// m is slope m=(y2-y1)/(x2-x1)

// southEast start point
var x1=35;
var y1=window.innerHeight/2-25;
//northEast start point
var x2=window.innerWidth/2;
var y2=window.innerHeight-10-50;
//northWest start point
var x3=window.innerWidth-10-25;
var y3= window.innerHeight/2-25; //y1=y3
//southWest start point
var x4=window.innerWidth/2;
var y4=10;
//slope of the lines
var m1= (y2-y1)/(x2-x1);
var m2=(y3-y2)/(x3-x2);
var m3= (y4-y3)/(x4-x3);
var m4 = (y1-y4)/(x1-x4);

Move();

function Move() {
    var ball = document.getElementById("ball");   
   
    interval1 = setInterval(southEast, 1);
    function southEast() {
      if (leftPos >= window.innerWidth-60 || topPose>= window.innerHeight-60 ) {
        clearInterval(interval1);
        interval2 = setInterval(northEast, 1);
      } else {
        leftPos+=1; 
        topPose+=m1;
        ball.style.left = leftPos + 'px'; 
        ball.style.top = topPose + 'px'; 
      }
    }

   
    function northEast() {
        if (leftPos >= window.innerWidth-60 || topPose<= 10 ) {
            clearInterval(interval2);
           interval3 = setInterval(northWest, 1);
        }
        leftPos+=1; 
        topPose+=m2;
        ball.style.left = leftPos + 'px'; 
        ball.style.top = topPose + 'px';  

    }

    function northWest() {
        if (leftPos <= 10|| topPose<= 10 ) {
            clearInterval(interval3);
            interval4 = setInterval(southWest, 1);
        }
        leftPos--;
        topPose-=m3;
        ball.style.left = leftPos + 'px'; 
        ball.style.top = topPose + 'px';  

    }
    function southWest() {
        if (leftPos <= 10|| topPose>= window.innerHeight-60 ) {
            clearInterval(interval4);
            interval1 = setInterval(southEast, 1);
        }
        leftPos--;
        topPose-=m4;
        ball.style.left = leftPos + 'px'; 
        ball.style.top = topPose + 'px';  

    }

}