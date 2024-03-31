// Function to fetch last commit date using GitHub API
function fetchLastCommitDate(username, repository) {
    return fetch(`https://api.github.com/repos/${username}/${repository}/commits/prod`)
        .then(response => response.json())
        .then(data => {
            const lastCommitDate = new Date(data.commit.author.date);
            const = updated_files = data.
            return lastCommitDate.toLocaleString();
        });
}

// Function to update the placeholder element with the last commit date
async function updateLastUpdated() {
    const username = 'baset-sarker';
    const repository = 'baset-sarker.github.io';
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const lastCommitDate = await fetchLastCommitDate(username, repository);
        lastUpdatedElement.textContent = `Last updated: ${lastCommitDate}`;
    }
}

function getCurrentFileName() {
    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);
    return fileName;
}


// Call the function to update last updated date when the page loads
updateLastUpdated();
