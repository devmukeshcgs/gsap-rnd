var $ = require("jquery");
window.jQuery = $;
window.$ = $;
import validate from 'jquery-validation';
const URL = "https://qa-api-leapbridge.demotrt.com/v1";
// const URL = "https://dev-api-leapbridge.demotrt.com/v1";

$(function() {
    $('#loginsubmitForm:input[type="submit"]').prop('disabled', true);

    $("#loginsendOTPBtn").on("click", function(event) {
        let val_mobile = $('#mobile').val();
        //console.log("val_mobile", val_mobile);
        $('#mobile').valid();
        $.ajax({
            url: URL + "/parent/sendotp",
            type: 'POST',
            data: {
                "phone": "+91" + val_mobile
            },
            success: function(data) {
                console.log(data);
                $('.otp-box').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                //console.log(jqXHR, textStatus, errorThrown);
            }
        });
    });

    $("#loginverifyOTPBtn").on("click", function(event) {
        let val_mobile = $('#mobile').val();
        let val_otp = $('#otp').val();
        //console.log("val_mobile", val_mobile, val_otp);
        $.ajax({
            url: URL + "/parent/confirmotp",
            type: 'POST',
            data: {
                "phone": "+91" + val_mobile,
                "otp": val_otp
            },
            success: function(data) {
                console.log(data);
                // $('#loginsubmitForm').attr();
                $(':input[type="submit"]').prop('disabled', false);
                $('.otp-error').text("");

            },
            error: function(response) {
                //console.log("ERROR", response.responseJSON);
                if (response.responseJSON.status === 'ERROR') {
                    $('.otp-error').text(response.responseJSON.errors[0].message)
                }
            }
        });
    })

    $("#login-form").validate({
        rules: {

            mobile: {
                required: true,
            },
            otp: {
                required: true,
            }
        },
        messages: {
            mobile: {
                required: "Please enter your mobile",
            },
            otp: {
                required: "Please enter your mobile",
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "mobile")
                error.insertAfter(".err-mob");
            else if (element.attr("name") == "otp")
                error.insertAfter(".err-otp");
            else
                error.insertAfter(element);
        }
    })

    $("#loginsubmitForm").on("click", function(event) {
        event.preventDefault();
        if ($("#register-form").valid()) {

            let val_mobile = $('#mobile').val();
            let val_otp = $('#otp').val();

            let DATA = {
                    "phone": "+91" + val_mobile,
                    "otp": val_otp
                }
                //console.log(DATA);
                // API CALL
            $.ajax({
                url: URL + "/Webuser",
                type: 'POST',
                data: DATA,
                success: function(data) {
                    //console.log(data);
                    //console.log("FORM SUBMITTED SUCCESSFULLY!");
                    $('.thank-you-msg').show();
                    setTimeout(function() {
                        $('.thank-you-msg').hide();
                        $('#mobile').val('');
                        $('#otp').val('');
                    }, 5000);
                },
                error: function(response) {
                    //console.log("ERROR", response.responseJSON);
                    // if (response.responseJSON.status === 'ERROR') {
                    //     $('.otp-error').text(response.responseJSON.errors[0].message)
                    // }
                }
            });


        }
    });

});