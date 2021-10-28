// const sql = require("../index");
const mysqlClient = require("mysql");
// const dotenv = require("dotenv");
// dotenv.config();

// Create a connection to the database
const connection = mysqlClient.createConnection({
  host: "localhost",
  user: "admin",
  password: "adminA1@",
  database: "rfid_demo",
  port: "3306",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// module.exports = connection;

const DC_inventory = function (dc_inventory) {
  this.style = dc_inventory.style;
  this.stock = dc_inventory.stock;
  this.tid_stock = dc_inventory.tid_stock;
};

const DC_tags = function (dc_tags) {
  this.tid = dc_tags.tid;
  this.style = dc_tags.style;
};

DC_inventory.getAll = (result) => {
  connection.query("SELECT * FROM dc_inventory", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("dc_inventory: ", res);
    result(null, res);
  });
};

DC_inventory.create = (data, result) => {
  connection.query("INSERT INTO dc_inventory SET ?", data, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log({ id: res.insertId, ...data });
    result(null, { id: res.insertId, ...data });
  });
};

DC_tags.bulkCreate = (values, result) => {
  connection.query(
    "INSERT INTO dc_tags (id, tid, style) VALUES ?",
    [values],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log({ id: res.insertId, ...values });
      result(null, { id: res.insertId, ...values });
    }
  );
};

DC_inventory.delete = (style, result) => {
  connection.query(
    "DELETE FROM dc_inventory WHERE style = ?",
    style,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // style not found
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted style: ", style);
      result(null, res);
    }
  );
};

DC_tags.getAll = (result) => {
  connection.query("SELECT * FROM dc_tags", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("dc_tags: ", res);
    result(null, res);
  });
};

DC_tags.create = (data, result) => {
  connection.query("INSERT INTO dc_tags SET ?", data, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log({ id: res.insertId, ...data });
    result(null, { id: res.insertId, ...data });
  });
};

DC_tags.delete = (tid, result) => {
  connection.query("DELETE FROM dc_tags WHERE tid = ?", tid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // tid not found
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tid: ", tid);
    result(null, res);
  });
};

module.exports = {
  DC_inventory,
  DC_tags,
};
