module.exports = knex => {
  return () => {
    return knex('shops')
      .innerJoin('geocode', 'shops.id', 'geocode.id')
      .select(
        'shops.id as id',
        'shops.name as shopname',
        'shops.street as street',
        'shops.floor as floor',
        'shops.postalCode as postalCode',
        'shops.phone as phone',
        'shops.closeTime as closeTime',
        'shops.driveThruCloseTime as driveThruCloseTime',
        'geocode.position as geocode'
      )
      .catch(err => console.log(err));
  }
};