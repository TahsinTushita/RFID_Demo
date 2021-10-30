const { OngoingToShop, OngoingToShopUpdate } = require("./model");

exports.getAll = (req, res) => {
  OngoingToShop.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving the list.",
      });
    } else {
      res.send(data);
    }
  });
};

exports.bulkCreate = (req, res) => {
  const values = req.body;

  OngoingToShop.bulkCreate(values, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while registering the Tags.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  OngoingToShop.delete(req.params.tid, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the tag.",
      });
    else res.send({ message: "tag deleted ", data });
  });
};

exports.update = (req, res) => {
  // Validate Request

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const data = new OngoingToShopUpdate({
    shop: req.body.shop,
    tid: req.body.tid,
  });

  OngoingToShopUpdate.updateShop(
    { shop: req.body.shop, tid: req.body.tid },
    (err, data) => {
      if (err) {
        return res.status(422).send(err);

        if (err.kind === "not_found") {
          res.status(404).send({
            // message: `Not found tid with id ${data.tid}.`,
          });
        } else {
          res.status(500).send({
            // message: "Error updating shop with id " + data.tid,
          });
        }
      } else res.send(data);
    }
  );
};
