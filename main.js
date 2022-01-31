//start page

import { newRow, debugKey, newNote, saveAll, onPageLoad, launchModal, mobileDropDown, saveTimer } from "./library.js";
import { loadFromDb } from "./db.js";
import { logout } from "./auth.js";

console.log(" manin .js tbg is starting the app...");

newRow();
onPageLoad();

//EVENT LISTENERS
    debugKey();

    // $("#new-note-button").click(function (e) {
    //     e.preventDefault();
    //     newNote();
    // });

    $("#save-button").click(function (e) {
        e.preventDefault();
        saveAll();
    });

    $("#load-button").click(function (e) {
        e.preventDefault();
        loadFromDb();
    });

    $("#mobile-menu").click(function (e) {
        mobileDropDown();
    });

    $(".note-textarea").change(function (e){
        e.preventDefault();
        console.log('keyup!');
    });

    //MODAL EVENT LISTENERS
        $("#sign-up h2, #mobile-sign-up").click(function (e) {
            launchModal("#sign-up-modal");
        })

        $("#log-in h2, #mobile-log-in").click(function (e) {
            console.log('log in!');
            launchModal("#log-in-modal");
        })

        $("#log-out h2, #mobile-log-out").click(function (e) {
            console.log('log out!');
            logout();
        })

        $("#user-info i").click(function (e) {
            console.log('user info!');
            launchModal("#user-info-modal");
        })