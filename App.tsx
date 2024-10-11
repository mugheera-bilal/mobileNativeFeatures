import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlaces from './src/screens/allPlaces';
import AddPlace from './src/screens/addPlace';
import IconButton from './src/components/ui/iconButton';
import {Theme} from './constants/theme';
import Map from './src/screens/map';
import {init} from './src/components/util/database';
import LoadingOverlay from './src/components/ui/loadingOverlay';
import PlaceDetails from './src/screens/placeDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {

    init()
      .then(() => {
        setDbInitialized(true);
        console.log('Database initialized:', dbInitialized);
        
      })
      .catch(err => {
        console.log('Database initialization failed:', err);
      });
  }, []);

  if (!dbInitialized) {
    return <LoadingOverlay message="please wait" />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Theme.primary500},
            headerTintColor: Theme.gray700,
            contentStyle: {backgroundColor: Theme.gray700},
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your Favorites Places',

              headerRight: ({tintColor}) => {
                return (
                  <IconButton
                    name="add"
                    color={tintColor}
                    size={24}
                    onPress={() => navigation.navigate('Addplace')}
                  />
                );
              },
            })}
          />
          <Stack.Screen
            name="Addplace"
            component={AddPlace}
            options={{
              title: 'Add a new place',
            }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{
              title: 'Loading Screen ...',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
