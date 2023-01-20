import { memo, useEffect, useMemo, useState } from 'react';
import searchIcon from '../../../../assets/search.svg';
import SearchOption from './components/searchOption/SearchOption';
import './Search.css';
import SearchSuggestions from './components/searchSuggestions/SearchSuggestions';

interface IProps {
    onSearchChange: (searchValue: string, option: { name: string, route: string }) => void;
}

function Search({ onSearchChange }: IProps) {
    const options = useMemo(() => [
        {
            name: 'City',
            route: 'byCity',
        },
        {
            name: 'State',
            route: 'byState',
        },
        {
            name: 'ZIP',
            route: 'byPostcode',
        },
        {
            name: 'Clinic name',
            route: 'byName',
        },
        {
            name: 'Suburb',
            route: 'bySuburb',
        },
    ], []);
    const [searchValue, setSearchValue] = useState<string>('Canberra');
    const [chosenOption, setChosenOption] = useState<string>(options[0].name);


    useEffect(() => {
        onSearchChange(searchValue, options.find((option) => option.name === chosenOption)!);
    }, [searchValue, chosenOption]);

    const handleClickedOption = (option: string) => {
        setSearchValue('');
        setChosenOption(option);
    };

    const optionsList = useMemo(() => {
        return options.map((option, index) => {
            return <SearchOption key={index}
                                 option={option.name}
                                 isChosen={option.name === chosenOption}
                                 onClick={handleClickedOption}/>;
        });
    }, [options, chosenOption]);

    const handleSuggestionClick = (suggestion: string) => {
        setSearchValue(suggestion);
    }

    return (
        <div className="search">
            <div className="search-input">
                <img src={searchIcon} alt="" className="search-icon"/>
                <input type="text" placeholder="Search for smth..."
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}/>
                <SearchSuggestions value={searchValue}
                                   optionName={chosenOption}
                                   onClicked={handleSuggestionClick}/>
            </div>
            <div className="search-options">
                {optionsList}
            </div>
        </div>
    );
}

export default memo(Search);
