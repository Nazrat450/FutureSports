
//This script is not finished as this is a prototype website

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
    const searchTerm = searchInput.value;
    
    // Simulating search results (Fake)//
    const fakeSearchResults = [
        "Test 1: " + searchTerm,
        "Test 2: " + searchTerm,
        "Test3: " + searchTerm,
    ];

    displaySearchResults(fakeSearchResults); //to show where the search result will appear unsure how I want this to work in the finished product
}

function displaySearchResults(results) {
    searchResults.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = 'No results found.';
        return;
    }

    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        ul.appendChild(li);
    });

    searchResults.appendChild(ul);
}