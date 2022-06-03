var _ = require('lodash');

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import csvDATA from '../data/csvjsonJobs.json';


$(function() {
    // $('#submitJobForm:input[type="submit"]').prop('disabled', true);

    $("#apply-job-form").validate({
        rules: {
            firstname: {
                required: true,
            },
            lastname: {
                required: true,
            },
            email: {
                required: true,
            },
            mobile: {
                required: true,
            },
            position: {
                required: true,
            }
        },
        messages: {
            firstname: {
                required: "Please enter your First name",
            },
            lastname: {
                required: "Please enter your Last name",
            },
            email: {
                required: "Please enter your Eamil",
            },
            mobile: {
                required: "Please enter your mobile",

            },
            position: {
                required: "Please select your position",
            }
        },
        errorPlacement: function(error, element) {
            // if (element.attr("name") == "mobile")
            //     error.insertAfter(".err-mob");
            // else if (element.attr("name") == "otp")
            //     error.insertAfter(".err-otp");
            // else
            //     error.insertAfter(element);
        }
    })

    $("#submitJobForm").on("click", function(event) {
        event.preventDefault();
        if ($("#apply-job-form").valid()) {
            let val_username = $('#firstname').val();
            let val_email = $('#email').val();
            let val_lastname = $('#lastname').val();
            let val_mobile = $('#mobile').val();
            let val_position = $('#position').val();

            console.log("---------------------");
            console.log(val_username);
            console.log("---------------------");

            // let DATA = {
            //         "firstname": val_username,
            //         "lastname": val_lastname,
            //         "email": val_email,
            //         "mobile": "+91" + val_mobile,
            //         "position": val_position,
            //     }

            // $.ajax({
            //     url: URL + "/Webuser",
            //     type: 'POST',
            //     data: DATA,
            //     success: function(data) {
            //         $('.thank-you-msg').show();
            //         setTimeout(function() {
            //             $('.thank-you-msg').hide();
            //             $('#firstname').val('');
            //             $('#email').val('');
            //             $('#lastname').val('');
            //             $('#mobile').val('');
            //             $('#otp').val('');
            //         }, 5000);
            //     },
            //     error: function(response) {}
            // });


        }
    });
});