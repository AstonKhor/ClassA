const db = require('../../database/index');
const SQL = require('@nearform/sql')

module.exports = {
  getClasses: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  },
  postClasses: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  },
  patchClasses: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  },
  getUser: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  },
  postUser: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  },
  patchUser: (req, res) => {
    //preven sql injections
    let cleanQuery = SQL`SELECT * FROM classes`;
    db.query(cleanQuery, (err, gyms) => {
      if (err) throw err;
      // res.header("Content-Encoding", "gzip");
      res.end(JSON.stringify(gyms));
    })
  }
}