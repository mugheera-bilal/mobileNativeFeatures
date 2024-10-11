interface Places {
  title?: string;
  imageUri?: string;
  address?: string;
  location?: {
    lat: number;
    lng: number;
  };
  id: number;
}

class Place implements Places {
  id: number;
  title?: string;
  imageUri?: string;
  address?: string;
  location?: {
    lat: number;
    lng: number;
  };

  constructor(  
    title: string,
    imageUri: string,
    location: {address: string; lat: number; lng: number},
    id: number,
  ) {
    (this.title = title),
      (this.imageUri = imageUri),
      (this.address = location.address),
      (this.location = {lat: location.lat, lng: location.lng}),
      (this.id = id);
  }
}

export default Place;
