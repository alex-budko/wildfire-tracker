import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

//location marker places a red-fire marker onto the googlereactmap
const LocationMarker = ({lat, lng, onClick}) => {
  return (
    <div className='location-marker' onClick={onClick}>
        <Icon icon = {locationIcon} className="location-icon" />
    </div>
  )
}

export default LocationMarker