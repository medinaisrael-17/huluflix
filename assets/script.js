// nav bar changes color on scroll 
window.onscroll = () => {
    if (document.body.scrollTop > 50
        ||
        document.documentElement.scrollTop > 50) {
        //set the new id
        try {
            this.document.getElementById("myNav").setAttribute("id", "myNavScroll")
        }
        catch (e) {
            return;
        }

    }
    else {
        //change to old id
        try {
            this.document.getElementById("myNavScroll").setAttribute("id", "myNav")
        }
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
    // console.log($(this).children("div"));
    $(this).children("div").css("display", "block");
})

$(".show").on("mouseleave", function (e) {
    $(this).children("div").css("display", "none");
})








