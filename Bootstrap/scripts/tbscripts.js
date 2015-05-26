/*variables to control inner menu*/
var sticky = $("#sticker");
var pos = sticky.position();
var thisName = "top";
var height = $('nav[name="innerNav"]').height() + 20;
var width = $('.contentSpace').width() + 1;

/*Keeps inner menu at contentSpace width*/
$('#sticker').css('width',width + 'px').css('margin','0 auto 0 -15px');

/*Sticks menu to top of window when button is clicked or users scrolls past site menu*/
$(document).ready(function() {                    
    $(window).scroll(function() {
        if(thisName != "top") {
            $(thisName).css("margin-top","0").css("padding-top","0");
        }
        var windowpos = $(window).scrollTop();
        if (windowpos >= 50) {
            sticky.addClass("navbar-fixed-top");
            $('#sticker').css('margin','0 auto').css('border-bottom-left-radius','4px').css('border-bottom-right-radius','4px').css('padding','0 15px');
        } else {
            sticky.removeClass("navbar-fixed-top");
            $('#sticker').css('margin','0 auto 0 -15px').css('padding','0');
        }
    });
});

/*Marks currently clicked menu item active and creates padding on top of element*/
$('.navbar-nav li a').click(function() {
    if(thisName != "top") {
        $(thisName).css("margin-top","0").css("padding-top","0");
    }
    thisName = this;
    thisName = $(thisName).attr('href').replace(/^.*?(#|$)/,'');
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    if (thisName != "top") {
        $("#" + thisName).css("padding-top",height + "px");
        sticky.addClass("navbar-fixed-top");
    }
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$(window).resize (function () {
    width = $('.contentSpace').width() + 1;
    $('#sticker').css('width',width + 'px');
});