import {FC} from 'react';
import {Text, View} from 'react-native';
import {IPlace} from '../../../constants/interface';
import {styles} from './styles';
import PlaceForm from '../../components/places/placeForm';
import {insertPlace} from '../../components/util/database';

const AddPlace: FC<IPlace> = ({navigation}) => {
  async function createPlaceHandler(place) {
    try {
      const insertion = await insertPlace(place);
      navigation.navigate('AllPlaces');
      console.log('insertion==>', (insertion));
      
    } catch (error) {
      console.log("Error", error);
      
    }
    
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
