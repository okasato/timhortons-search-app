module.exports = knex => {
  return () => {
    return knex.select()
      .from('locations')
      .catch(err => console.log(err));
  }
};