import {FC, useCallback, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import ImagePicker from '../imagePicker';
import LocationPicker from '../locationPicker';
import Button from '../../ui/button';
import Place from '../../models/place';

const PlaceForm: FC<IPlace> = ({onCreatePlace}) => {
  const [enteredTitle, setEnteredTitle] = useState<string>('');

  const [selectedImage, setSelectedImage] = useState<any>();
  const [pickedLocation, setPickedLocation] = useState<any>();

  function changeTitleHandler(enteredText: string) {
    setEnteredTitle(enteredText);
  }

  function imageTakenHandler(imageUri: string) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler =(location: string) => {
    setPickedLocation(location);
  }

  function savePlaceHandler() {
    const placeData = new Place(
      enteredTitle,
      selectedImage,
      pickedLocation,
      // { lat: pickedLocation.lat, lng: pickedLocation.lng }   
    );
    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={imageTakenHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;
