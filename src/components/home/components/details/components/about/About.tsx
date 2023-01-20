import { ClinicData } from '../../../../../../api/clinicsTypes';

import './About.css';

interface IProps {
    clinic: ClinicData;
}

function About({ clinic }: IProps) {
    return (
        <div className="about">
            <p className="about__name">
                {clinic.clinicName}
            </p>
            <div className="about__contacts">
                <p className="about__contacts__item">
                    <span>{clinic.city}</span>
                    <span>{clinic.state}</span>
                </p>
                <p className="about__contacts__item">
                    <a href={clinic.website} target="_blank">{clinic.website}</a>
                </p>
            </div>
            <p className="about__text">
                {clinic.aboutClinic}
            </p>
        </div>
    );
}

export default About;
