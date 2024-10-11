import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import Place from '../models/place';
import {CPlace} from '../../../constants/interface';

enablePromise(true);

const connectDB = async () => {
  return openDatabase(
    {name: 'places.db'},
    () => {
      console.log('Connection success!');
    },
    error => {
      console.log('Error Connecting DB', error);
    },
  );
};

export async function init() {
  try {
    await connectDB().then(database => {
      database.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS places (
                      id INTEGER PRIMRARY KEY NOT NULL,
                      title  TEXT NOT NULL,
                      imageUri TEXT NOT NULL,
                      address TEXT NOT NULL,
                      lat REAL NOT NULL,
                      long REAL NOT NULL
                      )`,
        );
      });
    });
    console.log('Database initialized successfully');
  } catch (error) {
    console.log('Failed to initialize Database', error);
  }
}

export async function insertPlace(place) {
  const promise = new Promise(async (resolve, reject) => {
    try {
      await connectDB().then(database => {
        database.transaction(tx => {
          tx.executeSql(
            `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
            [
              place.title,
              place.imageUri,
              place.address,
              place.location.lat,
              place.location.lng,
            ],
            (_, result) => {
              console.log('result', result);

              resolve(result);
            },

            (_, error) => {
              reject(error);
            },
          );
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  });
  return promise;
}

export async function fetchPlaces() {
  const promise = new Promise(async (resolve, reject) => {
    await connectDB().then(database => {
      database.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM places',
          [],
          (_, result) => {
            let places = [];
            for (let i = 0; i < result.rows.length; i++) {
              const dp = result.rows.item(i);

              let p = new Place(
                dp.title,
                dp.imageUri,
                {
                  address: dp.address,
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.id,
              );
              places.push(p);
            }
            resolve(places);
          },
          (_, error) => {
            reject(error);
          },
        );
      });
    });
  });

  return promise;
}

export async function fetchPlaceDetails(id) {
  try {
    return new Promise(async (resolve, reject) => {
      await connectDB().then(database => {
        database.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM places WHERE id = ?',
            [id],
            (_, result) => {
              console.log('result row item', result.rows.item(0));
              const dbPlace = result.rows.item(0);
              const place = new Place( 
                dbPlace.title,
                dbPlace.imageUri,
                {lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address},
                dbPlace.id,
              );
              resolve(place);
            },
            (_, error) => {
              reject(error);
            },
          );
        });
      });
    });
  } catch (error) {
    console.log('details error', error);
  }
}
