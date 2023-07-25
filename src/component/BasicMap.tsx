import { FC } from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react-geo/styles.css';
import { AwsAmplifyConfig } from '../config/aws-apmplify-config';

Amplify.configure(AwsAmplifyConfig);

const BasicMap: FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map Presentation</h1>
      <Map
        initialViewState={{
          longitude: 30.5333,
          latitude: 50.45,
          zoom: 14,
        }}
        style={{ marginInline: 'auto', width: '80%', height: '50vh' }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zfNoyld197Bj7dsKc5MR"
      />
    </div>
  );
};

export default BasicMap;
