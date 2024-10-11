import {FC, useCallback, useLayoutEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {IPlace} from '../../../constants/interface';
import {styles} from './styles';
import MapView, {Marker} from 'react-native-maps';
import IconButton from '../../components/ui/iconButton';

const Map: FC<IPlace> = ({navigation, route}) => {
  const initalLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };
  const [selectedLocation, setSelectedLocation] = useState<any>(initalLocation);


  function selectLocationHandler(event: any) {
    if (initalLocation) {
      return
    }
    const lat: number = event.nativeEvent.coordinate.latitude;
    // console.log(lat);

    const lng: number = event.nativeEvent.coordinate.longitude;
    // console.log(lng);
    setSelectedLocation({lat: lat, lng: lng});
    // console.log('selected location in fun ' + selectedLocation);
  }

  const savePickedLocationHandler = () => {
    if (!selectedLocation) {
      console.log(selectedLocation);

      Alert.alert('No Location Picked', 'You have to Pick a Location First');
      return;
    }

    navigation.navigate('Addplace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  };

  useLayoutEffect(() => {
    if (initalLocation) {
      return
    }
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="save"
            size={24}
            color={'black'}
            onPress={savePickedLocationHandler}
          />
        );
      },
    });
  }, [navigation, savePickedLocationHandler, initalLocation]);

  return (
    <MapView
      style={styles.map}
      onPress={selectLocationHandler}
      initialRegion={{
        latitude: initalLocation ? initalLocation.lat : 24.8607,
        longitude: initalLocation ? initalLocation.lng : 67.0011,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {selectedLocation && (
        <Marker
          title="picked location "
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
