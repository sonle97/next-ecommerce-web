'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loading from '../Loading';
import config from '../../config';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.437041393899676,
  lng: -4.191635586788259,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={config.googleMapsApiKey}
      loadingElement={<Loading className="mt-3" />}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
