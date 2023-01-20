import Search from './components/search/Search';
import lambdaIcon from '../../assets/lambda.svg';
import ClinicsService from '../../api/clinics';
import { useState } from 'react';
import { ClinicData } from '../../api/clinicsTypes';

import './Home.css';
import SearchResults from './components/searchResults/SearchResults';


function Home() {
    const [searchResults, setSearchResults] = useState<Array<ClinicData>>([]);
    const [chosen, setChosen] = useState<ClinicData | null>(null);
    const baseUrl = 'https://clinics.onrender.com/clinics/';
    const service = new ClinicsService(baseUrl);

    const handleSearch = (searchValue: string, option: { name: string, route: string }) => {
        service.searchClinics(option.route, searchValue).then((res) => {
            const results = res.data.data.results;
            setChosen(results[0])
            setSearchResults(results);
        });
    };

    const handleChoose = (result: ClinicData) => {
        setChosen(result);
    }

    return (
        <div className="home">
            <div className="search-container">
                <Search onSearchChange={handleSearch}/>
                <SearchResults results={searchResults}
                               chosen={chosen!}
                               onChosen={handleChoose}/>
            </div>
            <div className="details-container">
                <div className="logo-container">
                    <img src={lambdaIcon} alt="Logo"/>
                </div>
            </div>

        </div>
    );
}

export default Home;
