import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Button } from '@aws-amplify/ui-react';
// import { MapView } from '@aws-amplify/ui-react-geo';
import { Avatar } from './ui/Avatar';

import Map, { Popup, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
// import { MapGL } from './MapGL';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';

import { AwsAmplifyConfig } from '../config/aws-apmplify-config';
Amplify.configure(AwsAmplifyConfig);

export const MapWithMovingMarker = () => {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [{ latitude, longitude }, setMarkerLocation] = useState({
    latitude: 50.45,
    longitude: 30.5333,
  });

  const updateMarker = () =>
    setMarkerLocation({
      latitude: latitude - 0.005,
      longitude: longitude + 0.014,
    });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map Presentation</h1>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={updateMarker}>Move Marker</Button>
      </div>
      <Map
        initialViewState={{ zoom: 11, latitude: 50.45, longitude: 30.5333 }}
        style={{ marginInline: 'auto', width: '80%', height: '60vh' }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zfNoyld197Bj7dsKc5MR"
      >
        <Marker latitude={latitude} longitude={longitude} />
        {showPopup && (
          <Popup
            longitude={longitude}
            latitude={latitude}
            anchor="bottom-left"
            maxWidth="130px"
            onClose={() => setShowPopup(false)}
          >
            Kyiv city center
          </Popup>
        )}
        <Marker latitude={50.416874} longitude={30.633}>
          <Avatar  />
          <Popup
            longitude={30.633}
            latitude={50.416874}
            anchor="top-right"
            maxWidth="130px"
            onClose={() => setShowPopup(false)}
          >
            my current location
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}
