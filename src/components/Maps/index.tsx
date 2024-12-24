"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Loading from "../Loading";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const centre = {
  lat: 37.437041393899676,
  lng: -4.191635586788259,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      loadingElement={<Loading className="mt-3" />}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapContainerClassName="map-container"
        center={centre}
        zoom={10}
      >
        <Marker position={centre} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
