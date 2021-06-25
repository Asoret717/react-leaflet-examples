import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'react-leaflet-markercluster/dist/styles.min.css';

const center = [52.22977, 21.01178];

function getRandomLatLng() {
  return [-40 + 120 * Math.random(), -180 + 360 * Math.random()];
}

const MapWrapper = () => {
  return (
    <MapContainer
      preferCanvas={true}
      className="markercluster-map"
      center={center}
      zoom={2}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        spiderfyDistanceMultiplier={1}
        showCoverageOnHover={true}
      >

        {[...Array(60000)].map((_, i) =>
          <CircleMarker renderer={L.canvas({ padding: 0.5 })} key={i} center={getRandomLatLng()} />
        )}
      </MarkerClusterGroup>

    </MapContainer>
  )
}

export default MapWrapper;