//front-end
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
//back-end
import { useState } from 'react'
import getCenter from 'geolib/es/getCenter'

function Map ({ searchResults }) {
  const [selectedPlace, setSelectedPlace] = useState({})
  //transform searchResults to object longitude && latitude
  const coordinates = searchResults.map(res => ({
    longitude: res.long,
    latitude: res.lat
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/l0rdher0n/ckswhe4l73vl517pcwnxfq6si'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {searchResults.map(res => (
        <div key={res.long}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedPlace(res)}
              className='
                        cursor-pointer 
                        text-2xl
                        animate-bounce
                        '
              aria-label='push-pin'
            >
              🎈
            </p>
          </Marker>
          {/**Popup if Marker is clicked */}
          {selectedPlace.long == res.long ? (
            <Popup
              onClose={() => setSelectedPlace({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
