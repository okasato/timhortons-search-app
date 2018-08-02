export const getShopsInfoFromWebSite = () => {
  const shopInfo = document.getElementsByClassName('c-LocationGridList-item');
  
  return Array.from(shopInfo).map((element, id) => {
    const data = element.innerText.split(/\n/);
    if (data.length === 10) {
      return {
        id,
        name: data[0],
        closeTime: data[1],
        driveThruCloseTime: data[2],
        street: data[3],
        floor: data[4], 
        postalCode: data[5], 
        phone: data[6]
      }; 
    } else if (data.length === 9 && data[2].split(0, 10) === 'Drive-thru') {
      return {
        id,
        name: data[0],
        closeTime: data[1],
        driveThruCloseTime: data[2],
        street: data[3],
        floor: '', 
        postalCode: data[4], 
        phone: data[5]
      };
    } else if (data.length === 9 && data[2].split(0, 10) !== 'Drive-thru'){
      return {
        id,
        name: data[0],
        closeTime: data[1],
        driveThruCloseTime: '',
        street: data[2],
        floor: data[3], 
        postalCode: data[4], 
        phone: data[5]
      };
    } else {
      return {
        id,
        name: data[0],
        closeTime: data[1],
        driveThruCloseTime: '',
        street: data[2],
        floor: '', 
        postalCode: data[3], 
        phone: data[4]
      };
    }
  });
};

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