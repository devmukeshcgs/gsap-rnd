var _ = require('lodash');

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import csvDATA from '../data/csvjsonJobs.json';
// import csv from 'csvtojson';
// import csvFilePath from '../data/Jobs.csv';
function replaceKeys(object) {
    Object.keys(object).forEach(function(key) {
        var newKey = key.replace(/\s+/g, '');
        if (object[key] && typeof object[key] === 'object') {
            replaceKeys(object[key]);
        }
        if (key !== newKey) {
            object[newKey] = object[key];
            delete object[key];
        }
    });
}

$(function() {
    replaceKeys(csvDATA);
    let html;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let job = urlParams.get('job');
    console.log("JOB in URL---------------------", job);
    let JOB_TITLE = $("#jd-title ");
    let JOB_LOC = $(".job-location");
    let JOB_TYPE = $(".job-type");
    let JOB_POSITIONS = $(".job-positions");
    let JOB_DES = $(".job-description p");
    let JOB_ABOUT = $(".job-about");

    if (job != null) {
        console.log("JOB", job);
        var SINGLE_JOB = _.find(csvDATA, {
            Title: job
        });
        console.log("JOB", SINGLE_JOB.JobDescription);
        JOB_TITLE.text(SINGLE_JOB.Title);
        JOB_LOC.text(SINGLE_JOB.Location.formatted);
        JOB_TYPE.text(SINGLE_JOB.JobType);
        JOB_POSITIONS.text(SINGLE_JOB.Positions);
        JOB_DES.html(SINGLE_JOB.JobDescription)
            // JOB_DES.html(SINGLE_JOB.JobDescription)
    } else {
        // window.location.href = "./careers.html";
    }
});