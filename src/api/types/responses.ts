type Response<T> = {
    status: string,
    data: {
        results: T[]
    }
}

export type ClinicData = {
    "city": string,
    "state": string,
    "clinicName": string,
    "fullAddress": string,
    "postcode": number,
    "website": string,
    "phone": string,
    "suburb": string,
    "email": string,
    "aboutClinic": string,
}

export type Suggestion = {
    suggestion: string,
}

export type ClinicsResponse = Response<ClinicData>;
export type SuggestionsResponse = Response<Suggestion>;


