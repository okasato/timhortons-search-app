export const geocode = place => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}Canada`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const result = data.results[0];
      const status = data.status;

      if (typeof result === 'undefined'){
        return { status }
      }
      const address = result.formatted_address;
      const location = result.geometry.location;
      return {
        status,
        address,
        location
      }
    })
};

export const getShopsInfo = place => {
  console,log('Hi');
  return fetch('https://localhost:1337/api/shops')
    .then(res => res.json())
    .then(shopsInfo => {
      console,log('Hi Hi');
      shopsInfo.map(shopInfo => {
        const splitInfo = shopInfo.street.split(' ');
        let streetName = splitInfo[1];
        splitInfo.forEach((element, id) => {
          if (id > 1) {
            streetName = streetName + ' ' +  element;
          }
        });

        console.log('streetName', streetName, 'place', place);
        if (streetName === place) {
          return shopInfo;
        }
      })
    })
    .then(shopInfo => {
      console.log('@@@@', shopInfo);
    })
};


