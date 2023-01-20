import Search from './components/search/Search';
import lambdaIcon from '../../assets/lambda.svg';
import ClinicsService from '../../api/clinics';
import { useState } from 'react';
import { ClinicData } from '../../api/types/responses';

import './Home.css';
import SearchResults from './components/searchResults/SearchResults';
import Details from './components/details/Details';


function Home() {
    const [searchResults, setSearchResults] = useState<Array<ClinicData>>([]);
    const [chosenClinic, setChosenClinic] = useState<ClinicData | null>(null);
    const baseUrl = 'https://clinics.onrender.com/clinics/';
    const service = new ClinicsService(baseUrl);

    const handleSearch = (searchValue: string, option: { name: string, route: string }) => {
        service.searchClinics(option.route, searchValue).then((res) => {
            const results = res.data.data.results;
            setChosenClinic(results[0]);
            setSearchResults(results);
        });
    };

    const handleChoose = (result: ClinicData) => {
        setChosenClinic(result);
    };

    return (
        <div className="home">
            <div className="search-container">
                <Search onSearchChange={handleSearch}/>
                <SearchResults results={searchResults}
                               chosen={chosenClinic!}
                               onChosen={handleChoose}/>
            </div>
            <div className="details-container">
                <div className="logo-container">
                    <img src={lambdaIcon} alt="Logo"/>
                </div>
                {
                    chosenClinic &&
                    <Details clinic={chosenClinic}/>
                }
            </div>

        </div>
    );
}

export default Home;
