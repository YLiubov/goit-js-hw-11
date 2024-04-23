import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(i){return i.map(({id:r,webformatURL:s,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:d})=>`<li class="images-list-item" data-id='${r}'>
    <a class="images-list-link" href="${o}">
        <img class="images-list-image" src="${s}" alt="${e}"></img>
    </a>
    <div class="tumb">
        <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="text">${t}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="text">${a}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="text">${u}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="text">${d}</p>
        </div>
    </div>
</li>`).join("")}function f(i){const r="https://pixabay.com/api/",s="43313350-287c14b2000f5e13b9dad3a59",o=new URLSearchParams({key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const p=document.querySelector(".js-search-form"),l=document.querySelector(".js-images-list"),n=document.querySelector(".loader"),y=new m(".js-images-list a",{captions:!0,captionsData:"alt",captionDelay:250});n.style.display="none";p.addEventListener("submit",g);function g(i){i.preventDefault(),n.style.display="block",l.innerHTML="";const r=i.currentTarget.querySelector(".search-input").value;f(r).then(s=>{if(s.hits.length)l.insertAdjacentHTML("beforeend",h(s.hits)),y.refresh(),r="";else return c.error({title:"Error",messege:"Sorry, there are no images matching your search query. Please try again!"}),s}).catch(s=>{s.length!=null&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{n.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
