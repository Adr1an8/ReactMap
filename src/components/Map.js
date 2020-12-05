import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height

const response = [{
    id: '1',
    coordinates: {
        latitude: -0.225219,
        longitude: -78.5248,
    },
    title: 'Quito',
    descripcion: 'Capital',
},
{
    id: '2',
    coordinates: {
        latitude: -2.90055,
        longitude: -79.00453,
    },
    title: 'Cuenca',
    descripcion: 'Austro'
},
{
    id: '3',
    coordinates: {
        latitude: 2.19616,
        longitude: -79.88621,
    },
    title: 'Guayaquil',
    descripcion: 'Puerto Principal'
}
]

const Map = () => {
    return (
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: -0.225219,
          longitude: -78.5248,
          latitudeDelta: 70,
          longitudeDelta: 1
        }}
      >
        {response.map(marker => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          >
          </MapView.Marker>
        ))}
      </MapView>
    )
  }
  
  const styles = StyleSheet.create({
    map: {
      height
    }
  })
  
  export default Map