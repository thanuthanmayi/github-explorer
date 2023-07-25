const axios = require('axios');

// Replace 'YOUR_GITHUB_API_TOKEN' with your actual GitHub API token (if needed)
const API_URL = 'https://api.github.com';
const headers = {
  Authorization: `Bearer YOUR_GITHUB_API_TOKEN`,
};

// Function to get popular repositories
async function getPopularRepos() {
  try {
    const response = await axios.get(`${API_URL}/search/repositories?q=stars:>1000&sort=stars&order=desc`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular repositories:', error);
    return [];
  }
}

// Function to search repositories by name
async function searchRepos(searchTerm) {
  try {
    const response = await axios.get(`${API_URL}/search/repositories?q=${searchTerm}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error('Error searching repositories:', error);
    return [];
  }
}

module.exports = {
  getPopularRepos,
  searchRepos,
};
