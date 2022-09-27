var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import validate from 'jquery-validation';
const URL = "https://qa-api-leapbridge.demotrt.com/v1";
// import 'jquery-validation/additional-methods'
// import '/node-modules/jquery-validation/dist/additional-methods'
import "jquery-validation/dist/additional-methods.js"

jQuery.validator.addMethod("phonenu", function(value, element) {
    if (/^\d{3}-?\d{3}-?\d{4}$/g.test(value)) {
        return true;
    } else {
        return false;
    };
}, "Invalid phone number");

jQuery.validator.addMethod("otpCus", function(value, element) {
    if (/[0-9\-\(\)\s]+/g.test(value)) {
        return true;
    } else {
        return false;
    };
}, "Invalid OTP number");

$("#sendOTPBtn2").on("click", function(event) {
    let val_mobile = $('#mobile2').val();
    console.log("val_mobile", val_mobile);
    $('#mobile2').valid();
    if (!val_mobile == '') {
        $.ajax({
            url: URL + "/parent/sendotp",
            type: 'POST',
            data: {
                "phone": "+91" + val_mobile
            },
            success: function(data) {
                console.log(data);
                // $('.otp-box').show();
                $('#btnNext:input[type="submit"]').prop('disabled', false);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
            }
        });
    } else {
        console.log("MOBILE IS EMPTY");
    }
});

$("#verifyOTPBtn2").on("click", function(event) {
    let val_mobile = $('#mobile2').val();
    let val_otp = $('#otp2').val();
    console.log("val_mobile", val_mobile, val_otp);
    $.ajax({
        url: URL + "/parent/confirmotp",
        type: 'POST',
        data: {
            "phone": "+91" + val_mobile,
            "otp": val_otp
        },
        success: function(data) {
            console.log(data);
            // $('#submitForm').attr();
            $(':input[type="submit"]').prop('disabled', false);
            $('.otp-error2').text("");
            $('#btnNext:input[type="submit"]').prop('disabled', false);

        },
        error: function(response) {
            console.log("ERROR", response.responseJSON);
            if (response.responseJSON.status === 'ERROR') {
                $('.otp-error2').text(response.responseJSON.errors[0].message)
            }
        }
    });

})

// SINGLE FIELD ONE TIME
$("#myForm").validate({
    rules: {
        username2: {
            required: true,
        },
        email2: {
            required: true,
            email: true
        },
        selectedAge: {
            required: true,
        },
        mobile2: {
            // matches: "[0-9\-\(\)\s]+",
            // minlength: 10,
            // maxlength: 10,
            phonenu: true,
            required: true,
        },
        otp2: {
            number: true,
            otpCus: true,
            minlength: 4,
            maxlength: 4,
            required: true,
        }
    },
    messages: {
        username2: {
            required: "Please enter your Name",
        },
        email2: {
            required: "Please enter your Email",
        },
        selectedAge: {
            required: "Please select your kids age",
        },
        mobile2: {
            required: "Please enter your mobile",
        },
        otp2: {
            required: "Please enter your OTP",
        }
    },
    errorPlacement: function(error, element) {
        if (element.attr("name") == "mobile2")
            error.insertAfter(".err-mob2");
        else if (element.attr("name") == "otp2")
            error.insertAfter(".err-otp2");
        else if (element.attr("name") == "selectedAge") {
            error.insertAfter(".err-selectedAge");
        } else {
            error.insertAfter(element);
        }
    }
})

var q = 1,
    qMax = 0;

$(function() {
    qMax = $('#myForm div.form-group').length;
    $('#myForm div.form-group').hide();
    $('#myForm div.form-group:nth-child(1)').show();
    $('#btnNext').on('click', function(event) {
        event.preventDefault();
        handleClick();
    });
    $('input:radio[name=kidAgeRadio]').change(function() {
        if (this.value == '2') {
            console.log("you selected age 2-3");
        } else if (this.value == '3') {
            console.log("you selected age 3-4");
        } else if (this.value == '4') {
            console.log("you selected age 4-5");
        }
        $('#selectedAge').val(this.value)
    });
    $(".age-btn-grp > button").on("click", function() {
        $('.age-btn-grp >  button').removeClass('active');
        $(this).addClass('active');

        $('#selectedAge').val($(this).data("age"))
    });
});

function handleClick() {
    if (q < qMax) {
        let currentFiled = $('#myForm div.form-group:nth-child(' + q + ') input').attr('id');
        let nextFiled = $('#myForm div.form-group:nth-child(' + (q + 1) + ') input').attr('id');

        // $('#' + currentFiled).validate()
        if ($('#' + currentFiled).valid()) {
            if (nextFiled == 'mobile2' || nextFiled == 'otp2') {
                // $('#btnNext:input[type="submit"]').prop('disabled', true);
            } else {
                console.log("@MOBILE@");
            }

            $('#myForm div.form-group:nth-child(' + q + ')').animate({
                // opacity: '0'
            }, "slow").hide(500);

            $('#myForm div.form-group:nth-child(' + (q + 1) + ')').animate({
                // opacity: '1',
            }, "slow").show(500);

            // LAST FEILD
            if (nextFiled == 'email2') {

            }

            if (q == (qMax - 1)) {
                $('#btnNext').html('Submit');
            }

            q++;
        }
    } else {
        let lastFeild = $('#myForm div.form-group:nth-child(' + qMax + ') input').attr('id');
        if (lastFeild == 'email2' && $('#email2').valid()) {
            $('#email2').valid()
        }
    }
}