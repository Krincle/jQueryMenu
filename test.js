jQueryMenu
==========

//test.js
jQuery.noConflict();

//ready is a closure because it encloses the scope of the anonymous function and accesses the dolar sign which is its parameter and passes it in...
(function($) {
    $(document).ready(function($) {

        //accordion
        // $( "#accordion" ).accordion(); //THIS would work if I had jQuery UI embedded :)
        $("div.title").click(function() {
            //alert(33);
            $(this).children("div.title > div.info").show(1000);
            $(this).siblings("div.title").children("div.info").hide();
        });

        $(".info").click(function(event){
            event.stopPropagation();
        });


        //Cycle 2 Demo
        $('#f5').cycle({
            fx:      'custom',
            cssBefore: {
                left: 115,
                top:  115,
                width: 0,
                height: 0,
                opacity: 1,
                display: 'block'
            },
            animOut: {
                opacity: 0
            },
            animIn: {
                left: 0,
                top: 0,
                width: 200,
                height: 200
            },
            cssAfter: {
                zIndex: 0
            },
            delay: -3000
        });
    })
})(jQuery);

