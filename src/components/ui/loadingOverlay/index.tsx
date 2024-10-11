import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './styles';
import { FC } from 'react';
import { IPlace } from '../../../../constants/interface';

const  LoadingOverlay : FC<IPlace> = ({ message }) =>  {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;