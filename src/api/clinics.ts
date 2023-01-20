import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ClinicsResponse } from './clinicsTypes';

class ClinicsService {
    api: AxiosInstance

    constructor(baseURL: string) {
        this.api = axios.create({
            baseURL: baseURL,
        });
    }

    searchClinics(route: string, value: string): Promise<AxiosResponse<ClinicsResponse>> {
        return this.api.get(route, {
            params: {
                value
            }
        });
    }
}

export default ClinicsService;
