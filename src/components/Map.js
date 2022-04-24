import GoogleMapReact from 'google-map-react'

const MY_KEY = process.env.REACT_APP_API_KEY;
const Map = ({center, zoom}) => {
  return (
    <div className='map'>
        <h1> MY_KEY </h1>
        <GoogleMapReact
            bootstrapURLKeys = {{key: MY_KEY}}
            defaultCenter = {center}
            defaultZoom = {zoom}
        >
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat:42.3265,
        lng:-122.8756
    }
}

export default Map