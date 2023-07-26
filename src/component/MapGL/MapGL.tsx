import React from 'react';
import Map, { Marker, Popup, MapProps } from 'react-map-gl/maplibre';
import { Config } from '../../config';

import 'maplibre-gl/dist/maplibre-gl.css';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';
interface MapGLProps {
  className?: string;
  initialViewState?: MapProps['initialViewState'];
  markers: { infoEl?: React.ReactNode; latitude: number; longitude: number }[];
}

export const MapGL = ({ className, initialViewState, markers }: MapGLProps) => {
  const markerNodes = markers.map((data, i) => (
    <>
      <Marker key={i} latitude={data.latitude} longitude={data.longitude} />
      {data.infoEl && (
        <Popup
          latitude={data.latitude}
          longitude={data.longitude}
          anchor="bottom-left"
        >
          {data.infoEl}
        </Popup>
      )}
    </>
  ));
  return (
    <div className={className}>
      <Map
        initialViewState={initialViewState}
        style={{ marginInline: 'auto', width: '80%', height: '50vh',border:'solid' }}
        // mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${Config.MAP_KEY}`}
        // mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${Config.MAP_KEY}`}
        mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${Config.MAP_KEY}`}
      >
        {markerNodes}
      </Map>
    </div>
  );
};
