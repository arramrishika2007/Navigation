// const mysql = require('mysql');
// const express = require("express");
// const c = require("cors");
// const bodyp = require('body-parser');

// const app = express();
// app.use(c());
// app.use(bodyp.json());

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: "Project"
// });

// app.post("/submit", (req, res) => {
//   const data = req.body;
  
//   const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: "Project"
//   });

//   const sql = `INSERT INTO user (Name, Email, Password) VALUES (?, ?, ?)`;
//   conn.query(sql,(err, result) => {
//     if (err) {
//       console.log("Failed to execute:", err);
//       return;
//     }

//     console.log("Signup successful");
//     res.send("User registered successfully");
//   });
// });

// app.post("/save", (req, res) => {
//   const data = req.body;
//   const sql = `SELECT * FROM user WHERE Email = '${data.Name}' AND Password = '${data.Password}'`;

//   conn.query(sql, [data.Name, data.Password], (err, results) => {
//     if (err) {
//       console.log(err);
//     }
//    res.send("Login Successful");
//   });
// });

// app.listen(4000, () => {
//   console.log("plz open http://localhost:4000/");
// });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "Project"
});

app.post("/save", (req, res) => {
  const data = req.body;
  const sql = "SELECT * FROM user WHERE Email = ? AND Password = ?";

  conn.query(sql, [data.Email, data.Password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false });
    }

    if (results.length > 0) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
