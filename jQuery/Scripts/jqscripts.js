/*if(jQuery) {
                alert("jQuery is installed!");
            } cannot alert if not only works if jQuery is installed*/
            /*if (typeof jQuery != "undefined") {
                alert("jQuery is installed!");
            } else {
                alert ("jQuery is not installed!");
            } I don't want an alert if jQuery is installed*/
            if (typeof jQuery == "undefined") {
                alert("¡jQuery is not installed!");
            }
            
            //detecting a click
            $("div [name='square1']").click (function() {
                alert ("Left square clicked!");
            })
            
            var click = false;
            $("#circle").click(function(){
                if (click == false) {
                    $("#circle").css("border","2px solid red").css("background","transparent").css("width","196px").css("height","196px").css("border-radius","98px");
                    click = true;
                } else {
                    $("#circle").css("border","none").css("background","red").css("width","200px").css("height","200px").css("border-radius","100px");
                    click = false;
                }
            })
            
            var clicked = false;
            $("div [name='square2']").click (function () {
                if ( clicked == false ) {
                    $("div [name='square2']").css("background","green");
                    clicked = true;
                } else {
                    $("div [name='square2']").css("background","Chartreuse");
                    clicked = false;
                }
            })
            
            //changing content
            var change = false;
            $("#changeP").click (function () {
                if (change == false) {
                    $("#changeMe").html("The text has been changed! Click again to change it back.");
                    change = true;
                } else {
                    $("#changeMe").html("We can use jQuery to change content similar to the way we change content with plain javascript. Click the circle below to see it in action.");
                    change = false;
                }
            })
            //retrieve content
            $("#retrieveP").click (function () {
                alert($("#retrieveMe").html());
            })
            //hover
            $("#makeRed").hover(function () {
                $("#redText").css("color","red");
            })
            //update iframe contents on hover
            var site = $("iframe").attr("src");
            $("#updateIframe").mouseenter (function () {
                if ( site == "blue.html" ) {
                    $("iframe").attr("src","red.html");
                } else {
                    $("iframe").attr("src","blue.html");
                }
                site = $("iframe").attr("src");
            })
            
            //changing styles
            $("div [name = 'alertWidth']").click (function () {
                alert ($("div [name = 'alertWidth']").css("width"));
            })
            
            //Disabled because it drives me nuts
            /*$("div").click (function () {
                alert ("height = " + $(this).css("height"));
            })*/
            
            $("#hotPink").hover (function () {
                if( $("#hotPink").css("width") == "150px" ) {
                    $("#hotPink").css("width","300px");
                } else {
                    $("#hotPink").css("width","150px");
                }
            })
            
            $("#yellow").mouseout(function () {
                    $("#yellow").hide();
                    $("#aqua").css("visibility","visible");
            })
            
            $("#aqua").mouseleave (function () {
                $("#aqua").css("visibility","hidden");
                $("#yellow").show();
            })
            
            $("#controlCircle").click (function () {
                if ( $(".tinySquare").css("display") != "none" ) {
                    $(".tinySquare").fadeOut(5000);
                } else {
                    $(".tinySquare").fadeIn(5000);
                }
            })
            
            //fading content
            $("#fadeIt").click (function () {
                if ( $("#fadeMe").css("display") != "none" ) {
                    $("#fadeMe").fadeOut(3000,function() {
                        alert ("Fade out completed");
                    });
                    $("#fadeIt").html("Fade In");
                } else {
                    $("#fadeMe").fadeIn("fast",function() {
                            alert ("Fade in completed");
                    });
                    $("#fadeIt").html("Fade Out");
                }
            })
            
            //Animating Content
            $("#growingCircle").click( function () {
                if ($(this).css("width") == "50px") {
                    $(this).animate({
                        width:"200px",
                        height:"200px",
                        borderRadius:"100px",
                        margin:"40px"
                    },500);
                } else {
                    $(this).animate({
                        width:"50px",
                        height:"50px",
                        borderRadius:"25px",
                        margin:"10px"
                    },500);
                }
            });
            
            $("#growCircle").click(function () {
                $(this).animate ( {
                    width:"200px",
                    height:"200px",
                    borderRadius:"100px",
                    margin:"40px"
                }, 500, function () {
                    $(this).delay (2000).animate ( {
                        width:"50px",
                        height:"50px",
                        borderRadius:"25px",
                        margin:"10px"
                    }, 500);
                });
            });
            
            //Loading Data with AJAX
            $.get("test.html",function (data) {
                alert(data);
            });
            
            $.ajax({
                url: "test2.html"
            }).done (function (data) {
                alert(data);
            });
            
            $.ajax ({
                url: "test3.html"
            }).done (function (data) {
                $("#ajaxChange").html(data);
            });
            
            $.ajax ({
                url: "test4.html"
            }).done (function (data) {
                $("#ajaxAppend").append(data);
            });
            
            //Regular Expressions
            var regex = /that/ig;
            $("#regexResult").html($("#regexSearch").html().match(regex));
            
            //jQuery UI Plugin
            $("#dragSquare").draggable();
            
            //Draggables and Resizables
            $("#dragMe").draggable();
            $("#resizeMe").resizable();
            
            //Droppables
            $("#dropSquare").draggable();
            $("#dropTarget").droppable ({
                drop: function(ui, event) {
                    $("#dropTarget").css("background","pink").css("width","296px").css("height","296px").css("border","2px solid DeepPink").css("color","black");
                }
            });
            
            //accordion and sortables
            $("#accordion").accordion({
                collapsible: true,
                animate: 200
            });
            
            $("#sortable").sortable();
            
            //retry menu load
            //load menu
            $.ajax ({
                //retrieve menu page
                url: "../menu.html"
            }).done (function (data) {
                //load menu to page
                $("#mainmenu").html(data);
            }).done(function () {
                //mark active section
                $("#jquery").attr("id","current");
                //mark active page
                $("#jq1").attr("id","subcur");
            });