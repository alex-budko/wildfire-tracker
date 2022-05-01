import GoogleMapReact from 'google-map-react';
import React from 'react';
import LocationMarker from './LocationMarker'

//const MY_KEY = process.env.REACT_APP_API_KEY;
const Map = ({eventData, center, zoom}) => {
  return (
    <div className="map">
        <GoogleMapReact
            //imported googlemapreact in order to place markers
            bootstrapURLKeys={{
              key: 'AIzaSyDgK_ZTVZywZXSUvtPiPQjz5Wr7ORdiTHU', 
              language: 'en'
           }}
            defaultCenter={center}
            defaultZoom={zoom}
        >
          <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}

export default Map