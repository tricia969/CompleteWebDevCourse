//This changes the text (Some text) of the example paragraph
            document.getElementById("linkElEx").innerHTML="Some different text";
            
            //This operates the onclickEx example button
            document.getElementById("onclickEx").onclick=function() {
                alert("Thanks for clicking!");
            }
            
            //This changes the text of the changeMe paragraph to the text 
            //in the script when the viewer clicks the changeIt button
            document.getElementById("changeIt").onclick=function() {
                document.getElementById("changeMe").innerHTML="That made no sense!";
            }
            
            //This will add text to changeMe paragraph. The text is added regardless
            //of the current contents
            document.getElementById("addIt").onclick=function() {
                document.getElementById("changeMe").innerHTML=document.getElementById("changeMe").innerHTML + " Isn't Javascript fun?!?"
            }
            
            //This will return the original lorem ipsum text to the 
            //changeMe paragraph
            document.getElementById("resetIt").onclick=function() {
                document.getElementById("changeMe").innerHTML="Nulla elementum ultrices libero, sed mollis enim sagittis non. Duis aliquet neque ac maximus auctor. Morbi vestibulum rhoncus nibh. Curabitur ut vulputate libero. Aenean id leo ac ex tristique ullamcorper quis et eros. Ut at pharetra metus. Nulla a dapibus nisi. Donec lectus ex, lobortis a ornare in, posuere sit amet eros. Nam efficitur congue sapien at porta. In consequat commodo libero in auctor."
            }
            
            //This will add paragraphs and a ul to the empty fillMe div
            document.getElementById("fillIt").onclick=function() {
                document.getElementById("fillMe").innerHTML="<p>Javascript can be very useful for</p><ul><li>adding</li><li>changing</li><li>removing</li></ul><p>page content.";
            }
            
            //This will clear the contents of the fillMe div
            document.getElementById("emptyIt").onclick=function() {
                document.getElementById("fillMe").innerHTML="";
            }
            
            //This will hide the paragraph using display
            document.getElementById("hide").onclick=function() {
                document.getElementById("hide").style.display='none';
                document.getElementById("hideShow").style.display='none';
                document.getElementById("show").style.display='inline';
            }
            
            //This will show the paragraph using display
            document.getElementById("show").onclick=function() {
                document.getElementById("show").style.display='none';
                document.getElementById("hideShow").style.display='inline';
                document.getElementById("hide").style.display='inline';
            }
            
            //This will hide the paragraph using visibility
            document.getElementById("invisible").onclick=function() {
                document.getElementById("invisible").style.visibility='hidden';
                document.getElementById("visibility").style.visibility='hidden';
                document.getElementById("visible").style.visibility='visible';
            }
            
            //This will show the paragraph using visibility
            document.getElementById("visible").onclick=function() {
                document.getElementById("visible").style.visibility='hidden';
                document.getElementById("visibility").style.visibility='visible';
                document.getElementById("invisible").style.visibility='visible';
            }
            
            //sets varialbles to replace the calls to the buttons and paragraph
            var coverBut = document.getElementById("cover");
            var uncoverBut = document.getElementById("uncover");
            var testPara = document.getElementById("testP");
            
            //This hides a paragraph and swaps buttons using a combination of
            //visibility and display
            coverBut.onclick=function() {
                coverBut.style.display='none';
                testPara.style.visibility='hidden';
                uncoverBut.style.display='inline';
            }
            
            //This hides a paragraph and swaps buttons using a combination of
            //visibility and display
            uncoverBut.onclick=function() {
                uncoverBut.style.display='none';
                testPara.style.visibility='visible';
                coverBut.style.display='inline';
            }
            
            //establishes variables and changes paragraph text to reflect user
            //input on Change Text button click and resets text on reset click
            var defaultText = "Replace this text with your own words.";
            var changeText = document.getElementById("changeText");
            var resetP = document.getElementById("resetP");
            var userChange = document.getElementById("userChange");
            var userInput = document.getElementById("userInput");
            var newText = userInput;
            
            changeText.onclick = function change () {
                newText = userInput.value;
                userChange.innerHTML = newText;
                userInput.value='';
            }
            
            resetP.onclick = function reset () {
                userChange.innerHTML = defaultText;
            }
            
            //establishes an array of my favorite foods
            //sets variables, retrieves value from array based on user button click
            //adds selected array value to current paragraph
            var foodArray = new Array();
                foodArray[0] = "pizza";
                foodArray[1] = "chocolate";
                foodArray[2] = "jelly beans";
                foodArray[3] = "cheeseburgers";
                foodArray[4] = "bacon";
            var defaultP = "One of my favorite foods is ";
            var favFood = document.getElementById("favFood");
            var selectedFood = "";
            var zero = document.getElementById("zero");
            var one = document.getElementById("one");
            var two = document.getElementById("two");
            var three = document.getElementById("three");
            var four = document.getElementById("four");
            var resetFood = document.getElementById("resetFood");
            
            zero.onclick = function zerochoice () {
                selectedFood = foodArray[0];
                favFood.innerHTML = defaultP + selectedFood + ".";
            }
            
            one.onclick = function onechoice () {
                selectedFood = foodArray[1];
                favFood.innerHTML = defaultP + selectedFood + ".";
            }
            
            two.onclick = function twochoice () {
                selectedFood = foodArray[2];
                favFood.innerHTML = defaultP + selectedFood + ".";
            }
            
            three.onclick = function threechoice () {
                selectedFood = foodArray[3];
                favFood.innerHTML = defaultP + selectedFood + ".";
            }
            
            four.onclick = function fourchoice () {
                selectedFood = foodArray[4];
                favFood.innerHTML = defaultP + selectedFood + ".";
            }
            
            resetFood.onclick = function resetFood () {
                selectedFood = "";
                favFood.innerHTML = defaultP;
            }
            
            //logs contents of foodArray to console window
            document.getElementById("logArray").onclick = function  () {
                console.log(foodArray);
            }
            
            //creates and modifies an array using the example code when user
            //clicks check array log button and displays current array in console
            var my2ndArray = "";
            var log1 = document.getElementById("log1");
            var log2 = document.getElementById("log2");
            var log3 = document.getElementById("log3");
            var log4 = document.getElementById("log4");
            var log5 = document.getElementById("log5");
            var logreset = document.getElementById("logreset");
            
            log1.onclick = function my2ndArray1() {
                log1.style.visibility = "hidden";
                my2ndArray = ["rain","sun"];
                console.log(my2ndArray);
                log2.style.visibility = "visible";
            }
            
            log2.onclick = function my2ndArray2() {
                log2.style.visibility = "hidden";
                my2ndArray.push("snow");
                console.log(my2ndArray);
                log3.style.visibility = "visible";
            }
            
            log3.onclick = function my2ndArray3() {
                log3.style.visibility = "hidden";
                my2ndArray.push("snow");
                console.log(my2ndArray);
                log4.style.visibility = "visible";
            }
            
            log4.onclick = function my2ndArray4() {
                log4.style.visibility = "hidden";
                my2ndArray.splice(3,1);
                console.log(my2ndArray);
                log5.style.visibility = "visible";
            }
            
            log5.onclick = function my2ndArray5() {
                log5.style.visibility = "hidden";
                my2ndArray.splice(1,0,"hail");
                console.log(my2ndArray);
            }
            
            logreset.onclick = function my2ndArrayReset() {
                my2ndArray = "";
                log5.style.visibility = "hidden";
                log4.style.visibility = "hidden";
                log3.style.visibility = "hidden";
                log2.style.visibility = "hidden";
                log1.style.visibility = "visible";
                console.log(my2ndArray);
            }
            
            //demonstrates .length functionality
            var my3rdArray = ["1","2","3","4","5","6","7","8","9","10"];
            
            document.getElementById("length").onclick = function length() {
                console.log(my3rdArray.length);
            }
            
            document.getElementById("contents").onclick = function contents() {
                console.log(my3rdArray);
            }
            
            //compares user answer to requested number range and gives appropriate response
            var ifExample = document.getElementById("ifExample");
            var ifResponse = document.getElementById("ifResponse");
            var ifSubmit = document.getElementById("ifSubmit");
            var newResponse = "";
            
            ifSubmit.onclick = function ifTest() {
                newResponse = ifResponse.value;
                if (newResponse >= 1 && newResponse <= 10) {
                    ifExample.innerHTML = "Please enter a number between 1 and 10.";
                    alert("Thanks for cooperating!");
                } else if (newResponse < 1) {
                    ifExample.innerHTML = newResponse + " is less than 1.  Please enter a number between 1 and 10.";
                } else if (newResponse > 10) {
                    ifExample.innerHTML = newResponse + " is greater than 10.  Please enter a number between 1 and 10.";
                } else {
                    ifExample.innerHTML = newResponse + " is not a number.  Please enter a number between 1 and 10.";
                }
                ifResponse.value='';
            }
            
            //establishes an array of elements, loops through the array storing
            //the values in a formatted string, adds the string to the arrayContents
            //div for the user to see, then offers reset which resets colorList
            //and empties arrayContents div
            var favColors = ["blue","silver","pink","brown","grey"];
            var colorList = "<ol start=\"0\">";
            
            document.getElementById("revealContents").onclick = function showArray() {
                document.getElementById("revealContents").style.display="none";
                for ( var i=0; i<favColors.length; i++) {
                    colorList = colorList + "<li>" + favColors[i] + "</li>";
                }
                colorList = colorList + "</ol>";
                document.getElementById("arrayContents").innerHTML = colorList;
                document.getElementById("hideContents").style.display="inline";
            }
            
            document.getElementById("hideContents").onclick = function hideArray() {
                document.getElementById("hideContents").style.display="none";
                document.getElementById("arrayContents").innerHTML = "";
                colorList = "<ol start=\"0\">";
                document.getElementById("revealContents").style.display="inline";
            }
            
            //uses a while loop to output contents of an array or clear
            //output on button click
            var view = document.getElementById("whileView");
            var clear = document.getElementById("whileClear");
            var i = 0;
            var colorString = "";
            var output = document.getElementById("whileOutput");
            
            view.onclick = function viewColors() {
                view.style.display = "none";
                while ( i < favColors.length) {
                    if (colorString == "") {
                        colorString = favColors[i];
                    } else {
                        colorString = colorString + ", " + favColors[i];
                    }
                    i++;
                }
                output.innerHTML = colorString;
                clear.style.display = "inline";
            }
            
            clear.onclick = function clearColors() {
                i = 0;
                colorString = "";
                output.innerHTML = "&nbsp;";
                clear.style.display = "none";
                view.style.display = "inline";
            }
            
            //This alert pops up when page has loaded
            alert("Page loaded!");