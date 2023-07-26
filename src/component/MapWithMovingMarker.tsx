import { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';
// import { MapView } from '@aws-amplify/ui-react-geo';
// import { Avatar } from './ui/Avatar';

// import Map, { Popup, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapGL } from './MapGL';
import { MyPosition } from './ui/MyPosition';

export const MapWithMovingMarker = () => {
  // const [showPopup, setShowPopup] = useState<boolean>(true);
  const [{ latitude, longitude }, setMarkerLocation] = useState({
    latitude: 50.45,
    longitude: 30.5333,
  });

  const updateMarker = () =>
    setMarkerLocation({
      latitude: latitude - 0.005,
      longitude: longitude + 0.014,
    });

  const currentPos = MyPosition();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map Presentation</h1>
      <div style={{ textAlign: 'center' }}>
        <Button style={{ margin: '20px' }} onClick={updateMarker}>
          Move Marker
        </Button>
      </div>
      <MapGL
        initialViewState={{ zoom: 11, latitude: 50.45, longitude: 30.5333 }}
        markers={[
          { latitude, longitude, infoEl: <span>Kyiv</span> },
          {
            latitude: currentPos.latitude,
            longitude: currentPos.longitude,
            infoEl: <span>You are here</span>,
          },
        ]}
      />
    </div>
  );
};
