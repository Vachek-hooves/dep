import React from 'react';
import { Marker } from 'react-map-gl';
import Map from 'react-map-gl/maplibre';
import { Config } from '../../config';

import 'maplibre-gl/dist/maplibre-gl.css';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';

interface MapGLProps {
    className?: string;
    latitude: number;
    longitude: number;
}

export const MapGL = ({ className, latitude, longitude }: MapGLProps) => {
  return (
    <div className={className}>
      <Map
        initialViewState={{ zoom: 12, latitude: 50.45, longitude: 30.5333 }}
        style={{ marginInline: 'auto', width: '80%', height: '50vh' }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${Config.MAP_KEY}`}
      >
        <Marker latitude={latitude} longitude={longitude} />
      </Map>
    </div>
  );
}
