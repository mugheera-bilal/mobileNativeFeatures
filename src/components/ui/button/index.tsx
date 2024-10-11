import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';

const Button: FC<IPlace> = ({children, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
