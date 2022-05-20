var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import csvDATA from '../data/csvjsonJobs.json';
// import csv from 'csvtojson';
// import csvFilePath from '../data/Jobs.csv';

$(function() {
    let html;
    $.each(csvDATA, function(key, value) {
        console.log("KYE", key);
        console.log("VALUE", value);
        // html = `<div class="job-card">
        //     <div class="img">
        //         <img width="100" src="../images/career-bg.jpg" alt="">
        //     </div>
        //     <h3>${value.Title}</h3>
        //     <small>Mumbai</small>
        //     <p>Positions - 3 </p>
        //     <button class="btn btn-primary">Apply</button>
        // </div>`;
        html = `<div class="job-card ">
            <div class="title"><h3>${value.Title}</h3></div>
            <div class="location"><small>Mumbai</small></div>
            <div class="position"><p>Positions - 3 </p></div>
            <div class="cta"><button class="btn btn-primary">Apply</button></div>
        </div>`;
        $("#job-cards").append(html);
    })
});