const API_URL = 'https://api.github.com/search/repositories?q=';
const popularList = document.getElementById('popularList');
const searchList = document.getElementById('searchList');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Function to fetch popular repositories
async function fetchPopularRepos() {
  try {
    const response = await fetch(`${API_URL}stars:>1000&sort=stars&order=desc`);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching popular repositories:', error);
    return [];
  }
}

// Function to display repositories in the DOM
function displayRepos(repos, listElement) {
  listElement.innerHTML = '';
  repos.forEach((repo) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.full_name}</a>: ${repo.description}`;
    listElement.appendChild(li);
  });
}

// Function to handle search button click
async function handleSearch() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    try {
      const response = await fetch(`${API_URL}${searchTerm}`);
      const data = await response.json();
      displayRepos(data.items, searchList);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }
}

// Event listener for search button click
searchButton.addEventListener('click', handleSearch);

// Initialize the page with popular repositories
fetchPopularRepos().then((repos) => displayRepos(repos, popularList));
