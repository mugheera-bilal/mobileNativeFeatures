import {StyleSheet} from 'react-native';
import {Theme} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackTextStyle: {
    fontSize: 16,
    color: Theme.primary100,
  },
});
