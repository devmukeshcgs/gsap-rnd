var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import validate from 'jquery-validation';
const URL = "https://qa-api-leapbridge.demotrt.com/v1";
// import 'jquery-validation/additional-methods'
// import '/node-modules/jquery-validation/dist/additional-methods'
import "jquery-validation/dist/additional-methods.js"


$(function() {
    $('.step-02').hide();
    var FORM_SUBMIT_BTN = $('#submitFeedbackForm');

    $('input[type=radio][name=rate]').change(function() {
        if ($(this).val() <= 6) {
            console.log("Allot Thai Gayo Bhai", $(this).val());
            $(".question").text("Question 1-6")
        }
        if ($(this).val() > 6 && $(this).val() <= 8) {
            console.log("Allot Thai Gayo Bhai", $(this).val());
            $(".question").text("Question 7-8")
        }
        if ($(this).val() >= 9 && $(this).val() <= 10) {
            console.log("Allot Thai Gayo Bhai", $(this).val());
            $(".question").text("Question 9-10")
        }
    });

    $('#submitFeedbackForm').on("click", function() {

        $('.step-01').hide();
        $('.step-02').show();

        if ($(".rate").prop("checked")) {
            alert();
            // do something
        }

        // OR
        if ($(".rate").is(":checked")) {
            alert();
            // do something
        }

        if ($('input[type=radio][name=rate]').is(":checked")) {
            //its checked
        } else {
            $('.error').show()
        }
    })
    $('.category button').click(function(e) {
        $('.category button').removeClass('active');
        var $parent = $(this);
        $parent.addClass('active');
        e.preventDefault();
    });

});