import {ReactNode} from 'react';

export interface IPlace {
  places?: any;
  place?: any;
  onSelect?: any
  name?: any;
  color?: string;
  size?: number;
  onPress?: () => void;
  icon?: any;
  children?: ReactNode;
  message?: ReactNode;
  // launchCamera? : any
  navigation? : any
  route? : any
  onTakeImage? :any
  onPickLocation? : any
  onCreatePlace? : any
  
}

export interface CPlace {
  id: any;
  title: any;
  imageUri: any;
  address: any;
  location: {
    lat: any;
    lng: any;
  };
}
