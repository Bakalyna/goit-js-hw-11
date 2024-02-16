import{S as c,i as u}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const l={form:document.querySelector(".js-form"),galleryElem:document.querySelector(".gallery"),loaderElem:document.querySelector(".loader")};function f(e){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"42320174-3e6043d2cde7399227b0118b6",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${s}?${o}`;return fetch(i).then(t=>t.json())}const m=new c(".gallery a",{});function d(e){const s=h(e);l.galleryElem.innerHTML=s,m.refresh()}function p(e){return console.log(e),`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-link" alt="" src="${e.previewURL}" />
        </a>
        <ul class="list-content">
          <li class="list-text">
            <p class="list-text-item">Likes <span>${e.likes}</span></p>
          </li>
          <li class="list-text">          
            <p class="list-text-item">Views <span>${e.views}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Comments <span>${e.comments}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Downloads <span>${e.downloads}</span></p>
          </li>
        </ul>
        </li>`}function h(e){return e.map(p).join("")}l.form.addEventListener("submit",g);function g(e){e.preventDefault();const s=e.target.firstElementChild.value.trim();s!==""&&(y(),f(s).then(o=>{o.hits.length===0&&a(),L(),d(o.hits)}).catch(()=>{a()}),l.form.reset())}function y(){l.loaderElem.classList.remove("is-hidden")}function L(){l.loaderElem.classList.add("is-hidden")}function a(){u.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"600px"})}
//# sourceMappingURL=commonHelpers.js.map
