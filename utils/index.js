export const getShopInfo = () => {
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
}