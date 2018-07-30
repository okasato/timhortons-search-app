const geocodeJSON = require('../seeds/geocode.json');
// const fetch = require('node-fetch');

exports.seed = (knex, Promise) => {
  // const geocode = [];
  // shopsJSON.forEach((shop, id) => {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${shop.postalCode}`)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       const result = data.results[0];
  //       const position = result.geometry.location;
  //       return {
  //         id,
  //         address,
  //         position
  //       }
  //     })
  //     .then(({ id, address, position }) => {
  //       geocode.push({ id, address, position });
  //     })
  // });

  return knex('geocode').del()
    .then(() => {
      return knex('geocode').insert(geocodeJSON);
    });
};