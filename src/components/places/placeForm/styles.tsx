import {StyleSheet} from 'react-native';
import {Theme} from '../../../../constants/theme';

export const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Theme.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Theme.primary700,
    borderBottomWidth: 2,
    backgroundColor: Theme.primary100,
  },
});
