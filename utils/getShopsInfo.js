export const getShopsInfo = place => {
  console,log('Hi');
  return fetch('http://localhost:1337/api/shops')
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


