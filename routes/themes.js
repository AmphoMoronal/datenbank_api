const express = require('express');
const router = express.Router();
const themes = require('../services/themes');

// GET themes
router.get('/', async function(req, res, next) {
  try {
    res.json(await themes.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting themes `, err.message);
    next(err);
  }
});

// GET one theme
router.get('/:id', async function (req, res, next) {
  try {
    res.json(await themes.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting themes `, err.message);
    next(err);
  }
});

// POST themes
router.post('/', async function(req, res, next) {
  try {
    res.json(await themes.create(req.body));
  } catch (err) {
    console.error(`Error while creating theme`, err.message);
    next(err);
  }
});

// DELETE theme
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await themes.remove(req.params.id));
  } catch (err) {
    console.error(`Error while trying to delete theme`, err.message);
    next(err);
  }
});

module.exports = router;