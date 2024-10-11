import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import {Theme} from '../../../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OutlineButton: FC<IPlace> = ({onPress, icon, children}) => {
  return (
    <Pressable
      style={pressed => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons
        name={icon}
        color={Theme.primary500}
        size={18}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;
