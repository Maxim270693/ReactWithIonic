import axios from "axios";

export type ResponseType = {
    adaptability: number
    affection_level: number
    alt_names: string
    cfa_url: string
    child_friendly: number
    country_code: string
    country_codes: string
    description: string
    dog_friendly: number
    energy_level: number
    experimental: number
    grooming: number
    hairless: number
    health_issues: number
    hypoallergenic: number
    id: string
    image: {id: string, width: number, height: number, url: string}
    indoor: number
    intelligence: number
    lap: number
    life_span: string
    name: string
    natural: number
    origin: string
    rare: number
    reference_image_id: string
    rex: number
    shedding_level: number
    short_legs: number
    social_needs: number
    stranger_friendly: number
    suppressed_tail: number
    temperament: string
    vcahospitals_url:string
    vetstreet_url: string
    vocalisation: number
    weight: {imperial: string, metric: string}
    wikipedia_url: string

}


export const API = {
    getBreeds() {
        return axios.get<Array<ResponseType>>('https://api.thecatapi.com/v1/breeds',
            {headers: {'API': '02860704-ba03-40f1-a5ee-913ac989847b'}})
    }
}