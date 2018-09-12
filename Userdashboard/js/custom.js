// Preloader 

// makes sure the whole site is loaded
jQuery(window).load(function () {
    jQuery(".loader-text").fadeOut();
    jQuery("body").addClass("loaded");
    jQuery(".pk-loader").fadeOut("slow", function () {
        jQuery(this).remove();
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function () {
    jQuery(".user_view").click(function () {
        jQuery(".view_links").toggle();
    });

});

/**** Custom Scroll *****/
(function (jQuery) {
    jQuery(window).on("load", function () {
        jQuery(".dashboard-nav").mCustomScrollbar({
            theme: "minimal-dark"
        });
    });
})(jQuery);
/**** show-hide tab *****/
jQuery(document).ready(function () {
    jQuery(".additional-info > h2").click(function () {
        jQuery(".info-list").toggle();

    });
});
jQuery(document).ready(function () {
    jQuery(".pdf-sheet h2").click(function () {
        jQuery(".sheets").toggle();

    });
});
jQuery(document).ready(function () {
    jQuery(".components-sec > h2").click(function () {
        jQuery(".tbl-view").toggle();

    });
});
jQuery(document).ready(function () {
    jQuery(".cntct-info > h2").click(function () {
        jQuery(".info-wrap").toggle();

    });
});
jQuery(document).ready(function () {
    jQuery(".attndnc > h2").click(function () {
        jQuery(".info-wrap").toggle();

    });
});
/**** dashboard menu *****/
jQuery(document).ready(function () {
    jQuery(".drop-down").click(function () {
        jQuery(this).next().toggle();
        jQuery(this).toggleClass("open");
    });

});
/**** Date picker *****/

jQuery(function () {
    jQuery("#datepicker, #datepicker1").datepicker();
});

jQuery(document).on('click', '.brws_inpt', function () {
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
});
jQuery(document).on('change', '.file', function () {
    $(this).parent().find('.brws_inpt').val(jQuery(this).val().replace(/C:\\fakepath\\/i, ''));
});
