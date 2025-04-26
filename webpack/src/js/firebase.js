import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, Flip } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

import { getAuth } from "firebase/auth";
import validate from 'jquery-validation';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIvSjWpQZKyZJiLUpieTdgvRMpXU3FMlc",
    authDomain: "vcwproj.firebaseapp.com",
    databaseURL: "https://vcwproj.firebaseio.com",
    projectId: "vcwproj",
    storageBucket: "vcwproj.appspot.com",
    messagingSenderId: "392591244101",
    appId: "1:392591244101:web:b58ec57787bd88b569dc2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// firebase.firestore().enablePersistence()

document.getElementById('name');

const username = document.getElementById('name');
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const loginDIV = document.getElementById("login");
const registerDIV = document.getElementById("register");

// LOGIN FIELS
const l_name = document.getElementById("l_name");
const l_email = document.getElementById("l_email");
const l_mobile = document.getElementById("l_mobile");
const l_password = document.getElementById("l_password");
let currentUser = null;
let isLoggedIn = false;
$('.logout-btn').hide();

const dbRef = ref(db);

function register_user() {
    get(child(dbRef, "UserList/" + username.value))
        .then((snapshot => {
            if (snapshot.exists()) {
                alert("Account exist!")
            } else {
                set(ref(db, "UserList/" + username.value), {
                        username: username.value,
                        email: email.value,
                        mobile: mobile.value,
                        password: password.value,
                    })
                    .then(() => {
                        alert("User added")
                    })
                    .catch((error) => {
                        alert("error" + error);
                    })
            }
        }))
}

function getUsername() {
    let keepLoggedIn = localStorage.getItem('keepLoggedIn');
    if (keepLoggedIn == 'yes') {
        currentUser = JSON.parse(localStorage.getItem('user'));
    } else {
        currentUser = sessionStorage.getItem('user');
    }
}

const sidebar = document.querySelector(".login-rigester");
var tl_sidebar = gsap.timeline({ paused: true });
tl_sidebar.to(sidebar, {
    duration: 1,
    x: -300,
    ease: 'expo.inOut',
})

window.addEventListener('load', (event) => {
    getUsername();
    if (currentUser == null) {
        console.log("USER == NULL", currentUser);
        // $('.register').show();
        // $('.login').hide();
    } else {
        console.log("USER NOT NULL", );
        isLoggedIn = true;
        // $('.register').hide();
        // $('.logout-btn').show();
    }

    if (!isLoggedIn) {
        $('.login-btn').show();
        $('.logout-btn').hide();
        // $('.login').hide();
    } else {
        let user = JSON.parse(currentUser)
        $('.logout-btn').show();
        $('.login-btn').hide();
        $('.username').text("-" + user.username);

    }
});

function login(user) {
    console.log("USER", user);
    let keepLoggedIn = document.getElementById('customSwitch').ariaChecked;
    if (!keepLoggedIn) {
        console.log("SETTING ----------USER", user);
        sessionStorage.setItem('user', JSON.stringify(user));
    } else {
        localStorage.setItem('keepLoggedIn', 'yes')
        localStorage.setItem('user', user);
    }
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function logout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keepLoggedIn');
    setTimeout(() => {
        location.reload();
    }, 1000);
}

$('.logout-btn').on("click", function() {
    logout();
});
$('.login-btn').on("click", function() {
    tl_sidebar.play()
});

function login_user() {
    const dbRef2 = ref(db);
    get(child(dbRef2, "UserList/" + l_name.value))
        .then((snapshot => {
            if (snapshot.exists()) {
                let dbpass = snapshot.val().password;
                if (dbpass == l_password.value) {
                    login(snapshot.val())
                }
                console.log("User loged in!")
            } else {
                console.log("User not exist!")
            }
        }))
}

//Basic write operations
//  function writeUserData(userId, name, email, imageUrl) {
//      const db = getDatabase();
//      set(ref(db, 'users/' + userId), {
//          username: name,
//          email: email,
//          profile_picture: imageUrl
//      });
//  }

//  Read data
// import { getDatabase, ref, onValue} from "firebase/database";
//  const db = getDatabase();
//  const starCountRef = ref(db, 'posts/' + postId + '/starCount');
//  onValue(starCountRef, (snapshot) => {
//      const data = snapshot.val();
//      updateStarCount(postElement, data);
//  });

$(function() {
    $('#register-form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            mobile: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Please enter your Name",
            },
            email: {
                required: "Please enter your Email",
            },
            mobile: {
                required: "Please enter your mobile",
            },
            password: {
                required: "Please enter your password",
            },
        },
        submitHandler: function(form) {
            register_user()
                // if ($("input").first().val() === "correct2") {
                //     console.log('valid form submitted');
                //     document.cookie = "isValidated=true";
                //     var wlo = window.location.origin
                //     console.log('NEW LOCs', wlo + '/intro.html');
                //     window.location.href = wlo + '/intro.html';
                //     return false;
                // } else {
                //     console.log("FAIL");
                // }
        }
    })


    $('#login-form').validate({
        rules: {
            l_name: {
                required: true,
            },
            // l_email: {
            //     required: true,
            // },
            // l_mobile: {
            //     required: true,
            // },
            l_password: {
                required: true,
            }
        },
        messages: {
            l_name: {
                required: "Please enter your Email",
            },
            // l_email: {
            //     required: "Please enter your Email",
            // },
            // l_mobile: {
            //     required: "Please enter your mobile",
            // },
            l_password: {
                required: "Please enter your password",
            },
        },
        submitHandler: function(form) {
            login_user()
        }
    })
});