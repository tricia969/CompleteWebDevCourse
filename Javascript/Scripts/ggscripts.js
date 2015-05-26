//How Many Fingers? - computes a random number between 0 and 5 and compares
            //that to the user's guess - an alert tells correct or incorrect - clears
            //guessing box for next round
            document.getElementById("submit").onclick = function fingers() {
                
                var x = Math.random();
                
                x = 6 * x;
                
                x = Math.floor(x);
                
                if ( x == document.getElementById("guess").value) {
                    alert("That's correct, I'm holding up " + x + " fingers!");
                } else {
                    alert("Sorry, that's wrong! I'm holding up " + x + " fingers.");
                }
                
                document.getElementById("guess").value='';
            }
            
            //What Am I Eating? - computes a random number between 0 and 9 and compares 
            //the user's guess to that slot in the food arrary - an alert tells correct
            //or incorrect - clears guessing box for next round
            var favFoods = ["chocolate","bacon","jelly beans","pizza","ice cream","roast beef","cherry pie","lemon sorbet","cheeseburger","dill pickles"];
            
            document.getElementById("choice").onclick = function food() {
                
                var y = Math.random();
                y = y * 10;
                y = Math.floor(y);
                
                var myFood = favFoods[y];
                
                var playerFood = document.getElementById("food").value.toLowerCase();
                
                if (playerFood == myFood) {
                    alert("Yes, I\'m eating " + myFood + ".");
                } else {
                    alert("Nope, I\'m eating " + myFood + ".");
                }
                document.getElementById("food").value='';
                
            }
            
            //Takes a user generated number input from the user and then tries 
            //to guess what that number is via a random number generator
            //tracks the number of guesses required and reports via alert
            //when the correct answer and how many tries it took
            document.getElementById("enterFingers").onclick = function compGuess() {
                var yourFingers = document.getElementById("yourFingers");
                var warning = document.getElementById("warning");
                var correct = false;
                var guesses = 1;
                var x = -1;
                
                warning.innerHTML = "";
                warning.style.visibility = "hidden";
                
                if (isNaN(yourFingers.value)) {
                    warning.style.visibility = "visible";
                    warning.innerHTML = yourFingers.value + " is not a number. Please enter a number between 0 and 5.";
                    yourFingers.value = '';
                } else if (yourFingers.value < 0 || yourFingers.value > 5) {
                    warning.style.visibility = "visible";
                    warning.innerHTML = yourFingers.value + " is not in range. Please enter a number between 0 and 5.";
                    yourFingers.value = '';
                } else {
                    while (correct == false) {
                        x = Math.random();
                        x = 6 * x;
                        x = Math.floor(x);
                        if (yourFingers.value == x) {
                            correct = true;
                            alert("You are holding up " + x + " fingers. It only took me " + guesses + " tries to figure it out.");
                            yourFingers.value = '';
                        } else {
                            guesses++;
                        }
                    }
                }
                
                
            }