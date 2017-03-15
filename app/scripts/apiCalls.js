var localIp = '192.168.1.94';

// Get restrooms
// Sample server response
// var RESPONSE = [
//   {
//     street: 'Granville',
//     city: 'Vancouver',
//     province: 'BC',
//     country: 'Canada',
//     comments: ['What a relief!', 'Kinda crappy!'],
//     upvotes: 5,
//     downvotes: 6,
//     latitude: LATITUDE,
//     longitude: LONGITUDE,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
//   {
//     street: 'Burrard',
//     city: 'Vancouver',
//     province: 'BC',
//     country: 'Canada',
//     comments: ['Got there just in time!', 'Smells fresh!'],
//     upvotes: 10,
//     downvotes: 2,
//     latitude: LATITUDE + 0.002,
//     longitude: LONGITUDE + 0.002,
//     created_at: new Date(),
//     updated_at: new Date(),
//   },
// ]
export function getRestrooms(comp) {
  return fetch('http://' + localIp + ':3000/api/getRestrooms')
    .then((response) => response.json())
    .then((responseJson) => {
      comp.setState({restrooms: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
}
