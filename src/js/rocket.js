// import Scrollbar from 'smooth-scrollbar';

import pipeEmptyImg from '../assets/earth/pipe-bot-empty.svg';
import pipeFilledImg from '../assets/earth/pipe-bot-filled.svg';
import submarineImg from '../assets/medow/submarine.svg';
import spaceshipImg from '../assets/medow/spaceship.svg';

import star_yellow from '../assets/sky/star-yellow.svg';
import star_grey from '../assets/sky/star-grey.svg';
import star_white from '../assets/sky/star-white.svg';

// Scrollbar.init(document.querySelector('#scroll-container') );
$(function() {
    // VARS
    let WIW = verge.viewportW();
    let WIH = verge.viewportH();

    let Rocket_Width = 200;
    let Rocket_Height = 160;
    let launchpad_Height = 30;
    let rocket_base_offset = 0;

    var SECTION = $("section")
    var ELM = $(".elm")
    var EARTH_LAYER = $(".earth-layer")
    var PIPE = $(".pipe")
    var LOGO_RES_Y_OFFSET = 50;

    if (WIW < 530) {
        Rocket_Height = 369 / 2;
        Rocket_Width = 200 / 2;
        rocket_base_offset = 0
        LOGO_RES_Y_OFFSET = 100;
    }

    let STARS_COUNT = 100;
    // Set Section Height
    if (WIW > 480) {
        SECTION.css('height', WIH + "px");
        ELM.css('height', WIH + "px");
    }

    EARTH_LAYER.css('height', (WIH / 2) + "px")
    EARTH_LAYER.css('margin-top', -(WIH / 4) + "px")
    PIPE.css('height', (WIH / 1.5) + "px")
    PIPE.css('margin-top', -(WIH / 1.5) / 2 + "px")

    $('.space-bg-img').css('height', WIH + "px")
    $(".rays").css('height', WIH + "px")

    if (WIW < 480) {
        STARS_COUNT = 25;
        PIPE.css('height', (WIH / 1.5) + "px")
    }

    var isMob = false;

    if (WIW < 480) {
        STARS_COUNT = 25;
        PIPE.css('height', (WIH / 1.5) + "px")
        isMob = true;
    }

    // var STARS_ARRAY = ["star-yellow", "star-grey", "star-whitet"];
    var STARS_ARRAY = [star_yellow, star_grey, star_white];

    var STARS_SIZE_ARRAY = ["tiny", "small", "medium", "big"];

    for (var i = 0; i < STARS_COUNT; i++) {
        var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
        var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
        var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9; opacity:' + Math.random(0.5, 1) + '; animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height() - 50) + 'px; left: ' + Math.random() * $(window).width() + 'px;"><img src="' + STARS_ARRAY[randomStar] + '"/></div>';
        $('#space').append(star);
    }
    ////////////////////////////////////////////////////// HORIZONTAL SCROll
    for (var i = 0; i < 30; i++) {
        var randomStar = Math.floor(Math.random() * STARS_ARRAY.length);
        var randomStarSize = Math.floor(Math.random() * STARS_SIZE_ARRAY.length);
        var star = '<div class="star ' + STARS_SIZE_ARRAY[randomStarSize] + '" style="z-index: 9; opacity:' + Math.random(0.5, 1) + '; animation: twinkle ' + ((Math.random() * 5) + 5) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * ($(window).height() / 2) + 'px; left: ' + Math.random() * $(window).width() + 'px;"><img src="' + STARS_ARRAY[randomStar] + '"/></div>';
        $('#sky').append(star);
    }

    // var controller_h = new ScrollMagic.Controller({vertical: false});
    // var tween_ROCKET_H = new TimelineMax()
    //     .to("#rocket", 0.5, {
    //         // rotation: 40,
    //      })
    // // build scene
    // var scene_h = new ScrollMagic.Scene({duration: "100%"})
    // 				.setTween(tween_ROCKET_H)
    // 				// .setPin("#rocket")
    // 				.addIndicators({name: "rotate_h"}) // add indicators (requires plugin)
    // 				.addTo(controller_h);
    ////////////////////////////////////////////////////// BUBBLES

    for (var b = 0; b < 50; b++) {
        var bubbles = '<div class="bubble" style="z-index: 9;animation: moveBubbles ' + ((Math.random() * 3) + 3) + 's linear ' + ((Math.random() * 5) + 5) + 's infinite; top: ' + Math.random() * $(window).height() + 'px; left: ' + Math.random() * $(window).width() + 'px; transform:scale(' + Math.random() + ')"> </div>';
        $('.bubbles').append(bubbles);
    }

    ////////////////////////////////////////////////////// POPUP
    // for (var p = 0; p < 25; p++) {
    //     var pop_ups = '<div class="popup_bubble" style="z-index: 200; top: ' + Math.random() * ($(window).height() / 2) + 'px; left: ' + Math.random() * ($(window).width() / 2) + 'px;  "> </div>';
    //     $('.text_pop_up').append(pop_ups);
    // }
    ////////////////////////////////////////////////////// FLAMES

    let oldValue = 0
    let newValue = 0
    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        if (oldValue < newValue) {
            // if (oldValue > WIH * 3) {
            //     $('#rocket img').attr("src", './assets/medow/submarine.svg');
            // } else {
            //     $('#rocket img').attr("src", './assets/medow/rocket_red_down.svg');
            // }
            // $("#rocket").addClass('go-down');
            // console.log("scrolling page Up", newValue, WIH * 4);
            if (newValue >= (WIH * 4 - 100)) {
                $('.diractions button:nth-child(3)').hide();
            }
            if (newValue >= 100) {
                $('.diractions button:nth-child(1)').show();
            }

        } else if (oldValue > newValue) {
            // if (oldValue < WIH * 2.5) {
            //     $('#rocket img').attr("src", './assets/medow/rocket-2.svg');
            //     $('#rocket').addClass("addSmoke");
            //     $('#rocket').removeClass("submarine");
            // } else {
            //     $('#rocket img').attr("src", './assets/medow/submarine.svg');
            //     $('#rocket').removeClass("addSmoke");
            //     $('#rocket').addClass("submarine");
            // }

            // $("#rocket").removeClass('go-down');
            // console.log("scrolling page Down", newValue);

            if (newValue <= 100) {
                $('.diractions button:nth-child(1)').hide();
            }

            if (newValue <= (WIH * 4 - 100)) {
                $('.diractions button:nth-child(3)').show();
            }
        }
        oldValue = newValue;
    });

    // ROCKET
    var controller_ROCKET = new ScrollMagic.Controller();
    var tween_ROCKET = new TimelineMax()
        .to("#rocket", 1, {
            x: 0,
            y: (WIH / 2) - (Rocket_Height),
            ease: 'EaseIn'
        })
        .to("#rocket", 0.5, {
            x: 0,
            onComplete: () => {
                // console.log("STEP - 2")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 0.5, {
            x: -100,
            onComplete: () => {
                // console.log("STEP - 3")
            },
            ease: 'Power4.out'
        })
        .to("#rocket", 0.5, {
            x: 0,
            y: (WIH / 2 - Rocket_Height),
            onComplete: () => {},
            ease: 'Power4.out'
        })
        .to("#rocket", 1, {
            x: 0,
            y: (WIH / 2) - (Rocket_Height / 2) - rocket_base_offset,
            onComplete: () => {},
            ease: 'Power4.out'
        })

    // tween_ROCKET.call(function() {
    //     $('#rocket').toggleClass("addSmoke");
    // }, null, null, 0);

    // build scene
    var scene_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#rocket_trigger",
            // duration: 3000,
            duration: "200%",
            offset: WIH - 5
        })
        .setTween(tween_ROCKET)
        // .addIndicators({ name: "ROCKET" })
        .addTo(controller_ROCKET)
        .triggerHook("1");
    scene_ROCKET.on("start", function(event) {
        $('#rocket').addClass("addSmoke");
        // $('.launcher-base').show();
        // $('.launcher-base').show();
        // console.log("STARTED....");
    });

    scene_ROCKET.on("progress", function(event) {
        // console.log("Scene progress changed to " + event.progress);
    });
    //  bind scroll to anchor links

    // change behaviour of controller to animate scroll instead of jump
    controller_ROCKET.scrollTo(function(newpos) {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: newpos
            }
        });
    });
    // ROCKET END controller_ROCKET
    var controller_SPACE = new ScrollMagic.Controller();
    var controller_SKY = new ScrollMagic.Controller();
    var controller_LAND = new ScrollMagic.Controller();
    var controller_EARTH = new ScrollMagic.Controller();
    var controller_UNDERWATER = new ScrollMagic.Controller();
    var controller_SUB_2 = new ScrollMagic.Controller();

    // ------------------- SPACE ----------------------

    var tween_SPACE_btn = new TimelineMax()
        .to("#space_btn", 0.5, {
            x: 0,
        })
        .to("#space_btn", 0.5, {
            x: 120,
        });

    var scene_SPACE = new ScrollMagic.Scene({
            triggerElement: "#space",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".space-cta", "visible")
        // .addIndicators({ name: "SPACE_NAV" })
        .addTo(controller_SPACE)
        .triggerHook(0.5);
    // ------------------- SPACE NAV ----------------------
    var scene_SPACE_NAV = new ScrollMagic.Scene({
            triggerElement: "#space",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-space", "visible")
        // .addIndicators({ name: "SPACE" })
        .addTo(controller_SPACE)
        .triggerHook(0.5);
    // ------------------- SPACE NAV END ----------------------

    // ------------------- SPACE ----------------------
    var tween_SPACE_btn = new TimelineMax()
        .to("#space_btn", 0.5, {
            x: 0,
        })
        .to("#space_btn", 0.5, {
            x: 120,
        });
    var scene_SKY = new ScrollMagic.Scene({
            triggerElement: "#space",
            // duration: 500,
            duration: "25%",
            offset: WIH / 4
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#space_pop_up", "visible")
        // .addIndicators({ name: "SPACE_TEXT" })
        .addTo(controller_SPACE)
        .triggerHook(0.25);
    // ------------------- SKY ----------------------
    var tween_SKY_btn = new TimelineMax()
        .to("#sky_btn", 0.5, {
            x: 0,
        })
        .to("#sky_btn", 0.5, {
            x: 120,
        });
    var scene_SKY = new ScrollMagic.Scene({
            triggerElement: "#sky",
            // duration: 500,
            duration: "100%",
            offset: 0
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#sky_pop_up", "visible")
        // .addIndicators({ name: "SKY_TEXT" })
        .addTo(controller_SKY)
        .triggerHook(0.5);
    // ------------------- SKY NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#sky",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-sky", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_SKY)
        .triggerHook(0.5);
    // ------------------- SKY NAV END ----------------------

    // ------------------- LAND ----------------------
    var tween_LAND_btn = new TimelineMax()
        .to("#land_btn", 0.5, {
            x: 0,
        })
        .to("#land_btn", 0.5, {
            x: 120,
        });
    var scene_LAND = new ScrollMagic.Scene({
            triggerElement: "#land",
            // duration: 500,
            duration: "25%",
            offset: WIH / 4
        })
        // .setTween([tween_LAND_btn])
        .setClassToggle("#land_pop_up", "visible")
        // .addIndicators({ name: "LAND" })
        .addTo(controller_LAND)
        .triggerHook(0.25);
    // ------------------- LOGO SCENE ----------------------
    var tween_LOGO = TweenMax.fromTo("#logo", 1, {
        y: 0,
        autoAlpha: 0
    }, {
        y: LOGO_RES_Y_OFFSET,
        autoAlpha: 1
    });
    var scene_LOGO = new ScrollMagic.Scene({
            triggerElement: "#trigger_LOGO",
            duration: "50%",
            offset: -WIH / 2
        })
        .setTween([tween_LOGO])
        // .addIndicators({  name: "LOGO" })
        .triggerHook(0)
        // .on("start", function(event) {})
        // .on("end", function(event) {})
        // .on("enter", function(event) {})
        // .on("progress", function(event) {})
        // .on("remove", function(event) {})
        // .on("update", function(event) {})
        // .on("leave", function(event) {}).on("enter", callback).on("leave", callback)
        .addTo(controller_ROCKET);

    // ------------------- EARTH ----------------------

    // global vars
    // var viewer = document.querySelector(".viewer"),
    //     frame_count = 9,
    //     offset_value = 100;
    // init controller
    // var controller_pipe = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 0,
    //         reverse: true
    //     }
    // });

    // build step frame scene
    // for (var i = 1, l = frame_count; i <= l; i++) {
    //     new ScrollMagic.Scene({
    //             duration: frame_count * offset_value + "px",
    //             triggerElement: "#earth",
    //             offset: i * offset_value
    //         })
    //         .setClassToggle(viewer, "frame" + i)
    //         .addIndicators("PIPE_STICKEY")
    //         .addTo(controller_pipe);
    // }

    // ------------------- EARTH TEXT ----------------------
    // var tween_LAND_btn = new TimelineMax()
    //     .to("#earth_btn", 0.5, {
    //         x: 0,
    //     })
    //     .to("#earth_btn", 0.5, {
    //         x: 120,
    //     });

    var scene_EARTH_PIPE = new ScrollMagic.Scene({
            triggerElement: "#earth",
            duration: "33%",
            offset: WIH / 3
        })
        // .setPin("#earth")
        .setClassToggle("#pipe-sequence", "visible")
        // .addIndicators({ name: "EARTH_PIPE" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);

    scene_EARTH_PIPE.on("enter", function(event) {
        // $('#pipe-sequence').attr("src", pipeFilledImg);
    });
    scene_EARTH_PIPE.on("leave", function(event) {
        // $('#pipe-sequence').attr("src", pipeEmptyImg);
    });

    var scene_EARTH_TEXT = new ScrollMagic.Scene({
            triggerElement: "#earth",
            duration: "100%",
            offset: 0
        })
        // .setPin("#earth")
        .setClassToggle("#earth_pop_up", "visible")
        // .addIndicators({ name: "EARTH_TEXT" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- LAND NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#land",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-land", "visible")
        // .addIndicators({ name: "LAND_NAV" })
        .addTo(controller_LAND)
        .triggerHook(0.5);
    // ------------------- SKY NAV END ----------------------
    // https://mukeshnavneet.github.io/docs/assets/earth/pipe-5.svg
    var images = [
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-0.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-1.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-2.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-3.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-bot.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-4.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-5.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-6.svg",
        "https://mukeshnavneet.github.io/docs/assets/earth/pipe-0.svg",
    ];
    var obj22 = { curImg: 0 };
    // create tween
    var tween_pipe_sequence = TweenMax.to(obj22, 0.5, {
        curImg: images.length - 1, // animate propery curImg to number of images
        roundProps: "curImg", // only integers so it can be used as an array index
        repeat: 0, // repeat 3 times
        immediateRender: true, // load first image automatically
        ease: Linear.easeNone, // show every image the same ammount of time
        onUpdate: function() {
            // var str = "<img class='bcg' src="+ images[obj.curImg] +"/>"
            //  $(".pipe").html(str)
            $("#pipe-sequence").attr("src", images[obj22.curImg]); // set the image source
        }
    });

    var tween_EARTH_btn = new TimelineMax()
        .to("#earth_btn", 1, {
            x: 0,
        })
        .to("#earth_btn", 1, {
            x: 120,
        })
        .to("#earth_btn", 1, {
            x: 0,
        });

    var scene_tween_pipe_sequence = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "80%",
            offset: "10%"
        })
        .setTween([tween_pipe_sequence])
        // .addIndicators({ name: "scene_tween_pipe_sequence" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);

    var scene_EARTH = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "20%",
            offset: "0px"
        })
        .setTween([tween_EARTH_btn])
        // .addIndicators({ name: "EARTH" })
        .addTo(controller_EARTH)
        .triggerHook(1);

    scene_EARTH.on("start", function(event) {
        $('#rocket').removeClass("addSmoke");
    });

    scene_EARTH.on("leave", function(event) {
        $('#rocket').addClass("addSmoke");
    });

    var tween_EARTH_rocket = new TimelineMax()
        .to("#rocket", 0.5, {
            scale: 0.5,
            // y: (WIH / 2) - (Rocket_Height / 2)
        })
        .to("#rocket", 0.5, {
            scale: 0.5,
            // y: (WIH / 2) - (Rocket_Height / 2)
        })
        .to("#rocket", 0.5, {
            scale: 0,
            // y: (WIH / 2) - (Rocket_Height / 2)
        });

    var scene_EARTH_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: "50%",
            offset: "0px"
        }).setTween([tween_EARTH_rocket])
        // .addIndicators({ name: "scene_EARTH_ROCKET" })
        .addTo(controller_EARTH)
        .triggerHook(1);



    //////////////////////////SMOKEEEEEEEEEEEEEEEEE/////////
    var controller_SMOKE = new ScrollMagic.Controller();
    // var tween_SMOKE = new TimelineMax()
    //     .to('.smoke-to-left', 1, {
    //         scale: 0.5,
    //         y: 10,
    //     })
    //     .to('.smoke-to-left', 1, {
    //         scale: 0,
    //         y: 0
    //     });
    var scene_SMOKE = new ScrollMagic.Scene({
            triggerElement: "#earth",
            // duration: 500,
            duration: WIH * 2 + 50,
            offset: "-100px"
        })
        // .setTween([tween_SMOKE])
        // .addIndicators({ name: "scene_SMOKE" })
        .addTo(controller_SMOKE)
        .triggerHook(0.9);

    scene_SMOKE.on("start", function(event) {
        $('.smoke-to-left').hide();
        $('.smoke-to-right').hide();
    });
    scene_SMOKE.on("leave", function(event) {
        $('.smoke-to-left').show();
        $('.smoke-to-right').show();
    });
    //////////////////////////SMOKEEEEEEEEEEEEEEEEE/////////

    // ------------------- PIPE FOR ROCKET ----------------------
    // ------------------- EARTH NAV ----------------------
    var scene_SKY_NAV = new ScrollMagic.Scene({
            triggerElement: "#earth",
            duration: "50%",
            offset: WIH / 4
        })
        .setClassToggle(".in-earth", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- EARTH NAV END ----------------------
    var scene_PIPE = new ScrollMagic.Scene({
            triggerElement: ".pipe-start",
            // duration: 500,
            duration: "100%",
            offset: -(WIH / 2 - Rocket_Height)
        })
        // .addIndicators({ name: "PIPE" })
        // .setTween([tween_PIPE_MOVE])
        .addTo(controller_ROCKET)
        .triggerHook(0.5);
    scene_PIPE.on("start", function(event) {
        // $('#rocket').hide();
    });
    scene_PIPE.on("leave", function(event) {
        // $('#rocket').show();
    });

    // ------------------- UNDERWATER ----------------------

    var scene_UNDERWATER = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "150%",
            offset: -WIH / 2
        })
        // .setTween([tween_LAND_btn, ])
        // .addIndicators({ name: "UNDERWATER" })
        .addTo(controller_UNDERWATER)
        .triggerHook(0.5);

    // ------------------- EARTH TEXT ----------------------

    // var tween_LAND_btn = new TimelineMax()
    //     .to("#earth_btn", 0.5, {
    //         x: 0,
    //     })
    //     .to("#earth_btn", 0.5, {
    //         x: 120,
    //     });

    var scene_UNDERWATER_TEXT = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            duration: "100%",
            offset: 0
        })
        .setClassToggle("#sea_pop_up", "visible")
        // .addIndicators({ name: "UNDERWATER_TEXT" })
        .addTo(controller_UNDERWATER)
        .triggerHook(0.5);

    var tween_UNDERWATER_btn = new TimelineMax()
        .to("#sea_btn", 1, {
            x: 0,
        })
        .to("#sea_btn", 1, {
            x: 120,
        })
        .to("#sea_btn", 1, {
            x: 0,
        });

    var tween_UNDERWATER_rocket = new TimelineMax()
        .to("#rocket", 1, {
            scale: 0.2,
            y: 100
        })
        .to("#rocket", 1, {
            scale: 1,
            rotation: -90,
            x: 0,
            y: 100
        })
    var scene_UNDERWATER_ROCKET = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "50%",
            offset: "0px"
        })
        .setTween([tween_UNDERWATER_rocket])
        // .addIndicators({ name: "scene_UNDERWATER_ROCKET" })
        .addTo(controller_UNDERWATER)
        .triggerHook(1);

    scene_UNDERWATER_ROCKET.on("start", function(event) {
        // $('#rocket img').attr("src", './assets/medow/submarine.svg');
    });
    scene_UNDERWATER.on("start", function(event) {
        $('#rocket').removeClass("addSmoke");
        $('#rocket').addClass("submarine");
        $('#rocket img').attr("src", submarineImg);
    });

    scene_UNDERWATER.on("leave", function(event) {
        $('#rocket img').attr("src", spaceshipImg);
        $('#rocket').removeClass("addSmoke");
        $('#rocket').removeClass("submarine");
    });
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    var controller_UNDERWATER2 = new ScrollMagic.Controller();

    var tween_UNDERWATER_rocket2 = new TimelineMax()
        .fromTo("#rocket2", 0.2, {
            scale: 1,
            y: 0,
            x: 25
                // rotation:-180
        }, {
            scale: 1,
            y: 0,
            x: 25
                // rotation:-180
        })
    var scene_UNDERWATER_ROCKET2 = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "100%",
            offset: "0px"
        })
        .setPin("#rocket2")
        .setTween([tween_UNDERWATER_rocket2])
        // .addIndicators({ name: "scene_UNDERWATER_ROCKET2" })
        .addTo(controller_UNDERWATER2)
        .triggerHook(1);
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    var controller_UNDERWATER3 = new ScrollMagic.Controller();

    var tween_UNDERWATER_rocket3 = new TimelineMax()
        .to("#rocket2", 0.2, {
            scale: 1,
            rotation: -90,
            y: 0
        })
        .to("#rocket2", 0.2, {
            scale: 1.75,
            y: 100,
            x: -50,
            rotation: -90
        })
    var scene_UNDERWATER_ROCKET3 = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            // duration: 500,
            duration: "50%",
            offset: 0
        })
        .setTween([tween_UNDERWATER_rocket3])
        // .addIndicators({ name: "scene_UNDERWATER_ROCKET22" })
        .addTo(controller_UNDERWATER3)
        .triggerHook(0.5);
    /////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////
    // ------------------- EARTH NAV ----------------------
    var scene_SEA_NAV = new ScrollMagic.Scene({
            triggerElement: "#underwater",
            duration: "50%",
            offset: WIH / 4
        })
        // .setClassToggle(".in-sea", "visible")
        // .addIndicators({ name: "SKY_NAV" })
        .addTo(controller_EARTH)
        .triggerHook(0.5);
    // ------------------- EARTH NAV END ----------------------
    // var tween_SUB_2 = new TimelineMax()
    //     .to("#sea_btn", 1, {
    //         x: 0,
    //     })
    //     .to("#sea_btn", 1, {
    //         x: 120,
    //     })
    //     .to("#sea_btn", 1, {
    //         x: 0,
    //     });
    // var scene_SUB2 = new ScrollMagic.Scene({
    //         triggerElement: "#underwater",
    //         duration: "60%",
    //         offset: 0
    //     })
    //     .setTween([tween_SUB_2])
    //     // .addIndicators({ name: "SEA_SUB2" })
    //     .addTo(controller_SUB_2)
    //     .triggerHook(1);

    // var cloudTl = new TimelineMax({ repeat: -1, force3D: true });
    // cloudTl.to(".fish-center-top", 10, { x: WIW + 100, ease: Linear.easeInOut }, 1)
    // .to("#cloud02", 5, { x: WIW, ease: Linear.easeNone }, 0.9)
    // .to("#cloud03", 9, { x: WIW, ease: Linear.easeNone }, 1)
    // .to("#cloud04", 4, { x: WIW, ease: Linear.easeNone }, 1.5);

    /////////////////////////////////////////////////// POPUP
    var $space_pop_up = $("#space_pop_up")
    var $space_btn = $("#space_btn")
        // SKY BTN
    var $sky_pop_up = $("#sky_pop_up")
    var $sky_btn = $("#sky_btn")
    var $touch_me_not_popup = $("#touch-me-not-popup")
    var $touch_me_not = $("#touch-me-not")
    var $back_btn = $(".back-btn")
        // LAND BTN
    var $land_pop_up = $("#land_pop_up")
    var $land_btn = $("#land_btn")
        //EARTH BTN
    var $earth_pop_up = $("#earth_pop_up")
    var $earth_btn = $("#earth_btn")
        //SEA BTN
    var $sea_pop_up = $("#sea_pop_up")
    var $sea_btn = $("#sea_btn")

    $space_btn.on("click", function name(params) {
        $space_pop_up.addClass("animate__bounceIn");
        $space_pop_up.show();
        setTimeout(() => {
            $space_pop_up.hide();
        }, 4000);
    })

    $sky_btn.on("click", function name(params) {
        $("#touch-me-not").removeClass("hide-btn");
        TweenMax.to("#touch-me-not img", 0.5, {
            width: "200px"
        })
        TweenMax.to(".cloud-text", 0.5, {
            autoAlpha: 0,
            scale: 0,
        })
        $sky_pop_up.addClass("animate__bounceIn");
        $sky_pop_up.show();
        setTimeout(() => {
            $sky_pop_up.hide();
        }, 4000);
    })

    $touch_me_not.on("click", function name(params) {
        // alert();
        $touch_me_not.toggleClass("zoom");
    })

    var $touch_me_not_IMG = $("#touch-me-not img")

    var $cloud_text = $(".cloud-text")


    // $touch_me_not_IMG.hover(over, null);
    // $touch_me_not.hover(null, out);

    // TweenMax.to($touch_me_not_IMG, 0.5, {
    //     x: "0%",
    //     width: "200px",
    // })
    // TweenMax.to($cloud_text, 0.5, {
    //     autoAlpha: 1,
    //     scale: 0
    // })

    let res_SIZE = (isMob == true) ? WIW * 2 : "200px";


    $land_btn.on("click", function name(params) {
        $land_pop_up.addClass("animate__bounceIn");
        $land_pop_up.show();
        setTimeout(() => {
            $land_pop_up.hide();
        }, 4000);
    })

    $earth_btn.on("click", function name(params) {
        $earth_pop_up.addClass("animate__bounceIn");
        $earth_pop_up.show();
        setTimeout(() => {
            $earth_pop_up.hide();
        }, 4000);
    })

    $sea_btn.on("click", function name(params) {
        $sea_pop_up.addClass("animate__bounceIn");
        $sea_pop_up.show();
        setTimeout(() => {
            $sea_pop_up.hide();
        }, 4000);
    })

    $('.text_btn').hover(
        function() {
            $(this).addClass('animate__wobble');
        },
        function() {
            $(this).removeClass('animate__wobble');
        }
    );

    //////////////////////////// MODAL ////////////////////////////////

    $(".close-button").click(function() {
        TweenMax.to(".actual-message", 0.5, {
            marginTop: 50,
            opacity: 0,
            ease: "ease-in"
        });

        TweenMax.to(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        });
    });

    $(".register-btn").click(function() {
        // console.log("REG");
        TweenMax.fromTo(".actual-message", 0.5, {
            marginTop: 50,
            opacity: 0,
            ease: Back.easeOut,
            delay: 1.5
        }, {
            marginTop: 50,
            opacity: 1,
            ease: "ease-in"
        });

        TweenMax.fromTo(".modal", 0.5, {
            opacity: 0,
            y: "-100%",
        }, {
            opacity: 1,
            y: "0%",
        });
    });

    // Init controller
    var window_controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: "100%",
            triggerHook: .025,
            reverse: true
        }
    });

    var scenes = {
        'scene1': {
            'space': 'space_link'
        },
        'scene2': {
            'sky': 'sky_link'
        },
        'scene3': {
            'land': 'land_link'
        },
        'scene4': {
            'earth': 'earth_link'
        },
        'scene5': {
            'underwater': 'underwater_link'
        }
    }

    for (var key in scenes) {
        // skip loop if the property is from prototype
        if (!scenes.hasOwnProperty(key)) continue;
        var obj = scenes[key];
        for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            new ScrollMagic.Scene({ triggerElement: '#' + prop })
                .setClassToggle('#' + obj[prop], 'active')
                .addTo(window_controller);
            new ScrollMagic.Scene({ triggerElement: '#' + prop })
                .setClassToggle('#' + prop, 'active')
                .addTo(window_controller);
        }
    }

    // Change behaviour of controller
    // to animate scroll instead of jump
    window_controller.scrollTo(function(target) {
        TweenMax.to(window, 2, {
            scrollTo: {
                y: target,
                autoKill: true // Allow scroll position to change outside itself
            },
            ease: Cubic.easeInOut
        });
    });

    //  Bind scroll to anchor links using Vanilla JavaScript
    var anchor_nav = document.querySelector('.anchor-nav');
    // anchor_nav.addEventListener('click', function(e) {
    //     var target = e.target,
    //         id = target.getAttribute('href');
    //     if (id !== null) {
    //         if (id.length > 0) {
    //             e.preventDefault();
    //             window_controller.scrollTo(id);
    //             if (window.history && window.history.pushState) {
    //                 history.pushState("", document.title, id);
    //             }
    //         }
    //     }
    // });

    if (Modernizr.touch) {
        console.log('Touch Screen');
        if (typeof Modernizr != "undefined" && Modernizr.mq('(orientation: landscape)')) {
            console.log('you are in landscape mode, please use Portrait Mode');
            $(".orientationchange").addClass("show");
        } else {
            $(".orientationchange").removeClass("show");
        }
        $(document.body).on('touchmove', onScroll); // for mobile
        $(window).on('scroll', onScroll);

        // callback
        function onScroll() {
            if ($(window).scrollTop() + window.innerHeight >= document.body.scrollHeight) {
                track_page++;
                load_contents(track_page);
            }
        }
    } else {
        console.log('No Touch Screen');
    }

    if (typeof Modernizr != "undefined" && Modernizr.mq('(orientation: portrait)')) {
        console.log('portrait');
    } else if (typeof Modernizr != "undefined" && Modernizr.mq('(orientation: landscape)')) {
        console.log('landscape');
    }

    // Init controller
    var win_controller = new ScrollMagic.Controller();

    // Change behavior of controller
    // to animate scroll instead of jump
    win_controller.scrollTo(function(target) {
        TweenMax.to($("html"), 2, {
            scrollTo: {
                y: target, // scroll position of the target along y axis
                autoKill: true // allows user to kill scroll action smoothly
            },
            ease: Cubic.easeOut
        });
    });

    //  Bind scroll to anchor links
    $(document).on("click", ".navs a", function(e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();
            win_controller.scrollTo(id);
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });
    $(document).on("click", "a.replay-btn", function(e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();
            // trigger scroll
            win_controller.scrollTo(id);
            // If supported by the browser we can also update the URL
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }

    });

    orientationChange();
    windowResize();

    // configure iScroll
    // var myScroll = new IScroll('#example-wrapper', {
    //     // don't scroll horizontal
    //     scrollX: false,
    //     // but do scroll vertical
    //     scrollY: true,
    //     // show scrollbars
    //     scrollbars: true,
    //     // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
    //     // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
    //     useTransform: false,
    //     // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
    //     useTransition: false,
    //     // set to highest probing level to get scroll events even during momentum and bounce
    //     // requires inclusion of iscroll-probe.js
    //     probeType: 3
    // });

    // if (Modernizr.touch && myScroll) { // when using iscroll
    //     controller_ROCKET.scrollTo(function(newpos) {
    //         myScroll.scrollTo(0, -newpos - myScroll.y, 1000, IScroll.utils.ease.quadratic)
    //     });
    // } else {
    //     controller_ROCKET.scrollTo(function(newpos) {
    //         TweenMax.to("#example-wrapper", 1, { scrollTo: { y: newpos } });
    //     });
    // }

    let oldValue1 = 0
    let newValue1 = 0
    let dir = "";

    window.addEventListener('scroll', (e) => {
        newValue1 = window.pageYOffset;
        if (oldValue1 < newValue1) {
            // console.log("scrolling page Up", newValue1, WIH * 4);
            if (newValue1 > WIH / 2) {
                $('.go-up').show();
            }
            if (newValue1 >= WIH * 3.5) {
                $('.go-down').hide();
            }
        } else {
            if (newValue1 < 2) {
                $('.go-up').hide();
            }
            if (newValue1 < WIH * 4) {
                $('.go-down').show();
            }
            // console.log("scrolling page Down", newValue1);
        }
        oldValue1 = newValue1;
    });

    var sec_elm = $('section')
    let anyActive = false;

    function setScroll(dir) {
        if (dir == "up") {
            window.scrollTo({ top: window.pageYOffset - WIH, behavior: 'smooth' });
            // var prev_id = $(document).find('section.active').prev().attr("id");
            // win_controller.scrollTo(prev_id);
        } else {
            window.scrollTo({ top: window.pageYOffset + WIH, behavior: 'smooth' });
            // var next_id = $(document).find('section.active').next().attr("id");
            // win_controller.scrollTo(next_id);
        }
    }

    $('.go-down').on("click", function() {
        dir = "down";
        setScroll(dir);
    })

    $('.go-up').on("click", function() {
        dir = "up";
        setScroll(dir)
    })

});

function orientationChange() {
    if (window.addEventListener) {
        window.addEventListener("orientationchange", function() {
            location.reload();
        });
    }
}

function windowResize() {}