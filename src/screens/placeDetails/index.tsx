import {FC, useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {IPlace} from '../../../constants/interface';
import {styles} from './styles';
import OutlineButton from '../../components/ui/outlineButton';
import {fetchPlaceDetails} from '../../components/util/database';
import LoadingOverlay from '../../components/ui/loadingOverlay';

const PlaceDetails: FC<IPlace> = ({route, navigation}) => {
  const [fetchedPlace, setFetchedPlace] = useState<any>();

  function showOnMapHandler() {
    navigation.navigate('Map', {
      initialLat : fetchedPlace.location.lat,
      initialLng : fetchedPlace.location.lng,
    })
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    }
    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return <LoadingOverlay message="fetching place details ..." />;
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: fetchedPlace.imageUri}} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlineButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
