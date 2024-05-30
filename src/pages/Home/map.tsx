import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript, InfoWindow } from "@react-google-maps/api";

const Map: React.FC<any> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const defaultCenter = {
    lat: 12.9807826821739,
    lng: 77.75039938032054,
  };

  const updateMapStyles = () => {
    if (window.innerWidth <= 768) {
      return {
        height: "400px",
        width: "100%",
      };
    } else {
      return {
        height: "400px",
        width: "90%",
        marginLeft: "20px",
      };
    }
  };

  const [responsiveMapStyles, setResponsiveMapStyles] = useState(updateMapStyles());

  window.addEventListener("resize", () => {
    setResponsiveMapStyles(updateMapStyles());
  });

  return (
    <div className="flex justify-center items-center">
      <LoadScript googleMapsApiKey="AIzaSyAtwgosa1MGC_H8iCLOgdymeUPdXSZrxb4">
        <GoogleMap mapContainerStyle={responsiveMapStyles} zoom={2} center={defaultCenter}>
          {locations?.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedLocation(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div>
                <h2>{selectedLocation.name}</h2>
                <p>{`Latitude: ${selectedLocation.lat}, Longitude: ${selectedLocation.lng}`}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
