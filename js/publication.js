function formatIEEE(entry) {
    var author = entry.entryTags.author || '';
    const title = entry.entryTags.title || '';
    var journal = entry.entryTags.journal || entry.entryTags.booktitle || '';
    const year = entry.entryTags.year || '';
    const volume = entry.entryTags.volume ? `vol. ${entry.entryTags.volume}, ` : '';
    const number = entry.entryTags.number ? `no. ${entry.entryTags.number}, ` : '';
    const pages = entry.entryTags.pages ? `pp. ${entry.entryTags.pages}, ` : '';
    const month = entry.entryTags.month ? entry.entryTags.month + ' ' : '';
    const doi = entry.entryTags.doi ? `doi: ${entry.entryTags.doi}` : '';
    const url = entry.entryTags.url ? `<a class=\"text-info text-decoration-none\" href="${entry.entryTags.url}">[Url]</a>` : '';
    const crossRef = entry.entryTags.cross_ref ? `<a class=\"text-info text-decoration-none\" href="${entry.entryTags.cross_ref}">[CrossRef]</a>` : '';
    const googleScholarLink = entry.entryTags.google_scholar ? `<a class=\"text-info text-decoration-none\" href="${entry.entryTags.google_scholar}">[Google Scholar]</a>` : '';
    const sourceCode = entry.entryTags.source_code ? `<a class=\"text-info text-decoration-none\" href="${entry.entryTags.source_code}">[Source Code]</a>` : '';

    
    console.log(entry.entryType.toLowerCase())
    if (' and ' in author)
        author = author.split(' and ')
        author = author.join(', ')

    journal = `<i>${journal}</i>`

    return `${author}, "${title}," ${journal}, ${volume}${number}${pages}${month}${year}. ${doi} ${url} ${crossRef} ${googleScholarLink} ${sourceCode}`;
}


function displayParsedEntries(entries) {
    const list = document.getElementById('journal-list');
    entries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.className = "timeline-item mb-3 text-muted";
        listItem.innerHTML = formatIEEE(entry); // Use innerHTML to include links
        list.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const parsedEntries = bibtexParse.toJSON(bibtexData);
    displayParsedEntries(parsedEntries);
});