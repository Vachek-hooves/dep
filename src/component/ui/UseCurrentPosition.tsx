import { useState, useEffect } from 'react';

export const UseCurrentPosition = () => {
    const [myPosition, setMyPosition] = useState({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((data) => {
            console.log(data)
            setMyPosition({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            });
        })
      }, []);

    return {
        latitude: myPosition.latitude,
        longitude: myPosition.longitude
    }
}