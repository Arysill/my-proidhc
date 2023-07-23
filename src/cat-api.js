import axios from "axios";
axios.defaults.headers.common["x-api-key"] = `live_793CeG5q67qnH6fpJBwdr6YWNaVcGC2tcdHB4T47MUXXJN1CFrX7Fw14EMbW77uI`;
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
    return axios.get(`/breeds`).then(response => {
    
        return response.data;
    })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then((response) => {
  
    return response.data;
})
}