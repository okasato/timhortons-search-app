const router = require('express').Router();
const OK = 200;
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

module.exports = (db) => {
  router.get('/locations', (req, res) => {
    return db.locations.list()
      .then(locations => {
        send(res, OK, locations, false);
      });
  });
  
  router.get('/shops', (req, res) => {
    return db.shops.list()
      .then(shops => {
        send(res, OK, shops, false);
      });
  });

  router.get('/geocode', (req, res) => {
    return db.geocode.list()
      .then(geocode => {
        send(res, OK, geocode, false);
      });
  });

  return router;
};