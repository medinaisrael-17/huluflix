// nav bar changes color on scroll 
window.onscroll = () => {

    //this if statement will check to see if the scroll is greater than 50px
    if (document.body.scrollTop > 50
        ||
        document.documentElement.scrollTop > 50) {
        //set the new id of the styled nav
        try {
            this.document.getElementById("myNav").setAttribute("id", "myNavScroll")
        }
        //if it errors out don't display it
        catch (e) {
            return;
        }

    }
    else {
        //change to old id
        try {
            this.document.getElementById("myNavScroll").setAttribute("id", "myNav")
        }
        //same 
        catch (e) {
            return;
        }

    }
}

//toggle the profile stuff to go away 
window.addEventListener("resize", function () {
    if (window.innerWidth < 993) {
        $(".pImg").css("display", "none");
        $("#username").css("display", "none");

        $(".profile").css("display", "block");
    }

    else {
        $(".pImg").css("display", "inline");
        $("#username").css("display", "inline");

        $(".profile").css("display", "none");
    }
})

//when hovering over a show 
$(".show").on("mouseenter", function (e) {
    //show the play button / fav button 
    $(this).children("div").css("display", "block");
})

//when not hovering over a show
$(".show").on("mouseleave", function (e) {
    //don't show the play/fav button
    $(this).children("div").css("display", "none");
})








