window.addEventListener('load', function () {

  // Loop through each journal entry and print its contents
    data.journals.forEach(function(journal, index) {
        var journalEntry = document.createElement("li");
        journalEntry.className = "timeline-item mb-3 text-muted";
        inner_text = "<div>" + journal.authors 
        inner_text += ", <i>\""+ journal.title + "\"</i>, "; 
        inner_text += journal.journal_or_conf + " ,"
        inner_text += journal.rest_part;

        if (journal.paper_link && journal.paper_link != '') {
            inner_text = inner_text + "<a class=\"text-info\" href="+journal.paper_link+">[paper_link]</a>";
        }
        
        if (journal.googl_scholar  && journal.googl_scholar != '') {
            inner_text += "<a class=\"text-info\" href="+journal.googl_scholar+"> [Google Scholar]</a>";
        }
        
        if (journal.source_code && journal.source_code != '') {
            inner_text = inner_text + "<a class=\"text-info\" href="+journal.source_code+">[paper_link]</a>";
        }

        inner_text = inner_text + "</div>";

        journalEntry.innerHTML = inner_text;
        document.getElementById("journal-list").appendChild(journalEntry);

    });

});
