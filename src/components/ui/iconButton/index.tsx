import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton: FC<IPlace> = ({name, color, size, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
