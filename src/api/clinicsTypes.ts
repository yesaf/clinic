export interface ClinicData {
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

export interface ClinicsResponse {
    status: string,
    data: {
        results: ClinicData[]
    }
}


