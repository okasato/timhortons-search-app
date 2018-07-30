module.exports = knex => {
  return () => {
    return knex.select()
      .from('geocode')
      .catch(err => console.log(err));
  }
};