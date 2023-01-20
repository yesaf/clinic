import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';

import './Location.css';

const apiKey = "AIzaSyBlL6wqw3iaSnHz4gXv-rFwRWL1zTfL4rU"


const libraries: ["places"] = ["places"];

interface IProps {
    searchValue: string;
}

function Location({ searchValue }: IProps) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: libraries,
    });

    return (
        <div className="location">
            {
                isLoaded ?
                    <Map searchValue={searchValue}/> :
                    <p className="map-loading">Loading...</p>
            }
        </div>
    );
}

export default Location;
