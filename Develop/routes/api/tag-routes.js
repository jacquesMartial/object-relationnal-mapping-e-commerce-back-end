const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findAll({
      include: {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"],
      },
    });
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find a single tag by its `id`
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"],
      },
    });
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    // create a new tag
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res
        .status(404)
        .json({ message: "There is no Product found with that ID." });
      return;
    }
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res
        .status(404)
        .json({ message: "There is no Product found with that ID." });
      return;
    }
    res.json(tagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
