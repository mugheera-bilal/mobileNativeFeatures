import {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import { IPlace } from '../../../../constants/interface';

const PlaceItem: FC<IPlace> = ({place, onSelect}) => {
  return (
    <Pressable  style = {({pressed}) => [styles.item , pressed && styles.pressed]} onPress={onSelect.bind(this, place.id)}>

        <Image style={styles.image} source ={{uri : place.imageUri}} />
        <View style={styles.info}>
            <Text style={styles.title}>{place.title}</Text>
            <Text style={styles.address}>{place.address}</Text>
        </View>
    </Pressable>
  );
};

export default PlaceItem;
