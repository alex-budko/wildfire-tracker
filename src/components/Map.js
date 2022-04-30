import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

//const MY_KEY = process.env.REACT_APP_API_KEY;
const Map = ({center, zoom}) => {
  return (
    <div className="map">
        <GoogleMapReact
            //imported googlemapreact in order to place markers
            bootstrapURLKeys = {{key: 'AIzaSyDgK_ZTVZywZXSUvtPiPQjz5Wr7ORdiTHU'}}
            defaultCenter = {center}
            defaultZoom = {zoom}
        >
          <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat:42.3265,
        lng:-122.8756
    },
    zoom: 6
}

export default Map