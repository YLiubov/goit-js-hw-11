
export function searchImages(value) {
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = "43313350-287c14b2000f5e13b9dad3a59";

    const params = new URLSearchParams({
        key: API_KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })
        
    return fetch(`${BASE_URL}?${params}`)
    .then(recponse => {
        if(!recponse.ok) {
            throw new Error(recponse.statusText)
        }
      
        return recponse.json();
    } );
}

       