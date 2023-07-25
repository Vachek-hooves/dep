import React from 'react';
import BasicMap from './component/BasicMap';
import { MapWithMovingMarker } from './component/MapWithMovingMarker';
import { AmplifyLayout } from './component/AmplifyLayout';

function App() {
  return (
    <div>
      <AmplifyLayout>
        {/* <BasicMap /> */}
        <MapWithMovingMarker />
      </AmplifyLayout>
    </div>
  );
}

export default App;
