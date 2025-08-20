// Google Search
function searchHezily() {
  const q = document.getElementById("q").value.trim();
  if (!q) {
    window.location.href = "https://www.google.com/";
    return;
  }
  const url = "https://www.google.com/search?q=" + encodeURIComponent(q);
  window.location.href = url;
}

// Chalo, Let’s Go
function ChaloLetsGo() {
  const q = document.getElementById("q").value.trim();
  if (!q) {
    window.location.href = "https://www.google.com/doodles";
    return;
  }
  const url = "https://www.google.com/search?btnI=I&q=" + encodeURIComponent(q);
  window.location.href = url;
}

// Handle form submission
function doSearch(e) {
  e.preventDefault();
  searchHezily();
}

// Bind Events
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchForm").addEventListener("submit", doSearch);
  document
    .getElementById("googleSearchBtn")
    .addEventListener("click", searchHezily);
  document.getElementById("luckyBtn").addEventListener("click", ChaloLetsGo);

  // Focus search input when page loads
  document.getElementById("q").focus();
});
