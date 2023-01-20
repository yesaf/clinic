import { memo, useState } from 'react';
import { ClinicData } from '../../../../api/clinicsTypes';
import About from './components/about/About';
import Location from './components/location/Location';
import './Details.css';

interface IProps {
    clinic: ClinicData;
}

function Details({ clinic }: IProps) {
    const [screen, setScreen] = useState<'location' | 'about'>('location');
    return (
        <div className="details">
            <div className="screen-select">
                <button className={`screen-select__button ${screen === 'location' ? 'active-screen' : ''}`}
                        onClick={() => setScreen('location')}>
                    Location
                </button>
                <button className={`screen-select__button ${screen === 'about' ? 'active-screen' : ''}`}
                        onClick={() => setScreen('about')}>
                    About
                </button>
            </div>
            <div className="details-content">
                {
                    screen === 'about' &&
                        <About clinic={clinic}/>
                }
                {
                    screen === 'location' &&
                        <Location searchValue={clinic.fullAddress}/>
                }
            </div>

        </div>
    );
}

export default memo(Details);
