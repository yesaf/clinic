import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SuggestionsResponse } from './types/responses';

class SuggestionsService {

    api: AxiosInstance;

    constructor(baseURL: string) {
        this.api = axios.create({
            baseURL: baseURL,
        });
    }

    getSuggestions(value: string, option: string): Promise<AxiosResponse<SuggestionsResponse> | null> {

        option = option.toLowerCase();

        const optionToRoute = {
            'city': '/cities/searchName',
            'state': '/cities/searchState',
            'suburb': '/suburbs/searchSuburbs',
            'clinic name': '/clinics/searchName',
        };

        if (!(option in optionToRoute)) {
            return Promise.resolve(null);
        }

        return this.api.get(optionToRoute[option as 'city' | 'state' | 'suburb'], {
            params: {
                value,
            },
        });
    }
}

export default SuggestionsService;
