import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%", // Vous pouvez ajuster la hauteur selon vos besoins
  };

  const center = {
    lat: 8.0657, // Latitude de Bondoukou
    lng: -3.0701, // Longitude de Bondoukou
  };

  const markerPosition = {
    lat: 8.0657, // Latitude de Bondoukou
    lng: -3.0701, // Longitude de Bondoukou
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBigX6X3AB9xj8nUdZaMM-_sGQorlJQu6k">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
