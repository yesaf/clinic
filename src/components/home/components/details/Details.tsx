import { memo, useMemo, useState } from 'react';
import { ClinicData } from '../../../../api/types/responses';
import About from './components/about/About';
import Location from './components/location/Location';
import './Details.css';

interface IProps {
    clinic: ClinicData;
}

function Details({ clinic }: IProps) {
    const [screen, setScreen] = useState<'location' | 'about'>('location');
    const buttons = useMemo(() => {
        return (
            <>
                <button className={`screen-select__button ${screen === 'location' ? 'active-screen' : ''}`}
                        onClick={() => setScreen('location')}>
                    Location
                </button>
                <button className={`screen-select__button ${screen === 'about' ? 'active-screen' : ''}`}
                        onClick={() => setScreen('about')}>
                    About
                </button>
            </>
        )
    }, []);

    return (
        <div className="details">
            <div className="screen-select">
                {buttons}
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
