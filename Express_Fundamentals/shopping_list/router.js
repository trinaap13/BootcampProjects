const express = require('express');
const router = new express.Router();
const items = require('./fakeDb')

// Render list of shopping items
router.get("/", function(req, res) {
    return res.json({ items })
});

// accept JSON data and add to shopping list
router.post("/", function(req, res, next) {
    try {
        if (!req.body.name) throw new ExpressError("Name of item is required", 400);
        const newItem = {
        name: req.body.name,
        price: req.body.price
        }
        items.push(newItem)
        return res.json({added: newItem})
    } catch (e) {
        return next(e);
    }
})
// retrieve an item from the DB
router.get("/:name", function (req, res) {
  const foundItem = items.find(item => item.name === req.params.name)
  if (foundItem === undefined) {
    throw { message: "Not Found", status: 404 }
  }
  res.json({ item: foundItem })
})
// Delete and item from the DB
router.delete("/:name", function (req, res) {
  const foundItem = items.findIndex(item => item.name === req.params.name)
  if (foundItem === -1) {
    throw { message: "Not Found", status: 404 }
  }
  items.splice(foundItem, 1)
  res.json({ message: "Deleted" })
})

module.exports = router;