import { createMarcup } from "./js/render-functions";
import { searchImages } from "./js/pixabay-api";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector(".js-search-form");
const imagesList = document.querySelector(".js-images-list");
const loaderEl = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.js-images-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

loaderEl.style.display = 'none';


// loaderEl.style.borderColor = 'white';
// loaderEl.style.borderBottomColor = 'transparent';

formEl.addEventListener('submit', handleSubmit);

 function handleSubmit(event) {
    event.preventDefault();
    
   
    
    loaderEl.style.display = 'block';
    imagesList.innerHTML = '';

  const searchInput = event.currentTarget.querySelector('.search-input').value;

       searchImages(searchInput)
       .then(data => {
      
        
        if (!data.hits.length) {
            iziToast.error({title: 'Error', messege: 'Sorry, there are no images matching your search query. Please try again!',})
       
        return data;

    } else {
      imagesList.insertAdjacentHTML('beforeend', createMarcup(data.hits))


        lightbox.refresh();
       searchInput = '';
    }
  })
      
   

    .catch(error => {
      
     
      if(error.length != undefined) {
        iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
      }
      
    })
    .finally(() =>{
     
      loaderEl.style.display = 'none';
      })
}
