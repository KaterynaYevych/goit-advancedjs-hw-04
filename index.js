import{a as S,S as q,i as l}from"./assets/vendor-Cu43xbyG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const $="21579968-57157616dd1d75172f384a8c7",B="https://pixabay.com/api/";async function f(r,s){return(await S.get(B,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const m=document.querySelector("#gallery"),p=document.querySelector("#loader"),g=document.querySelector("#load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const s=r.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:o,comments:b,downloads:w})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${a}" alt="${e}" loading="lazy" />
          <div class="card-info">
            <div class="card-info-item">
              <span class="card-info-label">Likes</span>
              <span class="card-info-value">${t}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Views</span>
              <span class="card-info-value">${o}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Comments</span>
              <span class="card-info-value">${b}</span>
            </div>
            <div class="card-info-item">
              <span class="card-info-label">Downloads</span>
              <span class="card-info-value">${w}</span>
            </div>
          </div>
        </a>
      </li>`).join("");m.insertAdjacentHTML("beforeend",s),E.refresh()}function M(){m.innerHTML=""}function h(){p.classList.add("is-visible")}function v(){p.classList.remove("is-visible")}function L(){g.classList.add("is-visible")}function c(){g.classList.remove("is-visible")}const P=document.querySelector(".form"),O=document.querySelector("#load-more");let d="",i=1,u=0;P.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements["search-text"].value.trim();if(s){d=s,i=1,M(),c(),h();try{const a=await f(d,i);if(u=a.totalHits,a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(a.hits),a.hits.length<u&&L()}catch(a){l.error({message:`Something went wrong: ${a.message}`,position:"topRight"})}finally{v()}}});O.addEventListener("click",async()=>{i+=1,h(),c();try{const r=await f(d,i);y(r.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),i*15>=u?(c(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch(r){l.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
