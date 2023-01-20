import { ClinicData } from '../../../../api/clinicsTypes';
import './SearchResults.css';
import { useMemo } from 'react';

interface IProps {
    results: Array<ClinicData>;
    chosen: ClinicData;
    onChosen: (result: ClinicData) => void;
}

const areEqual = (clinic1: ClinicData, clinic2: ClinicData) => {
    return clinic1.clinicName === clinic2.clinicName &&
        clinic1.fullAddress === clinic2.fullAddress;
}

function SearchResults({ results, chosen, onChosen }: IProps) {

    const resultsList = useMemo(() => results.map((result, index) => {

        return (
            <div key={index}
                 className={`result ${areEqual(result, chosen) ? 'chosen-clinic' : ''}`}
                 onClick={() => onChosen(result)}>
                <p className="result-name">{result.clinicName}</p>
                <p className="result-address">
                    {result.fullAddress}
                </p>
                <div className="result-contacts">
                    <p className="result-contacts__item">
                        <a href={result.website} target="_blank">{result.website}</a>
                    </p>
                    <p className="result-contacts__item">
                        <a href={"tel:"+result.phone}>p. {result.phone}</a>
                    </p>
                </div>
            </div>
        );
    }), [results, chosen]);

    return (
        <div className="results">
            {resultsList}
            {
                results.length === 0 &&
                <p className="no-results">No results</p>
            }
        </div>
    );
}

export default SearchResults;
