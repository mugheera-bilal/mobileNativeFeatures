const GOOGLE_API_KEY = 'AIzaSyBn7ImIYdB5R1LV926HnZolwyxfd6datrM';

export function getMapPreview(lat: number, lng: number) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x400&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(imagePreviewUrl);

  return imagePreviewUrl;
}

export async function getAddress ( lat: number, lng: number) {
    
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
  const response =await fetch(url) 
  // console.log('url checker -- >>> ' + url);

    if ( !response.ok) {
        throw new Error('Failed to fetch address')
    }

    const data = await response.json()
    // console.log(data);
    const address = data.results[0].formatted_address
    // console.log(address);
    return address

}
