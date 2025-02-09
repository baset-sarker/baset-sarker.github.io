window.addEventListener('load', function () {

  // Loop through each journal entry and print its contents
    data.news.forEach(function(n, index) {
        console.log(n.year);
        var newsEntry = document.createElement("li");
        newsEntry.className = "timeline-item mb-3 text-muted";

        inner_text = '<h5 class="fw-bold">'+n.year+'</h5>';
        n.events.forEach(function(evt, index) {
            inner_text += '<p class="text-muted mb-2 fw-bold">'+evt.month+'</p>'
            inner_text += '<p class="text-muted">'+evt.title+'</p>'
        });
        
        newsEntry.innerHTML = inner_text;
        document.getElementById("news-list").appendChild(newsEntry);

    });

});
