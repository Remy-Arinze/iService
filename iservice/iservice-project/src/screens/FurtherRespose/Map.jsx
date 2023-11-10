import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { FaLocationArrow } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {

    const [state, setState] = useState({
        lat: '',
        lon: '',
    })




    const defaultProps = {
        center: {
            lat: 5.028730,
            lng: 7.927710
        },
        zoom: 15
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setState(state.lat = position.coords.latitude, state.lon = position.coords.longitude);
            console.log("Latitude is :", state.lon);
            console.log("Longitude is :", state.lat);
        });
    }, [])

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={5.028730}
                    lng={7.927710}
                    text={<FaLocationArrow color="red" />}

                />
            </GoogleMapReact>
        </div>
    );
}