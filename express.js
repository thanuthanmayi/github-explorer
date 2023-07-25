const express = require('express');
const github = require('./github');

const router = express.Router();

// Route to get popular repositories
router.get('/github', async (req, res) => {
  const popularRepos = await github.getPopularRepos();
  res.json(popularRepos);
});

// Route to search repositories
router.get('/github/search/:searchTerm', async (req, res) => {
  const { searchTerm } = req.params;
  const searchResults = await github.searchRepos(searchTerm);
  res.json(searchResults);
});

module.exports = router;
