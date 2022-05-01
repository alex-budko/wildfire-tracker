import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'


//const MY_KEY = process.env.REACT_APP_API_KEY;
const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
      return 
      <LocationMarker 
        lat={ev.geometries[0].coordinates[1]} 
        lng={ev.geometries[0].coordinates[0]}
        onClick={()=>setLocationInfo({id: ev.id, title: ev.title})}
       />
    }
    return null
  })

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
          {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {lat: 40.73, lng: -73.93}, 
  zoom: 12
}

export default Map