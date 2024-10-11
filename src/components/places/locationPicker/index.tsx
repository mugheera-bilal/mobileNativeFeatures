import {FC, useEffect, useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {IPlace} from '../../../../constants/interface';
import OutlineButton from '../../ui/outlineButton';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';

import {getAddress, getMapPreview} from '../../util/location';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

const LocationPicker: FC<IPlace> = ({onPickLocation}) => {
  const [pickedLocation, setPickedLocation] = useState<{
    lat: number;
    lng: number;
  }>();

  const isFocused = useIsFocused();

  const navigation: any = useNavigation();
  const route: any = useRoute();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation: any = route.params && {
        lat: route.params.pickedLat,

        lng: route.params.pickedLng,
      };
      console.log(mapPickedLocation);

      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng,
        );
        // console.log('addresss -->>' + address);
        
        onPickLocation({...pickedLocation, address: address});
      }
    }
    handleLocation();
  }, [pickedLocation, onPickLocation]);

   function getLocationHandler() {
    Geolocation.getCurrentPosition(  (position) => {
      const {latitude, longitude} = position.coords;
      setPickedLocation({lat: latitude, lng: longitude}); 
      console.log('latitude => ', latitude);
      console.log('longitude => ', longitude);
      console.log("position ==> " , position); // why it is console undefined i needed the value of this
      
    }, (error) => {
      Alert.alert('Error', 'Could not fetch location. Please try again later.')
      console.log(error);
    },
    {enableHighAccuracy: false, timeout: 60000, maximumAge: 10000}

    );
  }

  function PickOnMapHandler() {
    navigation.navigate('Map');
  }

  let locationPreview = <Text>No location picked yet</Text>;

  if (pickedLocation) {
    locationPreview = (
      <MapView
      style={styles.image}
      initialRegion={{
        latitude: pickedLocation.lat,
        longitude: pickedLocation.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {pickedLocation && (
        <Marker
          title="picked location "
          coordinate={{
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lng,
          }}
        />
      )}
    </MapView>
   
    );
  }

  return (
    <View>
      <View style={styles.mapContainer}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon="map" onPress={PickOnMapHandler}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;
