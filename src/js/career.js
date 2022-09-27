var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import csvDATA from '../data/csvjsonJobs.json';
// import csv from 'csvtojson';
// import csvFilePath from '../data/Jobs.csv';

$(function() {
    let html;
    $.each(csvDATA, function(key, value) {
        html = `<div class="job-card ">
            <div class="title"> <h3>${value.Title}</h3> </div>
            <div class="location"><small>${value.Location.formatted}</small>
            <small>Positions - ${value.Positions} </small></div>
            <div class="cta"><a class="btn btn-primary" href="./job.html?job=${value.Title}">View</a></div>
        </div>`;
        $("#job-cards").append(html);
    })
});