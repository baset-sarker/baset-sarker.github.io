window.addEventListener('load', function () {

    var awardEntry = document.createElement("div");
    inner_text = '';
  // Loop through each journal entry and print its contents
    data.awards.forEach(function(n, index) {
        
        awardEntry.className = "timeline-item mb-3";

        inner_text += '<div class="text-primary fw-bolder mb-2">'+n.year+'</div>';
        inner_text += '<ul>';
        n.events.forEach(function(evt, index) {
            inner_text += '<li>'+evt.title+'</li>'
        });
        inner_text += '</ul>';
        

    });
    awardEntry.innerHTML = inner_text;
    document.getElementById("awards-list").appendChild(awardEntry);

});
