//Each action updates the instructions
            
            //This will make the red circle disappear and the blue circle appear
            document.getElementById("redcircle").onclick = function() {
                document.getElementById("redcircle").style.visibility = 'hidden';
                document.getElementById("bluecircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Not quite, try again.";
            }
            
            //This will make the blue circle disappear and the purple circle appear
            document.getElementById("bluecircle").onclick = function() {
                document.getElementById("bluecircle").style.visibility = 'hidden';
                document.getElementById("purplecircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Still not right, do it again."
            }
            
            //This will make the purple circle disappear and the green circle appear
            document.getElementById("purplecircle").onclick = function() {
                document.getElementById("purplecircle").style.visibility = 'hidden';
                document.getElementById("greencircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Are you trying? Just click it."
            }
            
            //This will make the green circle disappear and the yellow circle appear
            document.getElementById("greencircle").onclick = function() {
                document.getElementById("greencircle").style.visibility = 'hidden';
                document.getElementById("yellowcircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "You're kidding me, right? Please try again."
            }
            
            //This will make the yellow circle disappear and the orange circle appear
            document.getElementById("yellowcircle").onclick = function() {
                document.getElementById("yellowcircle").style.visibility = 'hidden';
                document.getElementById("orangecircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Wow, this is harder than it looks. Click again."
            }
            
            //This will make the orange circle disappear and the pink circle appear
            document.getElementById("orangecircle").onclick = function() {
                document.getElementById("orangecircle").style.visibility = 'hidden';
                document.getElementById("pinkcircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Give it one more try, pretty please."
            }
            
            //This will make the pink circle disappear, congratulate the player, and add a reset button
            document.getElementById("pinkcircle").onclick = function() {
                document.getElementById("pinkcircle").style.visibility = 'hidden';
                document.getElementById("resetCircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "!!!!!CONGRATULATIONS!!!!!"
            }
            
            //Controls reset button action
            document.getElementById("resetCircle").onclick = function() {
                document.getElementById("resetCircle").style.visibility = 'hidden';
                document.getElementById("redcircle").style.visibility = 'visible';
                document.getElementById("instructions").innerHTML = "Click the circle to make it disappear.";
            }