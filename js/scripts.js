/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function getCurrentFileName() {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    return fileName;
}


function last_updated(){
    current_file_name = getCurrentFileName();
    console.log("Current file name: ", current_file_name);
    const lastUpdatedElement = document.getElementById('lastUpdated');
    converted_date = formatDate(data[current_file_name]);
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `Last updated: ${converted_date}`;
    }
}


window.addEventListener('load', function () {
last_updated();



// Get the current year
var currentYear = new Date().getFullYear();
// Update the copyright year in the footer
document.getElementById("copyright-year").textContent = currentYear;

});