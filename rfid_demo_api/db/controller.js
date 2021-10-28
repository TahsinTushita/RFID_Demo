const { DC_inventory } = require("./model");

exports.getAll = (req, res) => {
  DC_inventory.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while retrieving the DC Inventory.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a style
  const dc_inventory = new DC_inventory({
    style: req.body.style,
    stock: req.body.stock,
    tid_stock: req.body.tid_stock,
  });

  // Save style in the database
  DC_inventory.create(dc_inventory, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Style.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  DC_inventory.delete(req.params.style, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the style.",
      });
    else res.send({ message: "style deleted ", data });
  });
};
