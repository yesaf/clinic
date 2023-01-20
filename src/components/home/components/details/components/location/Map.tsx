import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { memo, useEffect, useMemo, useState } from 'react';
import { getGeocode, getLatLng } from 'use-places-autocomplete';

interface IProps {
    searchValue: string;
}

function Map({ searchValue }: IProps) {

    const [coords, setCoords] = useState({ lat: -34.397, lng: 150.644 });

    useEffect(() => {
        getGeocode({address: searchValue}).then((results) => {
            setCoords(getLatLng(results[0]));
        });
    }, [searchValue]);

    const marker = useMemo(() => {
        return <MarkerF position={coords}/>;
    }, [coords]);

    return (
        <GoogleMap
            zoom={15}
            mapContainerClassName={'map'}
            center={coords}
        >
            {marker}
        </GoogleMap>
    );
}

export default Map;
