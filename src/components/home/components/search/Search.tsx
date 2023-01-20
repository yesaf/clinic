import { memo, useEffect, useMemo, useState } from 'react';
import searchIcon from '../../../../assets/search.svg';
import SearchOption from './components/searchOption/SearchOption';
import './Search.css';

interface IProps {
    onSearchChange: (searchValue: string, option: { name: string, route: string }) => void;
}

function Search({ onSearchChange }: IProps) {
    const options = [
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
    ];
    const [searchValue, setSearchValue] = useState<string>('Canberra');
    const [chosen, setChosen] = useState<string>(options[0].name);


    useEffect(() => {
        onSearchChange(searchValue, options.find((option) => option.name === chosen)!);
    }, [searchValue, chosen]);

    const handleClickedOption = (option: string) => {
        setChosen(option);
    };

    const optionsList = useMemo(() => {
        return options.map((option, index) => {
            return <SearchOption key={index}
                                 option={option.name}
                                 isChosen={option.name === chosen}
                                 onClick={handleClickedOption}/>;
        });
    }, [options]);

    return (
        <div className="search">
            <div className="search-input">
                <img src={searchIcon} alt="" className="search-icon"/>
                <input type="text" placeholder="Search for smth..."
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            <div className="search-options">
                {optionsList}
            </div>
        </div>
    );
}

export default memo(Search);
