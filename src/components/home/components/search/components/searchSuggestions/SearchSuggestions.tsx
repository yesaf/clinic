import { memo, useEffect, useMemo, useState, KeyboardEvent } from 'react';
import SuggestionsService from '../../../../../../api/suggestions';
import { Suggestion } from '../../../../../../api/types/responses';

import './SearchSuggestions.css';

interface IProps {
    value: string;
    optionName: string;
    onClicked: (suggestion: string) => void;
}

function SearchSuggestions({ value, optionName, onClicked }: IProps) {
    const [ready, setReady] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<Array<Suggestion>>([]);

    const service = useMemo(() => {
        return new SuggestionsService('https://clinics.onrender.com')
    }, []);

    useEffect(() => {
        setReady(false)
        service.getSuggestions(value, optionName).then((res) => {
            if (res) {
                setSuggestions(res.data.data.results);
                setReady(true);
            }
        })
    }, [value, optionName]);


    const handleEnter = (suggestion: string) => {
        return (e: KeyboardEvent<HTMLSpanElement>) => {
            if (e.key === 'Enter') {
                onClicked(suggestion);
            }
        }
    }

    const suggestionsList = useMemo(() => {
        return suggestions.map((suggestion, index) => {
            return (
                <span className="suggestion" key={index}
                      tabIndex={0}
                      onMouseDown={() => onClicked(suggestion.suggestion)}
                      onKeyPress={handleEnter(suggestion.suggestion)}>
                    {suggestion.suggestion}
                </span>
            )
        })
    }, [suggestions]);

    return (
        <div className={`search-suggestions ${ready ? 'ready' : ''}`}>
            {suggestionsList}
        </div>
    );
}

export default memo(SearchSuggestions);
