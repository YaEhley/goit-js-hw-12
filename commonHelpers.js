import{a as b,i as g,S as v}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function f(e,s){const i="43045712-2af2c0632fda7941642b98154",o="https://pixabay.com/api/",n={key:i,q:e,image_type:"photo",orientation:"horizontal",per_page:15,page:s,safesearch:!0};try{const d=await b.get(o,{params:n});return d.data.hits.length===0&&E(),d.data}catch(d){throw d}}function E(){g.show({position:"topRight",messageColor:"white",progressBar:!1,backgroundColor:"red",closeOnClick:!0,close:!1,message:"Sorry, there are no images matching your search query. Please, try again!"})}const C=document.querySelector(".gallery");function O(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}"> <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class='discription'><p><b>Likes </b>${e.likes}</p>
        <p><b>Views </b>${e.views}</p>
        <p><b>Comments </b>${e.comments}</p>
        <p><b>Downloads </b>${e.downloads}</p>
        </div>
      </li>`}function p(e){const s=e.hits.map(O).join("");C.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt",captionDelay:250},r=new v(".gallery a",i);r.on("show.simplelightbox"),r.refresh()}const $=document.querySelector("form"),u=document.querySelector(".gallery"),m=document.querySelector(".btn-load-more"),a=document.querySelector(".loader");$.addEventListener("submit",P);m.addEventListener("click",M);let c,l,h;async function P(e){if(e.preventDefault(),a.classList.add("is-open"),l=1,c=e.target.elements.search.value.trim(),u.innerHTML="",c==="")a.classList.remove("is-open"),y(),u.innerHTML="",w("Please enter a search tag");else{const s=await f(c,l);h=Math.ceil(s.totalHits/15),p(s),a.classList.remove("is-open"),L(),e.target.reset()}}async function M(){if(l+=1,a.classList.add("is-open"),c==="")a.classList.remove("is-open"),u.innerHTML="",w("Please enter a search tag");else{const e=await f(c,l);p(e),a.classList.remove("is-open"),L();const s=u.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:s*2})}}function y(){m.classList.add("hidden")}function q(){m.classList.remove("hidden")}function L(){l>=h?(y(),B("We're sorry, but you've reached the end of search results")):q()}function w(e){g.show({title:"",message:`${e}`,position:"topRight",messageColor:"white",closeOnClick:!0,close:!1,backgroundColor:"red"})}function B(e){g.show({title:"",message:`${e}`,position:"topRight",messageColor:"white",closeOnClick:!0,close:!1,backgroundColor:"green"})}
//# sourceMappingURL=commonHelpers.js.map