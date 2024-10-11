import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import PlaceItem from '../placeItem';
import { useNavigation } from '@react-navigation/native';




const PlacesList: FC<IPlace> = ({places}) => {

 const navigation : any = useNavigation()

 function selectPlaceHandler (id) {
  navigation.navigate('PlaceDetails', {
    placeId : id
  })
 }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackTextStyle}>No places added yet - start adding some</Text>
      </View>
    );
  }

  return (
    <FlatList
    style={styles.list}
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} onSelect={selectPlaceHandler} />}
    />
  );
};

export default PlacesList;
