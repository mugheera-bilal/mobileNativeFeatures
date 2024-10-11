import {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {CPlace, IPlace} from '../../../constants/interface';
import {styles} from './styles';
import PlacesList from '../../components/places/placesList';
import {useIsFocused} from '@react-navigation/native';
import {fetchPlaces} from '../../components/util/database';

const AllPlaces: FC<IPlace> = ({}) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces(); 
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();

      // if (route.params && route.params.place) {
      //   setLoadedPlaces(currPlaces => [...currPlaces, route.params.place]);
      // }
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
