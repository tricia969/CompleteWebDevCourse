 //set content height
            var windowHeight = $(window).height() - 10;
            $("#content").height(windowHeight);
            
            //set codeBox height
            var menubarHeight = $("#menubar").height() + (parseInt($("#menubar").css("padding-top")) * 2) + parseInt($("#menubar").css("border-bottom"));
            //var menubarHeight = $("#menubar").height();
            var codeBoxHeight = windowHeight - menubarHeight;
            $(".codeBox").height(codeBoxHeight + "px");
            
            //set result iframe height
            $("#resultBox").height(codeBoxHeight + "px");
            //$(".codeBox iframe").min-height(codeBoxHeight + "px !important");
            
            //set codeBox textarea height
            var codeBoxTextPad = parseInt($(".codeBox textarea").css("padding")) * 2;
            var codeBoxTextHeight = codeBoxHeight - codeBoxTextPad;
            $(".codeBox textarea").height(codeBoxTextHeight + "px");
            
            //set result iframe width
            var codeBoxWidth = $(".codeBox").width();
            var iframeMargin = parseInt($(".codeBox iframe").css("left"));
            var iframeWidth = codeBoxWidth - iframeMargin;
            $(".codeBox iframe").width(iframeWidth + "px");
            
            //toggles selected status for options
            $("li.toggle").click (function select() {
                $(this).toggleClass("selected");
            });
            
            //toggles visibility for selected options
            $("li.toggle").click(function visible() {
                var activeDiv = $(this).html();
                $("#" + activeDiv + "Box").toggle();
            });
            
            //adjusts spacing for the visible codeBoxes
            $("li.toggle").click(function adjustWidth () {
                var numDivs = $(".codeBox").filter (function () {
                    return($(this).css("display") != "none");
                }).length;
                var codeWidth = 100;
                if (numDivs != 0) {
                    codeWidth = 100/numDivs;
                } 
                $(".codeBox").width(codeWidth + "%");
            });
            
            //load the result iframe with the working code from codeBoxes
            $("#runBut").click (function processCode () {
                $("iframe").contents().find("html").html("");
                $("iframe").contents().find("html").html('<style type="text/css">' + $("#cssCode").val() + '<\/style>' + $("#htmlCode").val());
                document.getElementById("resultCode").contentWindow.eval($("#jsCode").val());
            });