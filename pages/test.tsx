import React from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div suppressHydrationWarning>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table suppressHydrationWarning>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td suppressHydrationWarning>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td suppressHydrationWarning>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td suppressHydrationWarning>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data </div>
    );
};

export default Demo;