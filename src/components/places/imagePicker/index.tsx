import {FC, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import {PermissionsAndroid} from 'react-native';
import {CameraOptions, ImagePickerResponse, launchCamera} from 'react-native-image-picker';
import OutlineButton from '../../ui/outlineButton';

const ImagePicker: FC<IPlace> = ({onTakeImage}) => {

  const [pickedImage, setPickedImage] = useState<string>()


  async function takeImageHandler() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        const options: CameraOptions = {
          mediaType: 'photo',
          quality: 0.8,
          includeBase64: false,
        };
        const image : ImagePickerResponse = await launchCamera(options);
        const pickedImageUri = image.assets[0].uri; // 'image.assets' is possibly 'undefined'
        setPickedImage(pickedImageUri)
        onTakeImage(pickedImageUri)
        // console.log('image result', image);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  let imagePreview = <Text>No Image Taken yet</Text>

  if (pickedImage) {
    imagePreview =  <Image style={styles.image} source={{uri : pickedImage}} />
  }

  return (
    <View>
      <View style={styles.imageContainer}>{imagePreview}</View>
      <OutlineButton icon= 'camera' onPress={takeImageHandler} >Take Image</OutlineButton>
    </View>
  );
};

export default ImagePicker;
