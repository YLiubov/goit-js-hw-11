import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s,o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"43249627-6464a1b02c37cf8fbedd51288",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw new Error("Failed to fetch images")})}function f(s){return s.hits.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:u})=>`
        <li class="card">
            <div class="imeges">
                <a href="${i}">
                    <img src="${r}" alt="${e}" class="picture"/>
                </a>
            </div>
            <ul class='descriptions'>
                <li class='descriptions_item'>
                    <span>Likes</span>
                    <span>${t}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Views</span>
                    <span>${n}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Comments</span>
                    <span>${d}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Downloads</span>
                    <span>${u}</span>
                </li>
            </ul>
        </li>`).join("")}const h=new p(".list_gallery a"),y=document.querySelector(".main_form"),c=document.querySelector(".list_gallery"),a=document.querySelector(".loader"),g=()=>{a.style.display="block"},w=()=>{a.style.display="none"};window.addEventListener("load",L);function L(){console.dir(a),setTimeout(()=>{a.remove()},300)}y.addEventListener("submit",b);function b(s){s.preventDefault(),c.innerHTML="";let o=s.currentTarget.elements.inputElement.value;s.currentTarget.elements.inputElement.value="",m(o).then(r=>{if(r.total==0)return l.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;g(),c.insertAdjacentHTML("beforeend",f(r)),h.refresh()}).catch(r=>{l.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{w()})}
//# sourceMappingURL=commonHelpers.js.map
