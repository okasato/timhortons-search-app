module.exports = knex => {
  return () => {
    return knex('shops')
      .innerJoin('locations', 'shops.location_id', 'locations.id')
      .select(
        'shops.id as id',
        'locations.name as locationname',
        'shops.name as shopname',
        'shops.street as street',
        'shops.floor as floor',
        'shops.postalCode as postalCode',
        'shops.phone as phone',
        'shops.closeTime as closeTime',
        'shops.driveThruCloseTime as driveThruCloseTime',
      )
      .catch(err => console.log(err));
  }
};