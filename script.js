document.getElementById("searchButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    searchDictionary(searchTerm);
});

function searchDictionary(term) {
    // Here you would fetch the definition of the term from an API
    // For simplicity, let's just log the term to the console
    console.log("You searched for: " + term);
}

